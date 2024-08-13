import { Controller, Post, Request, UseGuards, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
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
      return this.authService.login(req.user);
    } catch (error) {
      throw new BadRequestException('Erro ao realizar login.');
    }
  }
}
