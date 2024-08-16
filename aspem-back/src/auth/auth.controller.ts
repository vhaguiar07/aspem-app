import { Controller, Post, Request, UseGuards, BadRequestException, UnauthorizedException, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthDto } from './dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Realiza o login de um usuário' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  @ApiBody({ type: AuthDto })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Request() req): Promise<{ access_token: string }> {
    try {
      const user = req.user;
      if (!user) {
        throw new UnauthorizedException('Credenciais inválidas');
      }
      return this.authService.login(user);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException('Senha incorreta ou usuário não encontrado');
      }
      throw new BadRequestException('Erro ao realizar login.');
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Realiza o logout de um usuário' })
  @ApiResponse({ status: 200, description: 'Logout realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Usuário não autenticado.' })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Request() req): Promise<{ message: string }> {
    try {
      const user = req.user;
      if (!user) {
        throw new UnauthorizedException('Usuário não autenticado');
      }
      await this.authService.logout(user);
      return { message: 'Logout realizado com sucesso.' };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException('Usuário não autenticado');
      }
      throw new BadRequestException('Erro ao realizar logout.');
    }
  }
}
