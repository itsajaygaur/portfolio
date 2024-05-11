"use client"
import { Input, Button, Textarea } from "@nextui-org/react"
import { useForm, Controller } from "react-hook-form"
import { ContactForm } from "@/types/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema } from "@/types/zodSchemas"
import ErrorMessage from "./ErrorMessage"
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
                    render={({field}) => <Input {...field} size="sm" radius="md" variant="bordered" type="text" label="Name" isInvalid={!!errors.name?.message} errorMessage={errors.name?.message} /> }
                    />
                {/* <ErrorMessage error={errors.name} /> */}
                </div>

                <div className="" >

                <Controller
                    control={control}
                    name="email"
                    render={({field}) => <Input {...field} size="sm" radius="md" variant="bordered" type="text" label="Email" isInvalid={!!errors.email?.message} errorMessage={errors.email?.message}  /> }
                    />
                 {/* <ErrorMessage error={errors.email} /> */}
                    </div>

                <div className="sm:col-span-2" >
                    
                <Controller
                    control={control}
                    name="message"
                    render={({field}) => <Textarea {...field} size="sm" radius="md" variant="bordered" type="text" label="Message" isInvalid={!!errors.message?.message} errorMessage={errors.message?.message} /> }
                    />
                 {/* <ErrorMessage error={errors.message} /> */}
                    </div>
                
                
                <Button isLoading={isSubmitting} type="submit" className="sm:col-span-2" variant="solid" >Send</Button>

            </form>
        </section>
    )
}