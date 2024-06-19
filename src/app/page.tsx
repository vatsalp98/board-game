"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { DownloadIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const people = [
  {
    name: "Justin",
    role: "Creative Head",
    imageUrl: "/team/justin.jpg",
  },
  {
    name: "Clement",
    role: "Writing Head",
    imageUrl: "/team/justin.jpg",
  },
  {
    name: "Roan",
    role: "Artistic Head",
    imageUrl: "/team/justin.jpg",
  },
  {
    name: "Joseph",
    role: "Artistic Help",
    imageUrl: "/team/justin.jpg",
  },
  {
    name: "Vatsal",
    role: "Technical Lead",
    imageUrl: "/vatsaal.jpg",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-40 mx-auto text-center flex flex-col items-center max-w-3xl h-screen">
          <Vortex
            backgroundColor="slate"
            rangeY={800}
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-[25vh]"
          >
            <section className="mt-[250px] flex flex-col items-center justify-center py-20">
              <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                Welcome to{" "}
                <span className="text-blue-600">Dungeons and Dragons</span>.
              </h2>
              <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                Roll the dice, unleash the fun!
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Button className="gap-2">
                  <DownloadIcon />
                  Download Board
                </Button>
                <Button variant={"outline"} className="gap-2">
                  <PlayIcon />
                  Watch Trailer
                </Button>
              </div>
            </section>
          </Vortex>
        </div>
      </MaxWidthWrapper>

      <section className="w-full py-8 md:py-14 border-t border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="space-y-2 mb-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                One Board.
                <span className="text-blue-600"> Endless possibilities</span>.
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A board game that will stimulate all your senses.
              </p>
            </div>
            <div className="flex flex-col gap-1 min-[400px] w-full mt-2">
              <div className="mx-auto">
                <Link
                  className={buttonVariants({
                    className: "font-semibold text-lg",
                    size: "lg",
                  })}
                  href={{
                    pathname: "/profile",
                    query: {
                      tab: "subscription",
                    },
                  }}
                >
                  View Rules &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="open-source"
        className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 pb-10 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-black dark:text-white sm:text-3xl md:text-6xl">
            Created by <span className="text-blue-600">students</span>.
          </h2>
          <p className="max-w-[85%] font-semibold leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Unleash your imagination and embark on an unforgettable journey with
            this exciting board game, meticulously designed and developed by
            talented students in the IAT 210 class.
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <ul
            role="list"
            className="grid gap-x-16 gap-y-12 sm:grid-cols-2 md:grid-cols-5 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    width={100}
                    height={100}
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight ">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
