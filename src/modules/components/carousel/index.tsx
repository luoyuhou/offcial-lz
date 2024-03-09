import React, { useEffect, useState } from "react";
import Link from "next/link";
import SquigglyLines from "../SquigglyLines";
import TextCarousel from "./TextCarousel";
import BlurImage from "../BlurImage";

type ImageProps = {
  src: string;
  description: string;
};
function CarousalItem({ item, width }: { item: ImageProps; width: string }) {
  return (
    <div
      className="inline-flex items-start w-full h-full relative"
      style={{ width }}
    >
      <BlurImage image={item.src} alt={item.description} />
    </div>
  );
}

function MiniCarouselItem({
  item,
  width,
}: {
  item: ImageProps;
  width: string;
}) {
  return (
    <div
      className="inline-flex items-start w-full h-full relative"
      style={{ width }}
    >
      <BlurImage image={item.src} alt={`mini_${item.description}`} />
    </div>
  );
}

function Carousal({
  card,
  subCard,
  className,
}: {
  card: ImageProps[];
  subCard: ImageProps[];
  className: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isSwipingPaused, setIsSwipingPaused] = useState(false);

  const updateIndex = (index: number) => {
    let newIndex = index;
    if (newIndex < -1) {
      newIndex = card.length - 1;
    } else if (newIndex >= card.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwipingPaused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className={`flex relative w-full h-full justify-between align-start shadow-xl shadow-white/10 ${className}`}
    >
      <div className="w-[20vw] bg-black hidden" />
      <div className="w-full relative overflow-hidden">
        <div
          onMouseEnter={() => setIsSwipingPaused(true)}
          onMouseLeave={() => setIsSwipingPaused(false)}
          className="inner whitespace-nowrap h-full transition duration-3000"
          style={{ transform: `translateX(${-activeIndex * 100}%)` }}
        >
          {card.map((child: { src: string; description: string }) => (
            <CarousalItem
              key={`carousel_${child.src}`}
              item={child}
              width="100%"
            />
          ))}
        </div>
      </div>
      <div className="left-[10vw] md:top-[10vw] top-[15vw] absolute flex hidden">
        <div className="w-[20vw] h-[35vw] overflow-hidden relative">
          <div
            onMouseEnter={() => setIsSwipingPaused(true)}
            onMouseLeave={() => setIsSwipingPaused(false)}
            className="inner whitespace-nowrap h-full transition duration-3000"
            style={{ transform: `translateX(${-activeIndex * 100}%)` }}
          >
            {subCard.map((item: ImageProps, index: number) => {
              const key = `subcarousel_${index}`;
              return <MiniCarouselItem key={key} item={item} width="100%" />;
            })}
          </div>
        </div>
        <div className="relative w-[60vw] text-center items-center justify-between flex flex-col">
          <div className="flex flex-col">
            <span className="relative lg:text-9xl md:text-7xl sm:text-4xl text-3xl font-bold text-white leading-snug">
              <SquigglyLines />
              <TextCarousel
                card={card}
                activeIndex={activeIndex}
                index="name"
                isHeader
                className="w-full overflow-hidden"
              />
            </span>
            <div className="text-xs sm:text-xl md:text-2xl lg:text-3xl">
              <TextCarousel
                card={card}
                activeIndex={activeIndex}
                index="description"
                isHeader={false}
                className="w-full overflow-hidden"
              />
              <TextCarousel
                card={card}
                activeIndex={activeIndex}
                index="bio"
                isHeader={false}
                className="w-full overflow-hidden"
              />
            </div>
          </div>
          <div className="flex flex-grow w-full items-center justify-center">
            <Link
              href={`/apartments?img-number=${activeIndex + 1}`}
              className="glass btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              hello
            </Link>
          </div>
        </div>
      </div>
      <div
        className="indicators px-2 right-0 h-8 w-full flex justify-end items-center gap-3 absolute"
        style={{ top: "50%" }}
      >
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none prev-button"
          onClick={() => {
            updateIndex(
              activeIndex - 1 < 0 ? card.length - 1 : activeIndex - 1,
            );
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* <p>{activeIndex + 1}</p> */}
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none next-button"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
