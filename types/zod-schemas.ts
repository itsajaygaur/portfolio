import {z} from "zod"

export const contactFormSchema = z.object({
    name: z.string().trim().min(1, {message: 'This field is required.'}),
    email: z.email().trim().min(1, {message: 'This field is required.'}),
    message: z.string().trim().min(1, {message: 'This field is required.'})
})