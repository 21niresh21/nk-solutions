import React, { useState } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
        <h1 style={{marginTop: '1300px', paddingLeft: '15px', textAlign: 'center'}} id="services-section">Our Services</h1>
      {data.map((item, idx) => (
        <div className={idx === slide ? "title" : "title title-hidden"} >
          <h2>{item.title}</h2>
        </div>
      ))}

      <div className="carousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {data.map((item, idx) => (
          <img
            key={item.src}
            src={`${process.env.PUBLIC_URL}/assets/${item.src}`}
            alt={item.alt}
            className={idx === slide ? "slide" : "slide slide-hidden"}
          />
        ))}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`indicator ${
                idx === slide ? "" : "indicator-inactive"
              }`}
            ></button>
          ))}
        </span>
      </div>
      {data.map((item, idx) => (
        <div
          className={idx === slide ? "title" : "title title-hidden"}
          style={{ padding: "10px", paddingTop: "5px" }}
        >
          {item.description}
        </div>
      ))}
    </>
  );
};
