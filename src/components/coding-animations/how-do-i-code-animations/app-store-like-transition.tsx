"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

const CARDS = [
  {
    title: "Vikings",
    subtitle: "Clash of the Norse Warriors",
    description: "A game about vikings",
    longDescription:
      "A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp",
    logo: "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp",
  },
];

function Card({
  card,
  setActiveCard,
}: {
  card: (typeof CARDS)[number];
  setActiveCard: (card: (typeof CARDS)[number]) => void;
}) {
  return (
    <motion.div
      layoutId={`card-${card.title}`}
      className="relative mx-0 my-auto h-[370px] w-80 cursor-pointer select-none overflow-hidden rounded-[20px] outline-none"
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCard(card)}
    >
      <motion.img
        layoutId={`image-${card.title}`}
        src={card.image}
        alt="main-image"
        className="absolute inset-0 h-full w-full rounded-[20px]"
      />
      <motion.button
        aria-hidden
        tabIndex={-1}
        layoutId={`close-button-${card.title}`}
        className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-[50%] bg-black/20 text-[white] opacity-0 backdrop-blur-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          height="20"
          width="20"
          stroke="currentColor"
        >
          <title>Close</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </motion.button>
      <motion.div
        layoutId={`card-content-${card.title}`}
        className="absolute inset-x-0 bottom-0"
      >
        <div className="px-4 pt-0 pb-3">
          <motion.h2
            layoutId={`card-heading-${card.title}`}
            className="mb-1 max-w-[160px] text-left font-extrabold text-[40px] text-[white] uppercase leading-[0.9]"
          >
            Game of the day
          </motion.h2>
        </div>
        <motion.div
          layoutId={`card-extra-info-${card.title}`}
          className="relative flex w-full items-center gap-2 rounded-b-[20px] bg-black/20 px-4 py-3 backdrop-blur-[2px]"
        >
          <motion.img
            src={card.logo}
            width={40}
            height={40}
            alt="play"
            layoutId={`card-game-image-${card.title}`}
            className="rounded-lg"
          />
          <div className="flex flex-col items-start">
            <motion.span
              layoutId={`card-game-title-${card.title}`}
              className="font-semibold text-[white] text-xs"
            >
              {card.title}
            </motion.span>
            <motion.span
              layoutId={`card-game-subtitle-${card.title}`}
              className="text-[#c4c5cd] text-xs"
            >
              {card.description}
            </motion.span>
          </div>
          <motion.button
            layoutId={`card-button-${card.title}`}
            className="ml-auto rounded-full bg-white/30 px-4 py-1 font-semibold text-[white] text-sm"
          >
            Get
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        layoutId={`card-long-description-${card.title}`}
        className="absolute top-full flex-1 p-4 opacity-0"
      >
        <div>
          <p className="mb-4 text-[#666666] leading-[1.6]">
            <b className="font-semibold text-[black]">Are you ready?</b>{" "}
            {card.longDescription}
          </p>
          <p className="mb-4 text-[#666666] leading-[1.6]">
            <b className="font-semibold text-[black]">
              The never ending adventure
            </b>
            In this game set in a fairy tale world, players embark on a quest
            through mystical lands filled with enchanting forests and towering
            mountains.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ActiveCard({
  activeCard,
  setActiveCard,
}: {
  activeCard: (typeof CARDS)[number];
  setActiveCard: (card: (typeof CARDS)[number] | null) => void;
}) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveCard(null));

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${activeCard.title}`}
      className="absolute top-0 m-0 mx-0 my-auto flex h-full w-[360px] cursor-pointer select-none flex-col overflow-hidden rounded-none bg-white outline-none"
    >
      <div className="relative h-[430px] w-[360px]">
        <motion.img
          layoutId={`image-${activeCard.title}`}
          src={activeCard.image}
          alt="main-image"
          className="pointer-events-none h-full w-full rounded-none object-cover"
        />
        <motion.button
          layoutId={`close-button-${activeCard.title}`}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-[50%] bg-black/20 text-[white] backdrop-blur-sm"
          aria-label="Close button"
          onClick={() => setActiveCard(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            height="20"
            width="20"
            stroke="currentColor"
          >
            <title>Close</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </motion.button>
        <motion.div
          layoutId={`card-content-${activeCard.title}`}
          className="absolute inset-x-0 bottom-0"
        >
          <div className="px-4 pt-0 pb-3">
            <motion.h2
              layoutId={`card-heading-${activeCard.title}`}
              layout
              className="mb-1 max-w-[160px] text-left font-extrabold text-[40px] text-[white] uppercase leading-[0.9]"
            >
              Game of the day
            </motion.h2>
          </div>
          <motion.div
            layoutId={`card-extra-info-${activeCard.title}`}
            className="relative flex w-full items-center gap-2 rounded-b-[20px] bg-black/20 px-4 py-3 backdrop-blur-[2px]"
          >
            <motion.img
              src={activeCard.logo}
              width={40}
              height={40}
              alt="play"
              layoutId={`card-game-image-${activeCard.title}`}
              className="rounded-lg"
            />
            <div className="flex flex-col items-start">
              <motion.span
                layoutId={`card-game-title-${activeCard.title}`}
                className="font-semibold text-[white] text-xs"
              >
                {activeCard.title}
              </motion.span>
              <motion.span
                layoutId={`card-game-subtitle-${activeCard.title}`}
                className="text-[#c4c5cd] text-xs"
              >
                {activeCard.description}
              </motion.span>
            </div>
            <motion.button
              layoutId={`card-button-${activeCard.title}`}
              layout
              className="ml-auto rounded-full bg-white/30 px-4 py-1 font-semibold text-[white] text-sm"
            >
              Get
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        layoutId={`card-long-description-${activeCard.title}`}
        className="flex-1 p-4"
      >
        <p className="mb-4 text-[#666666] leading-[1.6]">
          <b className="font-semibold text-[black]">Are you ready?</b>{" "}
          {activeCard.longDescription}
        </p>
        <p className="mb-4 text-[#666666] leading-[1.6]">
          <b className="font-semibold text-[black]">
            The never ending adventure{" "}
          </b>
          In this game set in a fairy tale world, players embark on a quest
          through mystical lands filled with enchanting forests and towering
          mountains. Players can explore the world, build their own viking
        </p>
      </motion.div>
    </motion.div>
  );
}

function AppStoreLikeTransition() {
  const [activeCard, setActiveCard] = useState<(typeof CARDS)[number] | null>(
    null,
  );

  useEffect(() => {
    const onKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") setActiveCard(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative mx-0 my-auto flex h-[675px] w-full flex-col items-center justify-center">
      {CARDS.map((card) => (
        <Card key={card.title} card={card} setActiveCard={setActiveCard} />
      ))}
      <AnimatePresence>
        {activeCard ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeCard ? (
          <ActiveCard activeCard={activeCard} setActiveCard={setActiveCard} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export { AppStoreLikeTransition };
