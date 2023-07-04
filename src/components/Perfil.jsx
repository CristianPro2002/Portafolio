import { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoPython,
  BiLogoReact,
  BiLogoAngular,
  BiLogoNodejs,
  BiLogoDjango,
  BiLogoFlask,
  BiLogoGit,
  BiLogoPostgresql,
  BiLogoCss3,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiStrapi, SiStyledcomponents } from "react-icons/si";
import "../styles/perfil.css";

export default function Perfil() {
  const [vermas, setVermas] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
      <div className="content-dataPj">
        <h1>Perfil</h1>
        <p>
          Soy un joven paciente, tranquilo, carismatico, autodidacta,
          responsable y que se esfuerza para adquirir conocimiento nuevo cada
          dia.
        </p>
        <p>
          Mi principal meta es llegar a ser un profesional comprometido con mi
          trabajo y lograr demostrar lo aprendido en cada momento.
        </p>
        <p>Estas son las tecnologias que manejo actualmente: </p>
        <div className="content-tecno">
          <div className="content-gridtecno">
            <div>
              <AiFillHtml5 className="icon" />
              <span>Html</span>
            </div>
            <div>
              <RiJavascriptFill className="icon" />
              <span>Javascript</span>
            </div>
            <div>
              <BiLogoPython className="icon" />
              <span>Python</span>
            </div>
            <div>
              <BiLogoReact className="icon" />
              <span>React</span>
            </div>
            <div>
              <BiLogoAngular className="icon" />
              <span>Angular</span>
            </div>
            <div>
              <BiLogoNodejs className="icon" />
              <span>Nodejs</span>
            </div>
            <div>
              <BiLogoDjango className="icon" />
              <span>Django</span>
            </div>
            <div>
              <BiLogoFlask className="icon" />
              <span>Flask</span>
            </div>
          </div>
          <button onClick={() => setVermas(!vermas)} className="btn-vermas">
            {!vermas ? "Ver mas" : "Ver menos"}
          </button>
          <div className={!vermas ? "hiddenVermas" : "visibleVermas"}>
            <div className="content-gridtecno__Vermas">
              <div>
                <BiLogoGit className="icon" />
                <span>Git</span>
              </div>
              <div>
                <SiStrapi className="icon" />
                <span>Strapi</span>
              </div>
              <div>
                <DiMysql className="icon" />
                <span>MySql</span>
              </div>
              <div>
                <BiLogoPostgresql className="icon" />
                <span>PosgreSQL</span>
              </div>

              <div>
                <BiLogoCss3 className="icon" />
                <span>Css</span>
              </div>
              <div>
                <SiStyledcomponents className="icon" />
                <span>Styled Components</span>
              </div>
              <div>
                <BiLogoTailwindCss className="icon" />
                <span>Tailwind Css</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
