import { HttpException, HttpStatus } from '@nestjs/common';

export class PasswordMismatchException extends HttpException {
  constructor() {
    super('As senhas não coincidem.', HttpStatus.BAD_REQUEST);
  }
}
