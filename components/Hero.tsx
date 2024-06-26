import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

export default function Hero(){
    return(
        <section className='text-center mb-48 mt-32' >
          <p className='sm:text-lg' >Hi there,</p>
          <h1 className='text-6xl sm:text-8xl font-bold text-center dark:text-white my-2 mb-4' >I am <span className="text-green-600" > Ajay </span> </h1>
          <h2 className='text-xl sm:text-3xl mb-4' >{"< Full Stack Developer />"}</h2>
          {/* <div className="flex items-center justify-center gap-4" >
                <FaGithub size={28} />
                <SiLinkedin size={28} />
            </div> */}
        </section>
    )
}