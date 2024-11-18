import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Enter valid address"
  }),
  password: z.string().min(6,{
    message: "Minimun 6 digits"
  })
})

export const loginInputs = ()=>[
  {
    id:'email',
    label: 'labels.email',
    type: 'text',
    name: 'email',
    placeholder: 'placeholders.email',
    design: 'col-12 col-md-6'
  },
  {
    id:'password',
    label: 'labels.password',
    type: 'text',
    name: 'password',
    placeholder: 'placeholders.password',
    design: 'col-12 col-md-6'
  },
]