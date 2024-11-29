import * as z from 'zod'

export const LoginSchema = z.object({
  username: z.union([
    z.string().email("Ingrese un email valid0"),
    z.number().refine((num) => num > 0, { message: "Debe ser un número positivo" })
  ]),
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