import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import CardSlider from "./CardSlider";
import imgAngular from "../assets/img/iconos/angular.png";
import imgReact from "../assets/img/iconos/react.png";
import imgDjango from "../assets/img/iconos/django.png";
import imgPostgresql from "../assets/img/iconos/postgresql.png";
import imgTailwindcss from "../assets/img/iconos/tailwindcss.png";
import imgStyledComponents from "../assets/img/iconos/styledComponents.png";
import imgCss from "../assets/img/iconos/css.png";
import { effectView } from "../utils/interception";
import "../styles/slider.css";

export default function Slider() {
  const [responsive, setResponsive] = React.useState(2);

  React.useEffect(() => {
    effectView();
    // calculateWidth();
  }, []);

  // const { width } = useScreenSize();
  // if(width <= 768){
  //   setResponsive(1);
  // }else{
  //   setResponsive(2);
  // }

  const imagenesCard1 = [
    {
      name: "Angular",
      imgRute: imgAngular,
    },
    {
      name: "Django",
      imgRute: imgDjango,
    },
    {
      name: "Postgresql",
      imgRute: imgPostgresql,
    },
    {
      name: "Tailwindcss",
      imgRute: imgTailwindcss,
      especial: "img-tailwindcssCard",
    },
  ];

  const dataCard1 = {
    name: "Jesucristo Reina",
    description: "Proyecto para la iglesia Jesucristo Reina",
    url: "https://portfolioshopservices.shop/",
    urlname: "portfolioshopservices.shop",
    state: "En construcción...",
  };

  const imagenesCard2 = [
    {
      name: "React",
      imgRute: imgReact,
    },
    {
      name: "Css",
      imgRute: imgCss,
    }
  ];

  const dataCard2 = {
    name: "Control de gastos",
    description: "Proyecto para el control de gastos",
    url: "https://control-gastos2023.netlify.app/",
    urlname: "control-gastos2023.netlify.app",
    state: "Terminado",
  }

  const imagenesCard3 = [
    {
      name: "React",
      imgRute: imgReact,
    },
    {
      name: "Tailwindcss",
      imgRute: imgTailwindcss,
      especial: "img-tailwindcssCard",
    }
  ]

  const dataCard3 = {
    name: "Control de citas",
    description: "Proyecto para el control de citas veterinarias",
    url: "https://control-citas2023.netlify.app/",
    urlname: "control-citas2023.netlify.app",
    state: "Terminado",
  }

  const imagenesCard4 = [
    {
      name: "React",
      imgRute: imgReact,
    },
    {
      name: "Styled-components",
      imgRute: imgStyledComponents,
    }
  ]

  const dataCard4 = {
    name: "Cotizador de criptomonedas",
    description: "Proyecto para cotizar criptomonedas",
    url: "https://crypto-monedas.netlify.app/",
    urlname: "crypto-monedas.netlify.app",
    state: "Terminado",
  }

  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      className="mySwiper"
      id="valueHandle"
    >
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard card1" id="efectoPrueba1">
            <CardSlider imagenes={imagenesCard1} data={dataCard1} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard card2" id="efectoPrueba2">
            <CardSlider imagenes={imagenesCard2} data={dataCard2} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard card3" id="efectoPrueba3">
            <CardSlider imagenes={imagenesCard3} data={dataCard3} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard card4" id="efectoPrueba4">
            <CardSlider imagenes={imagenesCard4} data={dataCard4} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
