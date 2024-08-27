export interface RegisterUserData {
    username: string;
    password: string;
    confirmPassword: string;
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
    failure: any | null;
    successMessage: string;
  }
  