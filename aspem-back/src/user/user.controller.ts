import { Controller, Post, Body, Get, Param, Delete, Patch, NotFoundException, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { User } from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

class CreateUserDto {
  username: string;
  password: string;
}

class UpdateUserDto {
  username?: string;
  password?: string;
}

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuário criado com sucesso.', 
    schema: {
      example: {
        id: 1,
        username: 'exampleUser',
        createdAt: '2024-08-14T12:34:56.789Z',
        updatedAt: '2024-08-14T12:34:56.789Z',
        deletedAt: null,
        access_token: 'jwt.token.exemplo'
      },
    },
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos. Verifique se o nome de usuário é único e a senha atende aos requisitos de segurança.' 
  })
  @ApiBody({
    description: 'Dados necessários para criar um novo usuário.',
    type: CreateUserDto,
    examples: {
      example: {
        summary: 'Dados do usuário para criação',
        value: {
          username: 'novoUsuario',
          password: 'senhaSegura123',
        },
      },
    },
  })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const { username, password } = createUserDto;

    if (await this.userService.userExists(username)) {
      throw new BadRequestException('Usuário já existe.');
    }

    const user = await this.userService.createUser(username, password);

    const payload = { username: user.username, sub: user.id };
    const accessToken = await this.authService.signToken(payload);

    return {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
      access_token: accessToken,
    };
  }

  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de usuários encontrada com sucesso.',
    schema: {
      example: [
        {
          id: 1,
          username: 'exampleUser',
          createdAt: '2024-08-14T12:34:56.789Z',
          updatedAt: '2024-08-14T12:34:56.789Z',
          deletedAt: null,
        },
      ],
    },
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Nenhum usuário encontrado.' 
  })
  @Get()
  async getAllUsers(): Promise<User[]> {
    const users = await this.userService.getAllUsers();
    if (users.length === 0) {
      throw new NotFoundException('Nenhum usuário encontrado.');
    }
    return users;
  }

  @ApiOperation({ summary: 'Obtém um usuário pelo ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuário encontrado com sucesso.',
    schema: {
      example: {
        id: '1',
        username: 'exampleUser',
        createdAt: '2024-08-14T12:34:56.789Z',
        updatedAt: '2024-08-14T12:34:56.789Z',
        deletedAt: null,
      },
    },
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuário não encontrado com o ID fornecido.' 
  })
  @ApiParam({ name: 'id', type: 'string', description: 'ID do usuário que será retornado.' })
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findUserById(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }
    return user;
  }
  
  @ApiOperation({ summary: 'Remove um usuário pelo ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuário removido com sucesso.' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuário não encontrado com o ID fornecido.' 
  })
  @ApiParam({ name: 'id', type: 'string', description: 'ID do usuário que será removido.' })
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    const user = await this.userService.findUserById(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }
    await this.userService.deleteUser(id);
  }
  
  @ApiOperation({ summary: 'Atualiza um usuário pelo ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuário atualizado com sucesso.',
    schema: {
      example: {
        id: '1',
        username: 'updatedUser',
        createdAt: '2024-08-14T12:34:56.789Z',
        updatedAt: '2024-08-15T12:34:56.789Z',
        deletedAt: null,
      },
    },
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos. Verifique se o nome de usuário atende aos requisitos de segurança.' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuário não encontrado com o ID fornecido.' 
  })
  @ApiParam({ name: 'id', type: 'string', description: 'ID do usuário que será atualizado.' })
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const { username, password } = updateUserDto;
    const user = await this.userService.findUserById(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }
  
    const updatedUser = await this.userService.updateUser(id, username, password);
  
    return updatedUser;
  }
}
