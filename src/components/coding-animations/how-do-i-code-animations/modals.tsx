"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];

function Modals() {
  const [activeGame, setActiveGame] = useState<(typeof GAMES)[number] | null>(
    null,
  );
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    const onKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") setActiveGame(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeGame ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-10 bg-white/20"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
          <div className="absolute inset-0 z-10 grid place-items-center text-left">
            <motion.div
              layoutId={`card-${activeGame.title}`}
              className="flex h-fit w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden rounded-xl bg-black p-4"
              ref={ref}
            >
              <div className="flex w-full items-center gap-4">
                <motion.img
                  layoutId={`image-${activeGame.title}`}
                  height={56}
                  width={56}
                  alt="Game"
                  src={activeGame.image}
                  className="rounded-xl"
                />
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-col p-0">
                    <motion.h2
                      layoutId={`title-${activeGame.title}`}
                      className="font-medium text-gray-300 text-sm"
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${activeGame.title}`}
                      className="font-sm text-gray-500"
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`button-${activeGame.title}`}
                    className="rounded-full bg-gray-300 px-3 py-1 font-semibold text-blue-500 text-xs"
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="text-gray-500 text-sm"
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="relative flex w-full flex-col items-center p-0 text-left">
        {GAMES.map((game) => (
          <motion.li
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            className="group flex w-96 cursor-pointer items-center gap-4 rounded-lg p-0"
          >
            <motion.img
              layoutId={`image-${game.title}`}
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              className="rounded-xl"
            />
            <div className="flex flex-1 items-center justify-between border-gray-800 border-b group-last-of-type:border-b-0">
              <div className="flex flex-col py-4">
                <motion.h2
                  layoutId={`title-${game.title}`}
                  className="font-medium text-gray-300 text-sm"
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`description-${game.title}`}
                  className="font-sm text-gray-500"
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${game.title}`}
                className="rounded-full bg-gray-300 px-3 py-1 font-semibold text-blue-500 text-xs"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export { Modals };
