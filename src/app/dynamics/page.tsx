"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function GameDynamics() {
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
              <span className="underline">Game Dynamics</span>
            </h3>
          </div>
          <div>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                <strong>Risk Management</strong>
                <ul className="list-square list-inside px-8">
                  <li>
                    <strong>Dynamic: </strong>Balancing the risks and rewards of
                    engaging in combat, considering the health and armor status
                    of units.{" "}
                  </li>
                  <li>
                    <strong>Successful Strategy: </strong>Engage in combat when
                    the benefits outweigh the risks. Players assess their
                    unit&apos;s health and armor levels before initiating
                    attacks, ensuring they are well-prepared for potential
                    retaliation, once a player wins a battle they also lose a
                    health card and armor card to signify losing soldiers during
                    battle so analyzing the risk and ensuring you have enough
                    resources to head into battle will play a part into a
                    strategic win.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Balanced Investment</strong>
                <ul className="list-square list-inside px-8">
                  <li>
                    <strong>Dynamic: </strong>This dynamic ensures that players
                    can effectively engage in combat, protect their units, and
                    sustain their health throughout the game.
                  </li>
                  <li>
                    <strong>Successful Strategy: </strong>Ensure an adequate
                    supply of clubs for offense and maintain enough hearts to
                    have in case a player takes them away after losing a battle,
                    balancing immediate needs with long-term planning will
                    ensure success.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Adaptability</strong>
                <ul className="list-square list-inside px-8">
                  <li>
                    <strong>Dynamic: </strong>The game environment can change
                    rapidly due to player actions and random events, requiring
                    players to adapt their strategies on the fly.
                  </li>
                  <li>
                    <strong>Successful Strategy: </strong>Players who remain
                    flexible and can quickly adjust their plans in response to
                    new developments often gain an advantage. Keeping a reserve
                    of resources and maintaining multiple options for
                    advancement helps in staying adaptable.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Combat Efficiency</strong>
                <ul className="list-square list-inside px-8">
                  <li>
                    <strong>Dynamic: </strong>Effective use of clubs and armor
                    in combat to maximize damage dealt and minimize damage
                    received.
                  </li>
                  <li>
                    <strong>Successful Strategy: </strong>Equip units with the
                    appropriate combination of clubs/armor and health/hearts
                    based on the enemy&apos;s strength and the tactical
                    situation. Using high health cards and clubs to target key
                    enemy units while ensuring frontline units are well-armored
                    to absorb hits is essential for success.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Weapon and Health </strong>
                <ul className="list-square list-inside px-8">
                  <li>
                    <strong>Dynamic: </strong>Weapons are represented by clubs
                    and can be purchased in the shop using gold, represented by
                    diamonds. Players must strategically manage their resources
                    to ensure they have adequate weaponry. Health is represented
                    by hearts and can be picked up by landing on the hearts
                    space on the board.
                  </li>
                  <li>
                    <strong>Successful Strategy: </strong>Clubs are used in
                    combat to deal damage to opponents. The type and quality of
                    the club are determined by the amount on the card, and this
                    has been seen as a successful strategy in gameplay since
                    there are no limits as to how many clubs can be used but for
                    hearts players are limited to 2 only in a battle. The
                    downside is that you can only achieve the weapon/clubs by
                    reaching the 2 shops placed on the board making it more
                    difficult to attain.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
