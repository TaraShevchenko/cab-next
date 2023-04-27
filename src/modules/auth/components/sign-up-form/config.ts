import * as yup from 'yup'

export const signUpFormNames = {
   email: 'email',
   password: 'password',
   confirmPassword: 'confirmPassword',
}

export const signUpFormInitialValues = {
   [signUpFormNames.email]: '',
   [signUpFormNames.password]: '',
   [signUpFormNames.confirmPassword]: '',
}

export const signUpFormValidationSchema = yup.object().shape({
   [signUpFormNames.email]: yup
      .string()
      .trim()
      .required('Email is required')
      .email('Email incorrect')
      .max(64, 'Max 62'),
   [signUpFormNames.password]: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a special character'),
   [signUpFormNames.confirmPassword]: yup
      .string()
      .oneOf([yup.ref(signUpFormNames.password)], 'Passwords do not match')
      .required('Сonfirm password is required'),
})
