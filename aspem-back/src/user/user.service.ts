import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/user-dto';
import { PasswordMismatchException } from './exceptions/password-mismatch.exception';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(username: string, password: string, confirmPassword: string): Promise<User> {
    if (password !== confirmPassword) {
      throw new PasswordMismatchException();
    }
  
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      throw new BadRequestException('A senha deve conter no mínimo 8 caracteres, incluindo um número e um caractere especial pelo menos.');
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    return this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
  }

  async getAllUsers(page: number = 1, limit: number = 10): Promise<{ users: Omit<User, 'password'>[], total: number }> {
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
  
    const skip = (pageNumber - 1) * limitNumber;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        skip: skip,
        take: limitNumber,
        select: {
          id: true,
          username: true,
          isAdmin: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        },
        where: {
          deletedAt: null,
        },
      }),
      this.prisma.user.count({
        where: {
          deletedAt: null,
        },
      }),
    ]);
  
    return { users, total };
  }

  async findUserByUsername(username: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });
  
    if (!user) return null;

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findUserById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
  
    if (!user) return null;

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async searchUsers(username: string, page: number, limit: number): Promise<{ users: Omit<User, 'password'>[], total: number }> {
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
  
    const skip = (pageNumber - 1) * limitNumber;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where: {
          username: {
            contains: username,
            mode: 'insensitive',
          },
        },
        skip: skip,
        take: limitNumber,
        select: {
          id: true,
          username: true,
          isAdmin: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        },
      }),
      this.prisma.user.count({
        where: {
          username: {
            contains: username,
            mode: 'insensitive',
          },
        },
      }),
    ]);

    return { users, total };
  }

  async findUserWithPasswordByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async userExists(username: string): Promise<boolean> {
    const user = await this.findUserByUsername(username);
    return !!user;
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.findUserById(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    await this.prisma.user.delete({
      where: { id },
    });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findUserById(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }
  
    const updateData: any = {};
  
    if (updateUserDto.username) {
      const existingUser = await this.findUserByUsername(updateUserDto.username);
      if (existingUser && existingUser.id !== id) {
        throw new BadRequestException('Nome de usuário já está em uso.');
      }
      updateData.username = updateUserDto.username;
    }
  
    if (updateUserDto.password) {
      updateData.password = await bcrypt.hash(updateUserDto.password, 10);
    }
  
    if (updateUserDto.isAdmin !== undefined) {
      updateData.isAdmin = updateUserDto.isAdmin;
    }
  
    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }
}
