"use client";
import React from "react";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";
import Slide8 from "./components/Slide8";
import Slide9 from "./components/Slide9";
import Slide10 from "./components/Slide10";
import Slide11 from "./components/Slide11";
import Slide12 from "./components/Slide12";
import Slide13 from "./components/Slide13";
import Slide14 from "./components/Slide14";
import Slide15 from "./components/Slide15";
import Slide16 from "./components/Slide16";
import './styles.scss'

export default function Home() {
  const [slide, setSlide] = React.useState(0);
  const totalSlides = 16; 

  React.useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'KeyD' || e.code === 'ArrowRight') {
        setSlide((prevSlide) => (prevSlide < totalSlides - 1 ? prevSlide + 1 : prevSlide));
      }
      if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
        setSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : prevSlide));
      }
    };

    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <div>
      {slide === 0 && <Slide1 />}
      {slide === 1 && <Slide2 />}
      {slide === 2 && <Slide3 />}
      {slide === 3 && <Slide4 />}
      {slide === 4 && <Slide5 />}
      {slide === 5 && <Slide6 />}
      {slide === 6 && <Slide7 />}
      {slide === 7 && <Slide8 />}
      {slide === 8 && <Slide9 />}
      {slide === 9 && <Slide10 />}
      {slide === 10 && <Slide11 />}
      {slide === 11 && <Slide12 />}
      {slide === 12 && <Slide13 />}
      {slide === 13 && <Slide14 />}
      {slide === 14 && <Slide15 />}
      {slide === 15 && <Slide16 />}
    </div>
  );
}