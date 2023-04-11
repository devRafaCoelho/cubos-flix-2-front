import * as yup from 'yup'

export const schemaRegisterUser = yup.object().shape({
  name: yup.string().required('Este campo deve ser preenchido'),
  email: yup.string().required('Este campo deve ser preenchido'),
  password: yup.string().required('Este campo deve ser preenchido'),
  confirmPassword: yup.string().required('Este campo deve ser preenchido')
})

export const schemaLogin = yup.object().shape({
  email: yup.string().required('Este campo deve ser preenchido'),
  password: yup.string().required('Este campo deve ser preenchido')
})

export const schemaUpdateUser = yup.object().shape({
  name: yup.string().required('Este campo deve ser preenchido'),
  email: yup.string().required('Este campo deve ser preenchido'),
  password: yup.string().required('Este campo deve ser preenchido'),
  newPassword: yup.string().nullable(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), undefined], 'As senhas não são iguais')
    .nullable()
})

export const schemaAddComment = yup.object().shape({
  description: yup.string().required('Este campo deve ser preenchido')
})
