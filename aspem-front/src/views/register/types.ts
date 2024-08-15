export interface RegisterUserData {
    username: string;
    password: string;
  }
  
  export interface RegisterResponse {
    id: number;
    username: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
    access_token?: string;
  }
  
  export interface RegisterState {
    loading: boolean;
    error: string | null;
    success: boolean;
  }
  