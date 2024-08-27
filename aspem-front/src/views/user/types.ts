export interface User {
  id: string;
  username: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}
