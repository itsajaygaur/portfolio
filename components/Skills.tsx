import { skills } from "@/constants/data";
import { Button } from "@nextui-org/react";


export default function Skills(){

    return(
        <section className="mb-20 md:mb-40" >
            <h2 className="text-3xl mb-4 text-center" >My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 " >
            {
                skills.map(skill => (
                    <Button key={skill.skillName} variant="flat" className=" cursor-default px-6 py-16  rounded-lg text-center flex flex-col justify-center items-center gap-4" >
                        <skill.skillIcon className="flex-none" size="32" />
                        <p className="text-xl" >{skill.skillName}</p>
                    </Button>
                ))
            }
            </div>
        </section>
    )
}