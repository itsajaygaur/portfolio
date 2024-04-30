import {Card, CardBody, CardFooter} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Mykart - Ecommerce store",
      img: "/mykart.jpeg",
      link: "https://mykart.vercel.app",
    },
    {
      title: "Girl PowerX",
      img: "/girlpowerx.jpeg",
      link: "https://girlpowerx.com",
    },
    {
      title: "New Orleans Athletic Club",
      img: "/neworleansathleticclub.jpeg",
      link: "https://neworleansathleticclub.com",
    },
    {
      title: "Community Management",
      img: "/community-management.jpeg",
      link: "https://services.girlpowertalk.com/community-management",
    },
    {
      title: "Staff Augmentation",
      img: "/staff-augmentation.jpeg",
      link: "https://services.girlpowertalk.com/staff-augmentation",
    },
    {
      title: "Startup Challange",
      img: "/startup-challange.jpeg",
      link: "https://services.girlpowertalk.com/staff-augmentation",
    },
    {
      title: "Website Maintenance",
      img: "/website-maintenance.jpeg",
      link: "https://maintenance.blueoceanglobaltech.com",
    },
    {
      title: "Tenzi",
      img: "/tenzi.jpeg",
      link: "https://game-tenzi.netlify.app/",
    },
    {
      title: "Tic Tac Toe",
      img: "/tictactoe.jpeg",
      link: "https://itsajaygaur.github.io/tic-tac-toe/",
    },
  ];

  return (
    <section className="mb-20 md:mb-40" >
        <h2 className="text-3xl text-center" >My Work</h2>
        <p className="text-center mb-4" >Some of the projects are from work and some are on my own time.</p>
        <div className="gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" >

      {projects.map((item, index) => (
          <Card shadow="sm" key={index} isPressable={false} >
            <Link href={item.link} target="_blank" >
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
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            {/* <p className="text-default-500">{item.price}</p> */}
          </CardFooter>
            </Link>
        </Card>
      ))}
            </div>
    </section>
  );
}
