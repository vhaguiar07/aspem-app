import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async findUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { 
        id,
      },
    });
  }

  async userExists(username: string): Promise<boolean> {
    const user = await this.findUserByUsername(username);
    return !!user;
  }

  async deleteUser(id: number): Promise<void> {
    // Verificar se o usuário existe antes de tentar excluir
    const user = await this.findUserById(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    await this.prisma.user.delete({
      where: { id },
    });
  }

  async updateUser(id: number, username?: string, password?: string): Promise<User> {
    const user = await this.findUserById(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    const updateData: any = {};

    if (username) {
      // Verificar se o novo nome de usuário já está em uso
      const existingUser = await this.findUserByUsername(username);
      if (existingUser && existingUser.id !== id) {
        throw new BadRequestException('Nome de usuário já está em uso.');
      }
      updateData.username = username;
    }

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }
}
