import React from "react";
import { effectView } from "../utils/interception";
import imgReact from "../assets/img/iconos/react.png";
import imgPhp from "../assets/img/iconos/php.png";
import imgBootstrap from "../assets/img/iconos/bootstrap.png";
import imgMysql from "../assets/img/iconos/mysql.png";
import imgCss from "../assets/img/iconos/css.png";
import CardSlider from "./CardSlider";
import "../styles/carousel.css";

export default function Carousel() {
  React.useEffect(() => {
    effectView();
  }, []);


  const imagenesCard1 = [
    {
      name: "React",
      imgRute: imgReact,
    },
    {
      name: "Php",
      imgRute: imgPhp,
    },
    {
      name: "MySql",
      imgRute: imgMysql,
    },
    {
      name: "Bootstrap",
      imgRute: imgBootstrap,
    },
  ]

  const dataCard1 = {
    name: "Banca 4.0",
    description: "Proyecto de un simulador de un sistema bancario",
    url: "https://fourcajk.com/",
    urlname: "fourcajk.com",
    state: "En construcción...",
  }

  const imagenesCard2 = [
    {
      name: "React",
      imgRute: imgReact,
    },
    {
      name: "Css",
      imgRute: imgCss,
    }
  ]

  const dataCard2 = {
    name: "Pokédex",
    description: "Proyecto de una pokédex",
    url: "https://pokedeexx.netlify.app/",
    urlname: "pokedeexx.netlify.app",
    state: "Terminado",
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div id="efecto" className="content-generalCard cardAcademy1">
          <CardSlider imagenes={imagenesCard1} data={dataCard1}/>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div id="efecto2" className="content-generalCard cardAcademy2">
        <CardSlider imagenes={imagenesCard2} data={dataCard2}/>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div id="efecto3" className="content-generalCard cardAcademy3">
          <h3>Proyecto 3</h3>
        </div>
      </div>
    </>
  );
}
