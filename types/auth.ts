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

export interface PaymentForm {
  card_number: string;
  card_holder: string;
  country: string;
  expiration: string;
  cvc: string;
}

export interface ResetPasswordForm {
  email: string;
  password: string;
  re_password: string;
  verification_code: string;
}

export interface ProfileForm {
  username: string;
  email: string;
  job_title: string;
  company_name: string;
}
