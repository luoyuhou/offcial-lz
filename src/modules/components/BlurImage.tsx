import Image from "next/image";
import React, { useState } from "react";

type BlurImageProps = {
  image: string;
  alt: string;
};
export default function BlurImage({ image, alt }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-screen text-center">
      <Image
        key={alt}
        alt={alt}
        src={image}
        fill
        objectFit="cover"
        className={`
          duration-700 ease-in-out group-hover:opacity-75 ovverflow-hidden w-screen
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
