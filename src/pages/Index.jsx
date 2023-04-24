import React from "react";
import "../styles/carousel.css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles/slider.css";
import "../styles/proyectos.css";
import Contacto from "../components/contacto";
import Proyectos from "../components/Proyectos";
import Perfil from "../components/Perfil";
import logoPerfil from "../assets/img/perfil.jpg"

export default function Index() {
  return (
    <div className="">
      <div className="bgimg-1" id="home">
        <div className="title-bg">
          <div className="content-titleBg">

          <span>Cristian Castaño</span>
          </div>
          <p>
            Soy un desarrollador junior apasionado por la programacion, en constante aprendizaje y con ganas de seguir creciendo.
          </p>
        </div>
        <div className="content-logoBg">
          <div className="content-logoPj">
          <img src={logoPerfil} alt="Logo de background" className="logo-perfil"/>
          </div>
        </div>
      </div>
      <Perfil />
      <Proyectos />
      <div style={{ minHeight: "100vh" }}>
        <Contacto />
      </div>
    </div>
  );
}
