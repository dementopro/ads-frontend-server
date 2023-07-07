import { LoginForm, RegisterForm } from "@/types/auth"

export function loginValidate(values: LoginForm) {
  const errors = {} as LoginForm
  if (!values.email) {
    errors.email = 'Email is required'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  return errors
}

export function registerValidate(values: RegisterForm) {
  const errors = {} as RegisterForm
  if (!values.username) {
    errors.username = 'Username is required'
  }
  if (!values.email) {
    errors.email = 'Email is required'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  if (!values.verification_code) {
    errors.verification_code = 'Verification code is required'
  }
  return errors
}
