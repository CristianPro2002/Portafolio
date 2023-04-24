import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { effectView } from "../utils/interception";
import { calculateWidth } from "../utils/calculateWidth";
import useScreenSize from "../utils/useScreenSize";

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

  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={2}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      className="mySwiper"
      id="valueHandle"
    >
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard" id="efectoPrueba1">
            <h3>Jesucristo Reina1</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard" id="efectoPrueba2">
            <h3>Jesucristo Reina2</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard" id="efectoPrueba3">
            <h3>Jesucristo Reina3</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content-sliderCard" id="efectoPrueba4">
            <h3>Jesucristo Reina4</h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
