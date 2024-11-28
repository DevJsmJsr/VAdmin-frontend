import * as z from 'zod'

export const LoginSchema = z.object({
  username: z.string().email({
    message: "Ingrese un email valido"
  }),
  password: z.string().min(6,{
    message: "Minimo 6 caracteres"
  })
})

export const loginInputs = ()=>[
  {
    id:'username',
    label: 'labels.email',
    type: 'text',
    name: 'username',
    placeholder: 'placeholders.email'
  },
  {
    id:'password',
    label: 'labels.password',
    type: 'password',
    name: 'password',
    placeholder: 'placeholders.password'
  },
]