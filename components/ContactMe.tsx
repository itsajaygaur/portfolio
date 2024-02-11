import { Input, Button, Textarea } from "@nextui-org/react"

export default function ContactMe(){
    return(
        <section className=" pb-20" >
            <h2 className="mb-4 text-3xl text-center" >Contact Me</h2>
            <form className="max-w-sm mx-auto" >
                <Input variant="bordered" className="mb-4" type="text" label="Name" required />
                <Input variant="bordered" className="mb-4" type="email" label="Email" required />
                <Textarea variant="bordered" className="mb-4" type="text" label="Message" required />
                <Button className="w-full" variant="solid" >Submit</Button>
            </form>
        </section>
    )
}