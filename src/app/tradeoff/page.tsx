"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function TradeoffPage() {
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
        <div className="flex flex-row items-center justify-center w-full my-8 text-justify">
          <h3 className="text-3xl font-semibold">
            <span className="underline">Trade-offs & Dilemas</span>
          </h3>
        </div>
        <div>
          <ul>
            <li>
              <ul className="list-square list-inside px-8">
                <li>
                  <strong>Path Choice: </strong>At the beginning of the game,
                  the player with the strongest territory (Mewtopia) may opt to
                  begin battling right away to take advantage of his stronger
                  powered land. On the other hand, players may want to collect
                  resources instead of battling. Choosing a path and game plan
                  will play a vital role in aiding players in their strategy of
                  resource collection or conquest.
                </li>
                <li>
                  <strong>Choosing cards: </strong>The territory chosen for
                  battle will be essential in determining the outcome. However,
                  if a player is aware that their opponent is similar in
                  strength, or stronger, they may opt to choose a weaker
                  territory. Although a risky option, this would lessen the
                  burden of losing, leaving them with their stronger territories
                  to regain strength in the game.
                </li>
                <li>
                  <strong>Diplomacy vs Aggression: </strong>As the game
                  progresses and more battles occur, players will become aware
                  of the cards in other players’ decks. However, players will
                  continue to pick up cards to strengthen their armies. When
                  initiating a battle, choosing an opponent that you thought was
                  weak could backfire, as they may have picked up strong armor
                  or weapons since the last time their decks were shown. Gauging
                  player strength will be essential to not only choosing
                  opponents, but also allies. By doing this correctly, a player
                  can avoid battles with the strongest individuals and protect
                  themselves from potential destruction.
                </li>
                <li>
                  <strong>Resource Allocation:</strong>A trade-off that arises
                  when choosing a path is deciding what spaces a player wants to
                  land on. Stacking up currency allows a player to buy more
                  weapons (which are more advantageous than hearts); however, if
                  the player doesn’t land on a shop, they can be left with a
                  weaker army for the time being. Going for hearts will have
                  more immediate benefits but may leave a player weaker in the
                  end game.
                </li>
                <li>
                  <strong>Handling Random Events: </strong>Random events can
                  introduce unpredictable elements that players must adapt to,
                  balancing their plans with new opportunities or threats. When
                  initiating battles, an action card is pulled, which may be
                  detrimental. It is something that must be considered when a
                  player wants to play aggressively. An all-in card might take a
                  player out of a game entirely if they aren’t ready for it, and
                  a plague card may turn the tides of battle.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
