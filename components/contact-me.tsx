"use client"
// import { Input, Button, Textarea } from "@nextui-org/react"
import { useForm, Controller } from "react-hook-form"
import { ContactForm } from "@/types/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema } from "@/types/zod-schemas"
import ErrorMessage from "./error-message"
import { submitContactForm } from "@/app/actions"
import toast from "react-hot-toast"
 
export default function ContactMe(){

    const { handleSubmit, control, reset, formState: {errors, isSubmitting} } = useForm<ContactForm>({resolver: zodResolver(contactFormSchema), defaultValues: {
        name: "",
        email: "",
        message: ""
    } })


    async function onSubmit(data: ContactForm ){
        try {
            const res = await submitContactForm(data)
            if(res.success){
                toast.success(res.message)
                reset()
                return
            }
            toast.error(res.message || "Something went wrong. Try again later")
            
        } catch (error) {
            // console.log(error)
            toast.error("Something went wrong. Try again later")
        }
    }   

    // console.log('err ', errors)

    return(
        <section className=" " >
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2  gap-4" >
                


                <div className="" >

                <Controller
                    control={control}
                    name="name"
                    render={({field}) => <input {...field} type="text" placeholder="Name" className="ring ring-gray-200 py-2 px-3 w-full rounded-sm dark:ring-gray-700 " required /> }
                    />
                {/* <ErrorMessage error={errors.name} /> */}
                </div>

                <div className="" >

                <Controller
                    control={control}
                    name="email"
                    render={({field}) => <input {...field} type="email" placeholder="Email" className="ring ring-gray-200 py-2 px-3 w-full rounded-sm dark:ring-gray-700" required /> }
                    />
                 {/* <ErrorMessage error={errors.email} /> */}
                    </div>

                <div className="sm:col-span-2" >
                    
                <Controller
                    control={control}
                    name="message"
                    render={({field}) => <textarea {...field} placeholder="Message" className="ring h-full ring-gray-200 py-2 px-3 w-full rounded-sm dark:ring-gray-700" required /> }
                    />
                 {/* <ErrorMessage error={errors.message} /> */}
                    </div>
                
                
                <button 
                    type="submit" 
                    className="w-full text-sm bg-black/80 hover:bg-black/85 transition-all text-white py-2.5 px-5 max-w-fit rounded-md dark:bg-white/80 dark:hover:bg-white/85 dark:text-black disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-400"
                    disabled={isSubmitting}

                >
                    {
                        isSubmitting ? "Sending..." : "Send"
                    }
                </button>

            </form>
        </section>
    )
}