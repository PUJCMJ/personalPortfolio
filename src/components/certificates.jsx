import { useState } from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";

const Certificates = () => {
  const [active, setActive] = useState(0);

  const sliderContent = [
    {
      img: img1,
      name: "API",
    },
    {
      img: img2,
      name: "Store-app",
    },
    {
      img: img3,
      name: "Landing-page",
    },
    {
      img: img4,
      name: "Financial-app",
    },
  ];

  const Slide = (type) => {
    let local;
    if (type === "next") {
      local = active + 1;
      local > sliderContent.length - 1 ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;
      local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
    }
  };

  return (
    <div>
      <div className="rounded-xl relative shadow-lg overflow-hidden w-[600px] h-[400px] mx-auto">
        <div className="w-[600px] h-[400px] relative">
          {sliderContent.map((slide, i) => {
            return (
              <img
                src={slide.img}
                key={i}
                alt="slideImg"
                className={`h-full w-full absolute object-cover inset-0 transition duration-500 transform-gpu ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
            );
          })}
        </div>
        <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
          <button id="back" className="z-10" onClick={() => Slide("prev")}>
            <ion-icon name="chevron-back-outline" size="large"></ion-icon>
          </button>
          <button
            id="foward"
            className="z-10 right-0"
            onClick={() => Slide("next")}
          >
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;