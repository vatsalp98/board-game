"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spotlight } from "@/components/ui/spotlight";
import { Vortex } from "@/components/ui/vortex";
import {
  DownloadIcon,
  PlayIcon,
  QuestionMarkIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const people = [
  {
    name: "Justin",
    role: "Creative Head",
    imageUrl: "/char-1.jpg",
  },
  {
    name: "Clement",
    role: "Writing Head",
    imageUrl: "/char-2.jpg",
  },
  {
    name: "Roan",
    role: "Artistic Head",
    imageUrl: "/char-3.jpg",
  },
  {
    name: "Joseph",
    role: "Artistic Help",
    imageUrl: "/char-4.jpg",
  },
  {
    name: "Vatsal",
    role: "Technical Lead",
    imageUrl: "/char-2.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full py-32 md:py-40 lg:py-48">
        <div className="absolute inset-0 bg-[url('/board_img.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black after:opacity-70" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            The Royal Ascension
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            The Royal Ascension, a strategic board game where players engage in
            battles, form alliances, and navigate political intrigue to conquer
            territories and ascend to the throne.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Video Trailer
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Introducing our game
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Watch the trailer to get a quick overview of the adventure and
              excitement that awaits.
            </p>
          </div>
          <div className="rounded-lg border">
            <iframe
              src="https://www.youtube.com/embed/IdWoTVZqQzE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contextualization of the Game
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl ">
              Mario Party serves as The Royal Ascension&apos;s primary source of
              inspiration, as it incorporates key components like strategy,
              turn-based gameplay, and randomness. Our goal was to imitate the
              dynamic game area found in Mario Party, where each place
              represents a distinct event that is brought about by a chance card
              draw, much like how Mario Party has spaces that activate games or
              induce advantage by giving rewards. The game also draws
              inspiration from the ideas of cartomancy, in which every card has
              a distinct meaning that affects how the game plays out. Combining
              these various sources of inspiration results in a highly
              unpredictable and strategically deep game world where players must
              successfully negotiate alliances, conflicts, and political
              intrigue in order to gain control of the kingdom.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our 3 Game Pillars
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              This section outlines the core principles guiding the game&apos;s
              design and development. Each pillar, summarized in one sentence,
              captures the essence of what the game is about, how it is played,
              and why it offers a compelling experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-lg bg-card shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <QuestionMarkIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">What</h3>
              </div>
              <p className="text-muted-foreground">
                The Royal Ascension is a turn-based strategy board game centered
                on kingdom domination.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <QuestionMarkIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">How</h3>
              </div>
              <p className="text-muted-foreground">
                Players use cards and dice to navigate random events, form
                alliances, and engage in battles.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <QuestionMarkIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Why</h3>
              </div>
              <p className="text-muted-foreground">
                The game is designed to challenge player&apos;s strategic
                thinking and adaptability in a dynamic, unpredictable
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Thematic Backstory
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              This section delves into the thematic backstory of the game,
              introducing the characters, the story world, and the premise of
              the action. It sets the stage for the gameplay by providing
              context and depth to the game&apos;s narrative.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              href="/story"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Read Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Game Components
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  This section features a visual gallery showcasing all the game
                  components other than the main playing board, such as cards,
                  dice, and player pieces. These visuals, some of which are
                  generated using AI platforms, provide a detailed look at the
                  elements that bring the game to life.
                </p>
              </div>
              <Link
                href="/board"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Components
              </Link>
            </div>
            <Image
              src="/game-1.jpg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              The Rulebook
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              This section contains the comprehensive rule book for the game,
              outlining all the rules, objectives, and gameplay mechanics
              necessary for players to fully understand and enjoy the game.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              href="/rules"
              className={buttonVariants({
                variant: "default",
                className: "rounded-sm h-10 px-8",
              })}
              prefetch={false}
            >
              View Rules &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <Image
            src="/group.jpg"
            width="450"
            height="450"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Group Meeting Log
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                This section provides minutes and summaries of each group
                meeting, capturing key discussions, decisions, and action items.
                The first page of each meeting&apos;s minutes is included to
                give a snapshot of our collaborative process.
              </p>
            </div>
            <Link
              href="/group"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Group log &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Playtesting Log
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              This section documents the insights gained during playtesting and
              details the revisions made to the game based on these findings. It
              highlights specific feedback from testers and the adjustments
              implemented to enhance gameplay
            </p>
            <Link
              target="_blank"
              href="/playtesting_log.pdf"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View playtesting Log &rarr;
            </Link>
          </div>
          <div className="flex justify-end">
            <Image
              src="/playtest.jpg"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>

      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Flowchart
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                This section presents flowcharts that illustrate the primary
                game mechanics as a logical structure tree. These diagrams
                provide a clear, visual representation of how different elements
                and actions within the game interact.
              </p>
            </div>
          </div>
          <Image
            src="/flowchart.jpg"
            width={1200}
            height={1200}
            alt="Hero"
            className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Quantitative Analysis
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              This section delves into the quantitative aspects of game balance,
              examining how probabilities and various design factors contribute
              to achieving a balanced outcome. It explores statistical methods
              and models used to ensure fairness and enjoyment for all players
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              target="_blank"
              href="/analysis.pdf"
              className={buttonVariants({
                variant: "default",
                className: "rounded-sm h-10 px-8",
              })}
              prefetch={false}
            >
              Read Analysis &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Game Dynamics
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              This section explores the main game dynamics, including successful
              strategies that have emerged through gameplay. It highlights key
              tactics and approaches that players can employ to achieve
              strategic advantages and navigate challenges effectively.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              href="/dynamics"
              className={buttonVariants({
                variant: "default",
                className: "rounded-sm h-10 px-8",
              })}
              prefetch={false}
            >
              View game Dynamics &rarr;
            </Link>
          </div>
        </div>
      </section>
      {/* <MaxWidthWrapper>
        <div className="py-40 text-center flex flex-col items-center w-full h-screen">
          <section className="flex flex-col items-center justify-center py-20 bg-[url('/board_img.jpg')] bg-contain bg-no-repeat w-full brightness-50">
            <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
              The Royal Ascension
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              The Royal Ascension, a strategic board game where players engage
              in battles, form alliances, and navigate political intrigue to
              conquer territories and ascend to the throne.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <Link href={"/board"}>
                <Button className="gap-2" variant={"secondary"}>
                  <DownloadIcon />
                  Game Components
                </Button>
              </Link>
              <Link href={"/rules"}>
                <Button variant={"secondary"} className="gap-2">
                  <QuestionMarkIcon />
                  Rulebook
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger
                  className={buttonVariants({
                    variant: "secondary",
                    className: "gap-2",
                  })}
                >
                  <PlayIcon />
                  Watch Trailer
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Royal Ascension Trailer</DialogTitle>
                    <DialogDescription>
                      Here is a small trailer introducing our board game.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 relative">
                    <iframe
                      src="https://www.youtube.com/embed/IdWoTVZqQzE"
                      className="w-full fill h-[600px]"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </div>
      </MaxWidthWrapper> */}

      {/* <section className="w-full py-8 md:py-14 border-t border-b">
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
                    pathname: "/rules",
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
      </section> */}

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
            className="grid gap-x-16 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-16 xl:col-span-2"
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
        <div className="flex flex-row w-full items-center justify-center pt-10">
          <Link href="/contribution">
            <Button variant={"secondary"}>View contributions &rarr;</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
