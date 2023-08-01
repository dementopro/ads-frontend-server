import { LoginForm, PaymentForm, RegisterForm } from "@/types/auth"

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

export function paymentValidate(values: PaymentForm) {
  const errors = {} as PaymentForm
  if (!values.card_holder) {
    errors.card_holder = 'Card holder is required'
  }
  if (!values.card_number) {
    errors.card_number = 'Card number is required'
  }
  if (values.card_number.length !== 16) {
    errors.card_number = 'Card number must be 16 digits'
  }
  if (!values.cvc) {
    errors.cvc = 'CVC is required'
  }
  if (values.cvc.length !== 3 && values.cvc.length !== 4) {
    errors.cvc = 'CVC must be 3 or 4 digits'
  }
  if (!values.expiration) {
    errors.expiration = 'Expiration is required'
  }
  return errors
}
