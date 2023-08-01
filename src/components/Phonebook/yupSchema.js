import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).max(10).required()
})