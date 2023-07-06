export interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

export interface RegisterForm {
  email: string;
  username: string;
  password: string;
  verification_code: string;
  referral_code?: string;
}
