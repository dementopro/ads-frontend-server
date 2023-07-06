import { LoginForm, RegisterForm } from "@/types/auth"

export function loginValidate(valuse: LoginForm) {
  const errors = {} as LoginForm
  if (!valuse.email) {
    errors.email = 'Email is required'
  }
  if (!valuse.password) {
    errors.password = 'Password is required'
  }
  return errors
}

export function registerValidate(valuse: RegisterForm) {
  const errors = {} as RegisterForm
  if (!valuse.username) {
    errors.username = 'Username is required'
  }
  if (!valuse.email) {
    errors.email = 'Email is required'
  }
  if (!valuse.password) {
    errors.password = 'Password is required'
  }
  return errors
}
