import React from "react";
import Carousel from "./Carousel";
import Slider from "./Slider";

export default function Proyectos() {
  return (
    <div className="bgimg-2" id="proyectos">
      <div className="bg-banner">
        <h1>Proyectos Personales</h1>
        <Slider/>
      </div>
      <div className="bg-banner2">
        <h1>Proyectos academicos</h1>
        <div className="content-cardsProyects">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
