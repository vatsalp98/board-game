"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StoryPage() {
  const router = useRouter();
  return (
    <>
      <MaxWidthWrapper className="px-8 py-10">
        <div>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeftIcon />
          </Button>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center w-full my-8 text-justify">
            <h3 className="text-3xl font-semibold">
              <span className="underline">Story</span>
            </h3>
          </div>
          <h3 className="font-semibold">
            Prologue: The Fall of a Great Leader{" "}
          </h3>
          <div className="mt-4 text-justify">
            <p>
              The large kingdom renowned for its prosperity and harmony, is
              thrown into disarray with the sudden death of its great world
              king. His reign had been marked by a golden age, a period of peace
              and economic growth that united the various regions under a
              single, benevolent rule. His unexpected death, with no direct
              heirs to succeed him, leaves the kingdom vulnerable and on the
              brink of war.
            </p>
            <br />
            <p>
              The king&apos;s deathbed is surrounded by his closest advisors and
              regional leaders, each of whom recognizes the impending chaos. The
              throne, a symbol of power and stability, now stands empty, casting
              a long shadow over the future of the land. As news of the
              king&apos;s demise spreads, the once united kingdom begins to
              fracture, with regional leaders and ambitious individuals eyeing
              the throne for themselves.
            </p>
            <br />
            <p>So, who will you take the role of?</p>
            <br />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col items-center justify-center gap-3 border rounded p-4 flex-1">
                <h2>Wise King Eadric</h2>
                <Image
                  src="/char-4.jpg"
                  alt="KING PHOTO"
                  height={70}
                  width={70}
                />
                <span className="text-center">
                  A ruler of wisdom and fairness, King Eadric has guided his
                  kingdom through times of both peace and strife. Known for his
                  judicious decisions and compassionate rules, Eadric is beloved
                  by his people and respected by his peers. His knowledge of
                  governance and diplomacy makes him a strong candidate for the
                  throne. He believes that his wisdom can restore balance to the
                  land and lead it to a prosperous future.
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 border rounded p-4 flex-1">
                <h2>Lady Seraphina Von Eldora</h2>
                <Image
                  src="/char-3.jpg"
                  alt="KING PHOTO"
                  height={70}
                  width={70}
                />
                <span className="text-center">
                  A shrewd and wealthy businesswoman, Lady Seraphina has her
                  influence entrenched in every corner of the economy. Her
                  wealth and connections provide her with significant leverage,
                  making her a formidable contender for the throne. Seraphina is
                  ambitious and strategic, always thinking several steps ahead.
                  She envisions a kingdom where commerce and innovation drive
                  progress, believing that her economic prowess can elevate the
                  land to new heights.
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex flex-col items-center justify-center gap-3 border rounded p-4 flex-1">
                <h2>Sir Thaddeus Blondewood</h2>
                <Image src="/char-2.jpg" alt="Char 3" height={70} width={70} />
                <span className="text-center">
                  Renowned for his bravery and charm, Sir Thaddeus is the
                  people&apos;s champion. His heroic deeds and chivalrous nature
                  have won him the hearts of many, especially the younger
                  generation. Thaddeus possesses a magnetic charisma that
                  rallies people to his cause, and he dreams of a kingdom where
                  justice and honor prevail. His popularity and noble spirit
                  position him as a beloved candidate for the throne.
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 border rounded p-4 flex-1">
                <h2>Lysandra of Rukenvale</h2>
                <Image
                  src="/char-1.jpg"
                  alt="KING PHOTO"
                  height={70}
                  width={70}
                />
                <span className="text-center">
                  Coming from humble beginnings, Lysandra has risen through the
                  ranks due to her exceptional strategic mind and unyielding
                  determination. Her background gives her a unique perspective
                  on the struggles of the common people, and she is driven by a
                  desire to create a fair and just society. Lysandra&apos;s
                  tactical brilliance and innovative thinking suggest she has
                  the potential to be a transformative ruler, capable of leading
                  the land to a brighter future.
                </span>
              </div>
            </div>
            <br />
            <p>
              Players take on the role of one of these four characters, each
              with unique strengths and strategies. The goal is to win over as
              many nations as possible and amass powerful weapons to claim the
              throne. The game involves a blend of diplomacy, economic
              management, and combat, with players needing to balance their
              resources and make
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
