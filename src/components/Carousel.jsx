import React from "react";
import { effectView } from "../utils/interception";

export default function Carousel() {

  React.useEffect(() => {
    effectView();
  }, []);

  return (
    <>
      <div id="efecto" className="content-generalCard">
        <h3>Jesucristo Reina</h3>
      </div>
      <div id="efecto2" className="content-generalCard">
        <h3>Jesucristo Reina</h3>
      </div>
      <div id="efecto3" className="content-generalCard">
        <h3>Jesucristo Reina</h3>
      </div>
    </>
  );
}
