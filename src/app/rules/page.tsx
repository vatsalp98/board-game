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
        <div className="flex flex-row items-center justify-center w-full my-8 text-justify">
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
            <li>
              4 Character Tokens
              <ul className="list-disc list-inside px-8">
                <li>King Eadric the Wise </li>
                <li>Lady Seraphina Von Eldora</li>
                <li>Sir Thaddeus Blondewood</li>
                <li>Lysandra of Rukenvale</li>
              </ul>
            </li>
            <li>
              2 Decks of 52 suite cards (26 Hearts, 26 Diamonds, 26 Clubs, 26
              spades)
            </li>
            <li>12 Different territories cards </li>
            <li>A set of 2 dice </li>
            <li>1 Key explaining the meanings of the Action cards </li>
            <li>Some scrap paper (To keep track of points in battle)</li>
            <li>1 rulebook</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Setup ⚙️</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Place Tokens: </strong>Place the character tokens in their
              designated &quot;home&quot; space on the board (This will be the
              green circle at the center).
            </li>
            <li>
              <strong>Select territories/countries: </strong>Each player rolls
              the dice to determine the order of territory selection. The
              highest roll gets to choose their territories first, the next
              highest second etc. In order of (1,2,3,4 – 1,2,3,4 – 1,2,3,4).
            </li>
            <li>Players start the game by dividing the 12 territories.</li>
            <li>
              If there are 3 players, then they will split the territories by 4
              each instead of 3
            </li>
            <li>
              <strong>Shuffle Decks: </strong> Shuffle the deck of action cards
              (Spades) and place it face down in the corresponding space.
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
              Place the Jokers if applicable to the discard pile to commence the
              pile.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Basic Gameplay 🎲</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li>
              <strong>Turn Order: </strong>The players will then begin the game
              in order of territory selection, going clockwise (the player that
              rolled the highest number will start and move clockwise from
              there)
            </li>
            <li>
              <strong>Rolling Dice: </strong>On a player&apos;s turn, they will
              roll a single die and move their character token the corresponding
              number of spaces (players can move in any direction of the board,
              left or right)
            </li>
            <li>
              <strong>Drawing suite cards: </strong> When a player lands on a
              space, they draw a suite card from that space&apos;s suite (each
              card drawn will represent the number of the card drawn of that
              value):
              <ul className="list-disc list-inside px-6">
                <li>
                  <strong>Hearts: </strong> Health/ armor (When players collect
                  health cards, the additional points of strength are added to
                  their chosen territories making it stronger and becoming more
                  difficult to defeat) (in battle you are only allowed to use 2
                  of the total health cards you hold in your hand)
                </li>
                <li>
                  <strong>Diamonds: </strong> Currency (Gold) used to buy
                  weapons
                </li>
                <li>
                  <strong>Spades: </strong> Initiate battles and provide an
                  action card.
                </li>
                <li>
                  <strong>Clubs: </strong> Weapons that help players in battle
                  that can be purchased in the shop with gold (clubs hold face
                  value of what they are ex. 6 of clubs = 6 additional points
                  added via armor/ weaponry) (With weapons you are allowed to
                  use as many as you like in a battle, if you hold 4 weapon
                  cards then you may use all 4 in the battle)
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
          <h2 className="font-semibold mb-2 text-xl">Action Cards ♠️</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Drawing Action Cards: </strong> Drawn when a player lands
              on spades.
              <ul className="list-disc list-inside px-4">
                <li>
                  All action cards drawn will be completed first and then the
                  battle will initiate.
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
                  their opponents during battle)
                  <br />
                  <span className="px-6 font-semibold italic">
                    i- Jacks of Spades (2 in the deck)
                  </span>
                </li>
                <li>
                  <strong>Royal Decree </strong> (All remaining players battle
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
                  yourself from the fight) (This may be used strategically to
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
          <h2 className="font-semibold mb-2 text-xl">Battles ⚔️</h2>
          <ul className="list-decimal list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Initiating Battles: </strong>Battles are initiated when a
              player lands on spades and after the action card is drawn.
            </li>
            <li>
              <strong>Choosing Opponents: </strong>The initiating player chooses
              an opponent to battle. (Not including a player who has previously
              lost a battle)
            </li>
            <li>
              <strong>Health Cards: </strong>A maximum of 2 Collected health
              cards may be used in battle by attaching them to a player’s
              kingdom and increasing their strength by the amount of health
              written (Ex. Territory Chosen in Battle = 15 points of strength
              with 2 health cards totaling 14 points of health making the total
              strength of the army 29 points + dice roll)
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
              the territory used in battle and gets to pick one health card and
              one weapon card if applicable at random from the winner&apos;s
              Kingdom to discard in the discard pile.
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
                  Spade space.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <div className="mb-8">
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
        </div> */}

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Board Layout 📜</h2>
          <ul className="list-disc  list-inside gap-2 flex flex-col">
            <li className="">
              <strong>Regions: </strong>Each space corresponds to a suite
              (Hearts, Diamonds, Spades, and 2 shops) and contains suite cards
              (except the shop). Please refer to the Suite Card definitions
              under “Basic Gameplay” for a basic overview.
              <ul className="list-disc px-10">
                <li>35 Spots total</li>
                <li>With 2 shops on the map.</li>
              </ul>
            </li>
            <li>
              <strong>Shop: </strong>A player that lands on this space can spend
              their currency cards to purchase weapons to power up their
              territories.
            </li>
            <li>
              <strong>Weapon choices: </strong>
              <ul className="list-disc px-10">
                <li>
                  Weapon buffs will be equivalent to the number associated on
                  the card. (Ex. 5 of Clubs will be equal to +5 strength).
                </li>
              </ul>
            </li>
            <li>
              <strong>Purchasing Weapons with Gold: </strong>
              <ul className="list-disc px-10">
                <li>
                  The value of these weapons will be equal to the number on the
                  card and can be purchased at that price. (Ex. 7 Clubs can be
                  purchased with a 7 Diamonds (Gold)).
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
              <strong>Eliminated Players: </strong> If a player loses all their
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
                Kingdoms out of 12)
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
              <strong>Typical Session: </strong>A typical play session will last
              between 60 to 90 minutes.
            </li>
            <li>
              <strong>Variation: </strong>Length can vary depending on the
              number of players and strategies employed.
              <ul className="px-10 list-disc">
                <li>3 - 4 players</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <div className="mb-8">
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
        </div> */}

        <div className="text-center font-semibold text-xl italic mb-14 mt-10">
          <h2>
            Enjoy your journey in &quot;The Royal Ascension&quot; where
            strategy, alliances, and cunning will lead you to the throne!
          </h2>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">
            Step 1: Define the Primary Mechanics
          </h2>
          <span>
            Identify the main elements and rules of your game. For &quot;The
            Royal Ascension&quot; these could include:{" "}
          </span>
          <ul className="list-decimal list-inside gap-2 flex flex-col px-8 mt-2">
            <li className="">Turn Order</li>
            <li>Movement</li>
            <li>Combat</li>
            <li>Resource Managment</li>
            <li>Random Events</li>
            <li>Winning Conditions</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">
            Step 2: Break down each Mechanics
          </h2>
          <span>
            Detail the processes and decisions involved in each mechanic.
          </span>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">
            Step 3: Create the Flowcharts
          </h2>
          <span>
            Using a flowchart tool (such as Lucidchart, draw.io, or any other
            diagramming tool), create individual flowcharts for each mechanic.
          </span>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-xl">Example Flowcharts</h2>
          <ul className="list-decimal list-inside px-4">
            <li>Turn Order</li>
            <ul className="list-disc list-inside px-8">
              <li>Start Turn</li>
              <li className="">
                Draw Event Card
                <ul className="px-6">
                  <li>- If Special Event, follow event instructions</li>
                </ul>
              </li>
              <li className="">
                Player Actions
                <ul className="px-6">
                  <li>- Move</li>
                  <li>- Trade</li>
                  <li>- Attack</li>
                  <li>- Build</li>
                </ul>
              </li>
              <li className="">
                End Turn
                <ul className="px-6">
                  <li>- Pass turn to next player.</li>
                </ul>
              </li>
            </ul>

            <li>Movement</li>
            <ul className="list-disc list-inside px-8">
              <li>Select Character</li>
              <li className="">
                Determine Movement Range
                <ul className="px-6">
                  <li>- Roll dice</li>
                  <li>- Check abilities</li>
                </ul>
              </li>
              <li className="">
                Move Character
                <ul className="px-6">
                  <li>- Follow path on the board</li>
                  <li>- Encounter obstacles or opponents</li>
                </ul>
              </li>
              <li className="">
                Check for Events
                <ul className="px-6">
                  <li>- Random Event</li>
                  <li>- Battle</li>
                </ul>
              </li>
            </ul>

            <li>Combat</li>
            <ul className="list-disc list-inside px-8">
              <li>
                Initiate Combat
                <ul className="px-6">
                  <li>- Choose opponent</li>
                </ul>
              </li>
              <li className="">
                Roll for Attack
                <ul className="px-6">
                  <li>- Calculate attack points.</li>
                </ul>
              </li>
              <li className="">
                Opponent Defense
                <ul className="px-6">
                  <li>- Roll for defense</li>
                </ul>
              </li>
              <li className="">
                Resolve Outcomes
                <ul className="px-6">
                  <li>- Damage calculation</li>
                  <li>- Defeat or retreat</li>
                </ul>
              </li>
            </ul>

            <li>Resource Managment</li>
            <ul className="list-disc list-inside px-8">
              <li>
                Collect Resources
                <ul className="px-6">
                  <li>- From territories, cards, trades</li>
                </ul>
              </li>
              <li className="">
                Manage Inventory
                <ul className="px-6">
                  <li>- Use, trade, or store resources.</li>
                </ul>
              </li>
              <li className="">
                Allocate Resources
                <ul className="px-6">
                  <li>- Building, upgrading, training units.</li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
