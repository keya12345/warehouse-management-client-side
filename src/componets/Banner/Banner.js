import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpeg";
import banner3 from "../../images/banner3.png";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            height={600}
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="text-primary fs-2 text fw-bolder">
              Electronic device means an item that operates by controlling the
              flow of electrons or other electrically charged particles in
              circuits.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={600}
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="text-dark fs-2 text fw-bolder">
              Electronics is the study of electricity (the flow of electrons)
              and how to use that to build things like computers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={600}
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p className=" mt-3 text-primary fs-2 text fw-bolder">
              The Transistor is a semiconductor device provided with three
              terminals called base, emitter and collector.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
