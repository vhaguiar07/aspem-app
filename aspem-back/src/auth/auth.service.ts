import { Injectable, UnauthorizedException } from '@nestjs/common';
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

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
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
