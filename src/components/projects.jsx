import React, { useState } from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import githubImage from "../img/github 2.png";

const Proyects = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderContent = [
    {
      img: img1,
      description: "Description for Image 1",
      link: "a",
    },
    {
      img: img2,
      description: "Description for Image 2",
      link: "",
    },
    {
      img: img3,
      description: "Description for Image 3",
      link: "",
    },
    {
      img: img4,
      description: "Description for Image 4",
      link: "",
    },
  ];

  const Slide = (type) => {
    if (type === "next") {
      setActiveSlide((activeSlide + 1) % sliderContent.length);
    } else if (type === "prev") {
      const newActiveSlide =
        (activeSlide - 1 + sliderContent.length) % sliderContent.length;
      setActiveSlide(newActiveSlide);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="relative rounded-xl shadow-xl overflow-hidden w-[600px] h-[400px] mt-3 left-8">
          {sliderContent.map((slide, i) => (
            <img
              src={slide.img}
              key={i}
              alt="slideImg"
              className={`h-full w-full absolute object-cover inset-0 transition duration-[0.75s] transform-gpu ${
                i === activeSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            />
          ))}
          <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
            <button id="back" className="z-10" onClick={() => Slide("prev")}>
              <ion-icon name="chevron-back-outline" size="large"></ion-icon>
            </button>
            <button
              id="forward"
              className="z-10 right-0"
              onClick={() => Slide("next")}
            >
              <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
            </button>
          </div>
        </div>
        <div className="bg-gray-400/50 p-4 rounded-xl shadow-xl w-96 h-[300px] fixed mt-[165px] transform -translate-y-1/2 right-60">
          <div className="text-lg font-medium">
            {sliderContent[activeSlide].description}
          </div>
          <div className="text-gray-500">
            More information about the image...
          </div>
        </div>
        <div className="bg-gray-400/50 p-4 justify-center items-center flex rounded-full shadow-xl w-96 h-20 fixed top-[572px] transform -translate-y-1/2 right-60">
          <div className="text-md font-sm relative flex bg-gray-200/40 justify-center items-center  rounded-full  w-80 h-10 transform transition-transform duration-300 hover:scale-110 ">
            <img src={githubImage} className="w-6 absolute mr-[180px]" />
            <a href={sliderContent[activeSlide].link} className="ml-5">
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
