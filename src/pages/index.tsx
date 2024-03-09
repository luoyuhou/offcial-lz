import React from "react";
import TopBar from "../modules/menu/top-bar";
import Carousel from "../modules/components/carousel";

const ImgArr = [
  { src: "/assets/carousel/carousel-1.svg", description: "Slide Item 1" },
  { src: "/assets/carousel/carousel-2.svg", description: "Slide Item 2" },
  { src: "/assets/carousel/carousel-3.svg", description: "Slide Item 3" },
  { src: "/assets/carousel/carousel-4.svg", description: "Slide Item 4" },
];
const subImgArr = [
  { src: "/assets/carousel/carousel-1.svg", description: "Slide Item 1" },
  { src: "/assets/carousel/carousel-2.svg", description: "Slide Item 2" },
  { src: "/assets/carousel/carousel-3.svg", description: "Slide Item 3" },
  { src: "/assets/carousel/carousel-4.svg", description: "Slide Item 4" },
];

export default function Home() {
  return (
    <TopBar>
      <section className="w-full h-screen">
        <Carousel card={ImgArr} className="" subCard={subImgArr} />
      </section>
    </TopBar>
  );
}
