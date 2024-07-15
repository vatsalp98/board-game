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
          <div className="mt-4 text-justify">
            <p>
              Find yourself in the vast, once peaceful world of Portori, a
              fantasy mediaeval inspired world which now finds itself in turmoil
              as news of the death of the great world king has spread across the
              lands.
            </p>
            <br />
            <p>
              Without any next of kin, the king&apos;s throne and crown sit
              unattended, leaving the question of who will fill it a mystery.
              But today, four promising individuals who have proven their
              qualities as leaders now seek to step up to the task and take up
              the role of the next great world king. Take the role of one of
              these four promising individuals, utilise your strength, cunning,
              and wealth in order to win over as many nations as possible and
              amass powerful weapons to claim the throne and determine the fate
              of the realm in The Royal Ascension
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
                  A wise ruler of his own kingdom, beloved by many, King Eadric
                  seems a perfect fit for the next world king.
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
                  The wealthy Lady Seraphina has her hands in practically every
                  industry in Portori and a throne would only cement her power.
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex flex-col items-center justify-center gap-3 border rounded p-4 flex-1">
                <h2>Sir Thaddeus Blondewood</h2>
                <Image src="/char-2.jpg" alt="Char 3" height={70} width={70} />
                <span className="text-center">
                  News of Sir Thaddeus’s good deeds and greater looks have
                  spread far and wide. This heartthrob is popular amongst the
                  youth.
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
                  Like the previous world king, Lysandra comes from very little
                  but their strategic abilities suggest she could be much more.
                </span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
