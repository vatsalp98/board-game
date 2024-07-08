"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function RulesPage() {
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
        <div className="flex flex-row items-center justify-center w-full my-8">
          <h3 className="text-3xl font-semibold">Gameplay rules and play</h3>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Introduction</h2>
          <span className="">
            Welcome to &quot;The Royal Ascension&quot; a strategic board game
            set in an ancient kingdom where territories fight for control of the
            land. Players must navigate through political intrigue, battles, and
            alliances to expand their territories and gain influence. The victor
            shall etch their name in the history books and ascend to the throne.
          </span>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Game Overview 📖</h2>
          <ul className="list-disc list-inside">
            <li className="">
              Each territory will have a value attached to it to defend their
              land.{" "}
            </li>
            <li>
              Card values will take the form of the number designated (Ex. Queen
              of hearts = 12 health points, 6 of Diamonds = 6 gold){" "}
            </li>
            <li>
              Dice roll in the battle will signify the tactical advantage of
              territories over others (higher dice roll adds to territories’
              total power, making it better tactically)
            </li>
            <li>
              Opponent&apos;s cards will remain hidden to induce strategy and
              suspense until the battle occurs in which they will show their
              territory chosen and see who wins the battle.
            </li>
            <li>
              Scrap Paper may be used to help players keep track of adding
              points during battle.{" "}
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Territories 🗺️</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Jiggy Jungle: </strong>13 points
            </li>
            <li>
              <strong>Dragon Dominion: </strong>13 points
            </li>
            <li>
              <strong>Vapor Vale: </strong>13 points
            </li>
            <li>
              <strong>Flare lands: </strong>13 points
            </li>
            <li>
              <strong>Lucio Land: </strong>15 points
            </li>
            <li>
              <strong>Snore Summit: </strong>15 points
            </li>
            <li>
              <strong>Bulben Crest: </strong>15 points
            </li>
            <li>
              <strong>Teal Shore: </strong>15 points
            </li>
            <li>
              <strong>Venom Valley: </strong>15 points
            </li>
            <li>
              <strong>Pika Hills: </strong>15 points
            </li>
            <li>
              <strong>Char Forest: </strong>18 points
            </li>
            <li>
              <strong>Mewtopia: </strong>20 points
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Components 🛠️</h2>
          <ul className="list-disc list-inside">
            <li className="">1 Game board</li>
            <li>4 Character Tokens</li>
            <li>
              2 Decks of 52 suite cards (26 Hearts, 26 Diamonds, 26 Clubs, 26
              spades)
            </li>
            <li>2 Jokers (Representing the All in Card)</li>
            <li>26 Spades &rarr; Action Cards (2 Wild cards Aces)</li>
            <li>12 Different territories/countries</li>
            <li>A set of 2 dice</li>
            <li>1 rulebook</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Setup ⚙️</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Place Tokens: </strong>Place the character tokens in their
              designated &quot;home&quot; spaces on the board (determined by the
              character they chose).
            </li>
            <li>
              <strong>Select territories/countries: </strong>Each player rolls
              the dice to determine the order of territory selection. The
              highest roll gets to choose their territory first (1, 2, 3, 4 - 1,
              2, 3, 4 - 1, 2, 3, 4)
            </li>
            <li>
              if there are 2 players, then they will split the territories by 6
              each and if there are 3 players then they will split the
              territories by 4 each.
            </li>
            <li>
              <strong>Shuffle Decks: </strong> Shuffle the deck of action cards
              (spades) and place it face down in the corresponding space.
              Shuffle the suite cards (Hearts, Diamonds, Clubs) and place them
              face down in their respective regions on the board.
            </li>
            <li>
              <strong>Distribute resources: </strong> In order of territory
              selection, players will draw an equal number of resource tokens
              from the Diamonds and Hearts pile: 2 Gold cards (Diamonds) and 2
              Health/Armor cards (Hearts) each.
            </li>
            <li>
              <strong>Beginning the Game:</strong> The players will then roll
              the dice again to determine the order of play.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Basic Gameplay 🎲</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Cards: </strong>Opponent&apos;s cards will remain hidden
              to induce strategy and suspense.
            </li>
            <li>
              <strong>Turn Order: </strong>Players take turns in a clockwise
              order.
            </li>
            <li>
              <strong>Rolling Dice: </strong>On a player&apos;s turn, they roll
              the dice and move their character token to the corresponding
              number of spades.
            </li>
            <li>
              <strong>Drawing suite cards: </strong> When a player lands on a
              space, they draw a suite card from thats space&apos;s sutie (each
              card drawn will represent the number of the card drawn):
              <ul className="list-disc list-inside">
                <li>
                  <strong>Hearts: </strong> Health/Armor/Weapons/hiring a spy
                </li>
                <li>
                  When players collect health cards, they may add them to their
                  choice of army and with this their army gets stronger and it
                  is more difficult to defeat.
                </li>
                <li>
                  <strong>Diamonds: </strong> Currency (Gold)
                </li>
                <li>
                  <strong>Clubs: </strong> Troops (Army)
                </li>
                <li>
                  <strong>Spades: </strong> Initiates battles and provide an
                  action card.
                </li>
              </ul>
            </li>
            <li>
              <strong>End of turn: </strong> Player&apos;s end their turn once
              the action is completed on the space (battle, shop purchase, etc.)
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Battles ⚔️</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Initiating Battles: </strong>Battles are initiated when a
              player lands on a Spade space.
            </li>
            <li>
              <strong>Choosing Opponents: </strong>The initiating player choose
              an opponent to battle.
            </li>
            <li>
              <strong>Health Cards: </strong>A maximum of 2 Collected health
              cards may be used in battle by attaching them to a player’s
              kingdom and increasing their strength by the amount of health
              written (Ex. Territory Chosen in Battle = 15 points of strength
              with 2 health cards totaling 14 points of health making the total
              strength of the army 29 points + dice roll).
            </li>
            <li>
              <strong>Rolling Dice/Battling: </strong>Both players choose a
              territory to use in battle, add their respective points, potential
              armor/weapons associated, and health cards, then they will roll 2
              dice twice and add their values to determine the winner.
            </li>
            <li>
              <strong>Tiebreaker: </strong> If both players have the same total
              (territory + armor/weapons + health + dice roll) they will roll
              again and battle again until a winner is determined.
            </li>
            <li>
              <strong>Losing a battle: </strong> The loser of the battle loses
              the territory used in battle and gets to pick one health card at
              random from the winner&apos;s Kingdom to discard.
            </li>
            <li>
              <strong>Winning Battles: </strong>The winner takes control of the
              loser&apos;s territory and discards a random heart card of the
              loser&apos;s choosing.
            </li>
            <li>
              <strong>Battle Repetition: </strong> The same player that has lost
              in the previous battle cannot battle back-to-back to allow for
              fairness.
              <ul className="list-disc list-inside px-6">
                <li>
                  When a “Royal Decree” is used, the above rule is voided, all
                  players will partake in the battle. Following that, all
                  players are eligible to battle when a player lands on the next
                  Spade space.{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Action Cards ♠️</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Drawing Action Cards: </strong>Drawn when a player lands
              on special action spaces.
              <ul className="list-disc list-inside px-4">
                <li>
                  All action cards drawn will be completed first and then the
                  battle will initiate.{" "}
                </li>
              </ul>
            </li>
            <li>
              <strong>Types of Action Cards: </strong>Events, challenges, and
              opportunities that can change the game dynamics:
              <ul className="list-disc list-inside px-4 gap-2 flex flex-col mt-2">
                <li>
                  <strong>All In </strong>(The player who draws this card either
                  wins all the territories or loses all their territories from
                  their opponents during battle) <br />
                  <span className="px-6 font-semibold italic">
                    i- Jacks of Spades (2 in the deck)
                  </span>
                </li>
                <li>
                  <strong>Royal Decree </strong>(All remaining players battle
                  each other heads up and the winner takes one territory from
                  each of the losers) (Once the exchange is made each of the
                  losers will choose at random one health card to remove from
                  the winners’ kingdom) <br />
                  <span className="px-6 font-semibold italic">
                    i- King of Spades and Queen of Spades (4 in the deck)
                  </span>
                </li>
                <li>
                  <strong>Secret Alliance</strong> (The player who drew the card
                  may avoid battle by forming an alliance with another country,
                  this is done by holding the card in the kingdom and once you
                  are chosen to be battled you may use the card and save
                  yourself from the fight) (This may be used strategically to
                  avoid having to battle a stronger opponent or by choosing a
                  friendly territory in the game) (Once the alliance is used up
                  the player will discard the card.)
                  <br />
                  <span className="px-6 font-semibold italic">
                    i- 3,4,5,6 of Spades (8 in the deck)
                  </span>
                </li>
                <li>
                  <strong>Random NPC event</strong> Roll a die, if the number on
                  the face of the die is a 5 or a 6 then you succeed; winning
                  additional resources including health and currency cards.
                  (Players may choose whether they want to draw from Hearts or
                  Diamonds to gain additional resources)
                  <br />
                  <span className="px-6 font-semibold italic">
                    i- 7,8,9,10 of Spades (8 in the deck)
                  </span>
                </li>
                <li>
                  <strong>Plague/sickness</strong> You have been plagued! -10
                  points to the player’s upcoming battle due to unexpected
                  plague.
                  <br />
                  <span className="px-6 font-semibold italic">
                    i- Ace of Spades and 2 of Spades (4 in the deck)
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Special Rules 🩵</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Alliances: </strong>Players can use their action cards to
              form temporary alliances to combine resources and strategize
              against stronger opponents.
            </li>
            <li>
              <strong>Resource Trading: </strong>Players can trade resources
              with each other when located in a specific region/land.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">
            Board Layout & Advanced Rule Ideas 📜
          </h2>
          <ul className="list-disc  list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Regions: </strong>Each space corresponds to a suite
              (Hearts, Diamonds, Spades, and 2 shops) and contains suite cards
              (except the shop). Please refer to the Suite Card definitions
              under “Basic Gameplay” for a basic overview.
              <ul className="list-disc px-10">
                <li>35 Spots total (with 2 shops on the map)</li>
              </ul>
            </li>
            <li>
              <strong>Shop: </strong>A player that lands on this space can spend
              their currency cards to purchase weapons to power up their
              territories.
              <ul className="list-disc px-10">
                <li>
                  <strong>Weapon choices: </strong>Weapon buffs will be
                  equivalent to the number associated on the card. (Ex. 5 of
                  Clubs will be equal to +5 strength).{" "}
                </li>
                <li>
                  <strong>Purchasing Weapons with Gold: </strong>The value of
                  these weapons will be equal to the number on the card and can
                  be purchased at that price. (Ex. 7 Clubs can be purchased with
                  a 7 Diamonds (Gold)).
                </li>
              </ul>
            </li>
            <li>
              <strong>Discard Pile: </strong>Any card that needs to be discarded
              after playing or using. Will be placed on the side of the board in
              a pile.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Winning the Game 👑</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Eliminated Players: </strong>If a player loses all their
              territories, then they are eliminated from the game and must
              surrender their territories to the player that eliminated them.
              Resources (Hearts and Diamonds and Clubs) will be discarded in the
              discard pile.
            </li>
            <li>
              <strong>Conquering Kingdoms: </strong>Players aim to conquer as
              many kingdoms as possible. This is done by winning battles against
              other players and taking territories.
              <br />
              <span className="px-10">
                <strong>a- Claiming the Throne: </strong>The game ends once a
                player has attained the majority of kingdoms in the realm. (7
                Kingdoms out of 12){" "}
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">
            Play Session Duration 🕰️
          </h2>
          <ul className="list-disc  list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Typical Session: </strong>A typical play session lasts
              between 30 to 60 minutes.
            </li>
            <li>
              <strong>Variation: </strong>Length can vary depending on the
              number of players and strategies employed.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Glossary 📃</h2>
          <ul className="list-disc  list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Gold: </strong>Used to buy troops, fortify armies, or buy
              armies.
            </li>
            <li>
              <strong>Troops: </strong>Used for battles or defending
              territories.
            </li>
            <li>
              <strong>Suite cards: </strong>Cards corresponding to Hearts,
              Diamonds, Clubs and Spades, each with a specific game function.
            </li>
            <li>
              <strong>Action cards: </strong>Cards that triggers events,
              challenges, or opportunities in the game.
            </li>
          </ul>
        </div>

        <div className="text-center font-bold text-xl">
          <h2>
            Enjoy your journey in &quot;The Royal Ascension&quot; where
            strategy, alliances, and cunning will lead you to the throne!{" "}
          </h2>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
