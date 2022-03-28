import {object, string} from 'yup'
export const loginSchema = object({
    body: object({
        email: string().email().required(),
        password: string().min(4).required()
    })
})