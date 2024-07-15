"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GroupMeetingPage() {
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
              <span className="underline">Group meeting logs</span>
            </h3>
          </div>
          <div>
            <div className="relative w-full aspect-auto h-[350px] rounded">
              <Image
                src="/meeting_log.png"
                alt="Meeting Log"
                fill
                className="rounded "
              />
            </div>
            <div className="my-6">
              <h2 className="font-semibold">Meeting Minutes #1:</h2>
              <span className="font-semibold">Time: 1 Hour</span>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Tasks to split in the future:</strong>
                  <ul className="list-square list-inside px-8">
                    <li>Creating instructions package / rulebook </li>
                    <li>Get materials / create the game board </li>
                    <li>Gather play testers and feedback on prototypes </li>
                  </ul>
                </li>
                <li>
                  <strong>Post Meeting Ideas: </strong>
                  <ul className="list-square list-inside px-8">
                    <li>Creating a game using some sort of cards or dice </li>
                    <li>
                      Could incorporate a board into the game with cards (Ex.
                      Cribbage){" "}
                    </li>
                    <li>
                      We could also add a digital aspect to our game by creating
                      a virtual platform to showcase the game{" "}
                    </li>
                    <li>
                      On the other hand, we can also create a printable version
                      to be seen as well{" "}
                    </li>
                    <li>
                      When assigning roles, we will attempt to format it in a
                      way that we are able to collectively work on parts
                      together to play to our strengths and weaknesses{" "}
                    </li>
                    <li>
                      For these next 3–4 days, brainstorm ideas that we can use
                      towards next week, where we will assign and start our
                      project.{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <hr className="h-2" />
            <div className="my-6 flex flex-col">
              <h2 className="font-semibold">Meeting Minutes #2:</h2>
              <span className="font-semibold">Time: 1 Hour</span>
              <strong>Decisions and Ideas</strong>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Submission</strong>
                  <ul className="list-square list-inside px-8">
                    <li>
                      <strong>Website </strong>or Blog Post{" "}
                    </li>
                    <li>Most likely pdf submission </li>
                  </ul>
                </li>
                <li>
                  <strong>Ideas: </strong>
                  <ul className="list-square list-inside px-8">
                    <li>
                      Board game with spaces that have different meanings based
                      off the cards we draw{" "}
                    </li>
                    <li>
                      Cards are a 52 deck playing cards with alternative
                      meanings per suite
                    </li>
                    <li>
                      Game with head-to-head challenges and competitive nature
                    </li>
                    <li>
                      <strong>Theme: </strong>Kingdom related
                    </li>
                    <li>
                      We planned a division of work and a who’s doing what
                      format:
                    </li>
                    <li>
                      Except Vatsaal, we split into pairings of 2 to tackle the
                      tasks. Roan and Joseph were paired to do all the artistic
                      work, while Justin and Clement did the quantitative side
                      and game idea brainstorming. Due to Vatsaal being out of
                      the country, he was delegated the technical work, such as
                      website creation and trailer making.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <hr className="h-2" />
            <div className="my-6 flex flex-col">
              <h2 className="font-semibold">Meeting Minutes #3:</h2>
              <span className="font-semibold">Time: 1 Hour</span>

              <ul className="list-disc list-inside">
                <li>Medieval Kingdom theme. </li>
                <li>
                  Begin communicating within pairings to get started with the
                  work.
                </li>
                <li>
                  Inspiration from the Mario party style board and gameplay.{" "}
                </li>
                <li>
                  We agree on having each space representing a suite. When a
                  player lands on the space, you then pull a card to decide what
                  happens.{" "}
                </li>
                <li>Begin working and brainstorming on rulebook </li>
                <li>
                  <strong>For next week:</strong>
                  <ul className="list-square list-inside px-8">
                    <li>The physical board design </li>
                    <li>Core game rules/mechanics</li>
                    <li>Think about timelines for the coming meetings </li>
                  </ul>
                </li>
              </ul>
            </div>
            <hr className="h-2" />
            <div className="my-6 flex flex-col">
              <h2 className="font-semibold">Meeting Minutes #4:</h2>
              <span className="font-semibold">Time: 1 Hour</span>

              <ul className="list-disc list-inside">
                <li>Discussed the Figma doc </li>
                <li>
                  Gameboard will look like a world map with different
                  tiles/paths on it. Could you potentially think of ending on
                  the moon?
                </li>
                <li>
                  The shop can be put as a part of the map or a main suite to
                  increase the probability of getting into it.
                </li>
                <li>
                  Change the joker meaning into something that has high upside
                  and risk.
                </li>
                <li>Aligned on hand/deck management strategy game</li>
                <li>
                  Each player gets to choose a country, who they play in, and
                  where they start. Different countries will have different
                  trade-offs (could be in the form of how many of each suite
                  each player starts with?)
                </li>
                <li>Use random method to establish pick order. </li>
                <li>
                  Begin finalizing the rulebook and getting a rough draft built{" "}
                </li>
                <li>Have the base layout of the website incorporated </li>
                <li>
                  <strong>Website: </strong> https://board-game-gray.vercel.app/
                </li>
              </ul>
            </div>
            <hr className="h-2" />
            <div className="my-6 flex flex-col">
              <h2 className="font-semibold">Meeting Minutes #5:</h2>
              <span className="font-semibold">Time: 30 Minutes</span>

              <ul className="list-disc list-inside">
                <li>
                  Just a meeting of quick clarification so that the design team
                  can get started on the map with a thematic background
                </li>
                <li>
                  Check in with team members to ensure everyone is still on the
                  same page and on task to our timeline.
                </li>
                <li>
                  Answer any questions or confusion we may have and discuss
                  solutions
                </li>
              </ul>
            </div>
            <hr className="h-2" />
            <div className="my-6 flex flex-col">
              <h2 className="font-semibold">Meeting Minutes #6:</h2>
              <span className="font-semibold">Time: 3 Hours</span>

              <ul className="list-disc list-inside">
                <li>
                  Altered battle mechanics to allow for fairer gameplay. Players
                  choose 1 territory and 2 health cards to battle instead of
                  everything. Total kingdom strength from this will be closer
                  together between stronger and weaker players compared to using
                  all territories and health cards. We also added the rule that
                  winning players must discard a random health card of the
                  loser’s choosing.
                </li>
                <li>
                  Changed items in the shop. Instead of having items without
                  anything to signify a player has it, we opted to use Clubs
                  card to represent weapons. Along with this, rather than
                  arbitrary prices, we decided to have the weapons (Clubs) have
                  value equal to the corresponding strength it adds, and
                  currency card (Diamonds).
                </li>
                <li>
                  Added physical components to the game to avoid repetitive
                  counting. By having territory cards with the values, we
                  stopped unnecessary counting during every battle, and allowed
                  for more fluid gameplay.
                </li>
                <li>
                  Agreed upon changing the gameboard to a fictional world map
                  with a signified starting space.{" "}
                </li>
                <li>
                  <strong>For next week:</strong>
                  <ul className="list-square list-inside px-8">
                    <li>
                      Finish individual parts: Justin and Clement finish
                      trade-offs, quantitative analysis, and game dynamics write
                      up. Roan and Joseph finish game board, territory cards,
                      and other artistic components to the game.{" "}
                    </li>
                    <li>
                      Send completed parts as quickly as possible to Vatsaal to
                      implement into the website.{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <hr className="h-2" />
            <div className="my-6 flex flex-col">
              <h2 className="font-semibold">Meeting Minutes #7:</h2>
              <span className="font-semibold">Time: 3 Hours</span>

              <ul className="list-disc list-inside">
                <li>
                  Altered battle mechanics to allow for fairer gameplay. Players
                  choose 1 territory and 2 health cards to battle instead of
                  everything. Total kingdom strength from this will be closer
                  together between stronger and weaker players compared to using
                  all territories and health cards. We also added the rule that
                  winning players must discard a random health card of the
                  loser’s choosing.
                </li>
              </ul>

              <strong>Decisions and Ideas</strong>
              <ul>
                <li>
                  <strong>Submission</strong>
                  <ul className="list-square list-inside px-8">
                    <li>
                      <strong>Website</strong> or Blog Post
                    </li>
                    <li>Most likely pdf submission </li>
                  </ul>
                </li>
                <li>
                  <strong>Ideas</strong>
                  <ul className="list-square list-inside px-8">
                    <li>
                      Board game with spaces that have different meanings based
                      off the cards we draw{" "}
                    </li>
                    <li>
                      Cards are a 52 deck playing cards with alternative
                      meanings per suite{" "}
                    </li>
                    <li>
                      Game with head-to-head challenges and competitive nature
                    </li>
                    <li>
                      <strong>Theme </strong> Kingdom Related
                    </li>
                    <li>
                      We planned a division of work and a who’s doing what
                      format:{" "}
                    </li>
                    <li>
                      Except Vatsal, we split into pairings of 2 to tackle the
                      tasks. Roan and Joseph were paired to do all the artistic
                      work, while Justin and Clement did the quantitative side
                      and game idea brainstorming. Due to Vatsal being out of
                      the country, he was delegated the technical work, such as
                      website creation and trailer making.{" "}
                    </li>
                    <li>
                      Finished portions of the project that were not yet
                      completed and edited parts that needed to be fixed.{" "}
                    </li>
                    <li>
                      Set a timeline for finalizing the last few days before
                      submission.{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
