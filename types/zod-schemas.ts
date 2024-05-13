import {z} from "zod"

export const contactFormSchema = z.object({
    name: z.string().trim().min(1, {message: 'This field is required.'}),
    email: z.string().email(),
    message: z.string().trim().min(1, {message: 'This field is required.'})
})