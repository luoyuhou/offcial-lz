import React, { useRef, useEffect } from "react";

function TextCarousel({
  card,
  index,
  activeIndex,
  className,
  isHeader,
}: {
  card: { src: string; description: string }[];
  index: string;
  activeIndex: number;
  className: string;
  isHeader: boolean;
}) {
  let childRef = useRef<{ offsetHeight: number; style: { height: string } }>(
    null,
  );
  let parentRef = useRef<{ offsetHeight: number; style: { height: string } }>(
    null,
  );
  useEffect(() => {
    if (parentRef.current && childRef.current) {
      const childHeight = childRef.current.offsetHeight;
      parentRef.current.style.height = `${childHeight / card.length}px`;
    }
  });

  return (
    <div
      ref={(r) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        parentRef = r;
      }}
      className={className}
    >
      <p
        ref={(r) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          childRef = r;
        }}
        className={`leading-normal relative transition duration-1500 flex flex-col
          ${
            isHeader
              ? "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-200 to-pink-600"
              : ""
          }`}
        style={{
          transform: `translateY(${-100 * (activeIndex / card.length)}%)`,
        }}
      >
        {card.map((item) => (
          <span key={`text_carousel_${item.src}`}>{item.description}</span>
        ))}
      </p>
    </div>
  );
}
export default TextCarousel;
