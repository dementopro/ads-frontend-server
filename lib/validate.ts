import { LoginForm, PaymentForm, RegisterForm, ResetPasswordForm } from "@/types/auth"

import { CompanyForm } from "@/types/planning";
import { DETAIL_LIMIT } from "@/data/constant";
import axios from '@/lib/axios';

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
  // Email format validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid email format';
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  if (!values.verification_code) {
    errors.verification_code = 'Verification code is required'
  }
  return errors
}

// Function to check email format
export function isValidEmail(email: string): boolean {
  // Regular expression for basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function paymentValidate(values: PaymentForm) {
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
  const response = await axios({
    url: `/fapi/verify_credit_card_num?credit_card_num=${values.card_number}`,
    method: 'GET',
  });
  // Convert the response to JSON
  const responseData = response.data;

  // Check the isValid property
  if (!responseData.isValid) {
    errors.card_number = 'Card number is invalid'
  }
  if (!values.cvc) {
    errors.cvc = 'CVC is required'
  }
  if (values.cvc.length !== 3 && values.cvc.length !== 4) {
    errors.cvc = 'CVC must be 3 or 4 digits'
  }
  const date = new Date();
  let month = ("0" + (date.getMonth() + 1)).slice(-2)
  let year = date.getFullYear();
  const expYear = parseInt(values.expiration.slice(0, 4), 10);
  const expMonth = parseInt(values.expiration.slice(5, 7), 10);
  let monthNum = parseInt(month, 10);
  if (expYear < year || (expYear === year && expMonth < monthNum)) {
    errors.expiration = 'Expiration is invalid';
    console.log('error!');
  }
  if (!values.expiration) {
    errors.expiration = 'Expiration is required'
  }
  return errors
}

export function resetPasswordValidate(values: ResetPasswordForm) {
  const errors = {} as ResetPasswordForm
  if (!values.password) {
    errors.password = 'Password is required'
  }
  if (!values.re_password) {
    errors.re_password = 'Confirm password is required'
  } else if (values.password !== values.re_password) {
    errors.re_password = 'Confirm password must match password'
  }
  if (!values.verification_code) {
    errors.verification_code = 'Verification code is required'
  }
  return errors
}

export function CompanyValidate(values: CompanyForm) {
  const errors = {} as CompanyForm;

  errors.companyName = values?.companyName ? values.companyName.length > 50 ? 'Company Name should be shorter than 50 characters' : '' : 'Company Name is required';
  errors.websiteURL = values?.websiteURL ? /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(values.websiteURL) ? '' : 'Enter a valid website url' : 'Website URL is required';
  errors.description = values?.description ? (values.description.length >= 50 && values.description.length <= DETAIL_LIMIT) ? '' : `Company description should be 50 - ${DETAIL_LIMIT} characters` : 'Company description is required';
  errors.sellingDescription = values?.sellingDescription ? '' : 'Company selling description is required';
  errors.idealCustomerProfile = values?.idealCustomerProfile ? (values.description.length <= DETAIL_LIMIT) ? '' : `Company description should be 50 - ${DETAIL_LIMIT} characters` : 'Ideal customer profile is required';
  errors.competitors = values?.competitors ? (values.description.length <= DETAIL_LIMIT) ? '' : `Company description should be 50 - ${DETAIL_LIMIT} characters` : 'Competitor is required';
  errors.targetAudience = values?.targetAudience ? (values.description.length <= DETAIL_LIMIT) ? '' : `Company description should be 50 - ${DETAIL_LIMIT} characters` : 'Target Audience is required';
  errors.email = values?.email ? /^\w+([\.-]?\w+)*@gmail\.com$/.test(values?.email) ? '' : 'Email is not valid gmail!' : 'Email is required';
  errors.marketing_template = values?.marketing_template ? '' : 'Marketing Template is required';

  return errors;
}
