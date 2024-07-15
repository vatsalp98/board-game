"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function ContributionPage() {
  const router = useRouter();
  return (
    <>
      <MaxWidthWrapper className="py-10 px-8">
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
              <span className="underline">Contributions</span> 💪
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-justify px-1">
              Bold tasks where large tasks and italic were smaller tasks.
              Default formatted taks were of a reasonable or average
              difficulty/size.
            </span>
            <div className="border rounded-lg px-10 py-10 shadow-sm hover:shadow-lg hover:shadow-gray-900 shadow-gray-700">
              <div>
                <h2 className="text-lg font-bold">Clement</h2>
                <ul className="list-disc list-inside mt-2">
                  <li className="font-semibold">Rules and Rulebook (60%)</li>
                  <li>Contributions (20%)</li>
                  <li className="font-bold">Group Meeting Log (50%) </li>
                  <li>Play session duration explanation (100%)</li>
                  <li>
                    <strong>Required writings: </strong>
                    <ul className="list-square list-inside px-6">
                      <li className="italic">Core Statement (100%)</li>
                      <li className="italic">Game Pillars (100%)</li>
                      <li className="font-bold">Quantitative analysis (50%)</li>
                      <li className="">Dynamics (100%)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg px-10 py-10 shadow-sm hover:shadow-lg hover:shadow-gray-900 shadow-gray-700">
              <div>
                <h2 className="text-lg font-bold">Justin</h2>
                <ul className="list-disc list-inside mt-2">
                  <li className="font-semibold">Rules and Rulebook (40%)</li>
                  <li>Contributions (20%)</li>
                  <li className="font-bold">Group Meeting Log (50%) </li>
                  <li>
                    <strong>Required writings: </strong>
                    <ul className="list-square list-inside px-6">
                      <li className="italic">
                        Short paragraph contextualising the game in terms of
                        similar games we drew inspiration from (100%)
                      </li>
                      <li className="font-bold">Quantitative analysis (50%)</li>
                      <li className="italic">Trade offs (100%)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg px-10 py-10 shadow-sm hover:shadow-lg hover:shadow-gray-900 shadow-gray-700">
              <div>
                <h2 className="text-lg font-bold">Roan</h2>
                <ul className="list-disc list-inside mt-2">
                  <li className="font-semibold">Map (90%)</li>
                  <li>Contributions (20%)</li>
                  <li className="italic">4 Character tokens (100%)</li>
                  <li className="">Playtest log (100%) </li>
                  <li className="italic">Thematic backstory (100%)</li>
                  <li className="italic">Visual Gallery (75%)</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg px-10 py-10 shadow-sm hover:shadow-lg hover:shadow-gray-900 shadow-gray-700">
              <div>
                <h2 className="text-lg font-bold">Joseph</h2>
                <ul className="list-disc list-inside mt-2">
                  <li className="">12 Territory cards (100%)</li>
                  <li className="">Flowchart (100%)</li>
                  <li className="font-bold">Map (10%) </li>
                  <li>Contributions (20%)</li>
                  <li>Key (100%)</li>
                  <li className="italic">Visual Gallery (25%)</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg px-10 py-10 shadow-sm hover:shadow-lg hover:shadow-gray-900 shadow-gray-700">
              <div>
                <h2 className="text-lg font-bold">Vatsal</h2>
                <ul className="list-disc list-inside mt-2">
                  <li className="font-bold">Website (100%)</li>
                  <li className="font-bold">Trailer (100%)</li>
                  <li className="font-bold">Final Editing (100%)</li>
                  <li>Contributions (20%)</li>
                </ul>
              </div>
            </div>

            <div className="text-justify px-1 text-muted-foreground mb-10">
              Note: Many aspects of the game, while written as one or two people
              in specific, often went between people so everyone contributed a
              little bit to everything. With the exception of the required
              writings which were done almost entirely by Clement and Justin
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
