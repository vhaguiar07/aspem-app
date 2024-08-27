export class CreateUserDto {
  username: string;
  password: string;
  confirmPassword: string;
}
  
export class UpdateUserDto {
  username?: string;
  password?: string;
  isAdmin?: boolean;
}
