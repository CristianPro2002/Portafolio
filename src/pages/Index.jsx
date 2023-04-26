import React from "react";
import Contacto from "../components/Contacto";
import Proyectos from "../components/Proyectos";
import Perfil from "../components/Perfil";
import logoPerfil from "../assets/img/perfil.jpg";
import cv from "../assets/files/CristianAndresCV.pdf"
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Index() {
  const dateNow = new Date();

  const download = () => {};

  return (
    <div className="">
      <div className="bgimg-1" id="home">
        <div className="title-bg">
          <div className="content-titleBg">
            <span>Cristian Castaño</span>
          </div>
          <p className="content-dataPern">
            Soy un desarrollador junior apasionado por la programación, en
            constante aprendizaje y con ganas de seguir creciendo.
          </p>
          <div className="content-btnDownload">
            <a href={cv}  download="CristianCV">Descargar CV</a>
          </div>
          <p className="content-dataDate">{dateNow.toLocaleDateString()}</p>
        </div>
        <div className="content-logoBg">
          <div className="content-logoPj">
            <img
              src={logoPerfil}
              alt="Logo de background"
              className="logo-perfil"
            />
          </div>
        </div>
      </div>
      <Perfil />
      <Proyectos />
      <Contacto />
    </div>
  );
}
