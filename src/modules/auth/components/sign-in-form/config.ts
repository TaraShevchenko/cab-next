import * as yup from 'yup'

export const signInFormNames = {
   email: 'email',
   password: 'password',
}

export const signInFormInitialValues = {
   [signInFormNames.email]: '',
   [signInFormNames.password]: '',
}

export const signInFormValidationSchema = yup.object().shape({
   [signInFormNames.email]: yup
      .string()
      .trim()
      .required('Email is required')
      .email('Email incorrect')
      .max(64, 'Max 64'),
   [signInFormNames.password]: yup.string().required('password is required'),
})
