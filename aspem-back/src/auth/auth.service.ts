import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private revokedTokens: Set<string> = new Set();

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByUsername(username);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha incorreta');
    }
    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
    };
  }

  async logout(user: any): Promise<void> {
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);

    this.revokedTokens.add(token);
  }

  async isTokenRevoked(token: string): Promise<boolean> {
    return this.revokedTokens.has(token);
  }
}
