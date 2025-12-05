import { uppercase, z } from 'zod'

export const CreateUserSchema = z.object({
    email : z.string().includes('@').regex(/[A-Z]/, 'Must contain at least one uppercase letter.'),
    name: z.string().min(5).max(30),
    password: z
    .string()
    .min(8)
    .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message:
            'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    })
})

export const SigninSchema = z.object({
    email : z.string().includes('@').regex(/[A-Z]/, 'Must contain at least one uppercase letter.'),
    password: z
    .string()
    .min(8)
    .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message:
            'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
    })
})

export const CreateRoomSchema = z.object({
    name : z.string().min(5).max(30),
})