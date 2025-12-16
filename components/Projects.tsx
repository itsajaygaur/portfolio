import {Card, CardBody, CardFooter} from "@heroui/react";
import Image from "next/image";
import { Link } from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { projects } from "@/constants/data";



export default function Projects() {


  return (
    <section className="mb-20 md:mb-40" >
        <h2 className="text-3xl text-center" >My Work</h2>
        <p className="text-center mb-4" >Some of the projects are from work and some are on my own time.</p>
        <div className="gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" >

      {projects.map((item) => (
          <Card shadow="lg" key={item.id} isPressable={false} >
          <CardBody className="overflow-visible p-0">
            <Image
            //   shadow="sm"
            //   radius="lg"
              width={1920}
              height={1080}
              alt={item.title}
              className="w-full object-cover aspect-video sm:grayscale sm:hover:grayscale-0 transition hover:scale-105 "
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex-col gap-1 items-start">
            <b>{item.title}</b>
            <div className="flex gap-6 items-center" >
              <Link underline="hover" href={item.link} target="_blank" className="text-blue-500 dark:text-blue-500" >
                <FaExternalLinkSquareAlt className="mr-1" />
                View live
              </Link>
              {
                item.github &&
                <Link underline="hover" href={item?.github} target="_blank" className="text-blue-500" >
                <FaGithub className="mr-1" />
                View code
              </Link>
              }
            </div>
          </CardFooter>
        </Card>
      ))}
            </div>
    </section>
  );
}
