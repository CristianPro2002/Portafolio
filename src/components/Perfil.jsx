import { useState } from "react";
import imgHtml from "../assets/img/iconos/html.png";
import imgJavascript from "../assets/img/iconos/javascript.png";
import imgPython from "../assets/img/iconos/python.png";
import imgReact from "../assets/img/iconos/react.png";
import imgAngular from "../assets/img/iconos/angular.png";
import imgNodejs from "../assets/img/iconos/nodejs.png";
import imgDjango from "../assets/img/iconos/django.png";
import imgFlask from "../assets/img/iconos/flask.png";
import imgGit from "../assets/img/iconos/git.png";
import imgStrapi from "../assets/img/iconos/strapi.png";
import imgMysql from "../assets/img/iconos/mysql.png";
import imgPostgresql from "../assets/img/iconos/postgresql.png";
import imgCss from "../assets/img/iconos/css.png";
import imgStyledComponents from "../assets/img/iconos/styledComponents.png";
import imgTailwindcss from "../assets/img/iconos/tailwindcss.png";
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
              <img src={imgHtml} alt="logo html" title="Html" />
              <span>Html</span>
            </div>
            <div>
              <img
                src={imgJavascript}
                alt="logo javascript"
                title="Javascript"
              />
              <span>Javascript</span>
            </div>
            <div>
              <img src={imgPython} alt="logo python" title="Python" />
              <span>Python</span>
            </div>
            <div>
              <img src={imgReact} alt="logo react" title="React" />
              <span>React</span>
            </div>
            <div>
              <img src={imgAngular} alt="logo angular" title="Angular" />
              <span>Angular</span>
            </div>
            <div>
              <img src={imgNodejs} alt="logo nodejs" title="Node js" />
              <span>Nodejs</span>
            </div>
            <div>
              <img
                src={imgDjango}
                alt="logo django"
                title="Django y Django rest framework"
              />
              <span>Django</span>
            </div>
            <div>
              <img src={imgFlask} alt="logo flask" title="Flask" />
              <span>Flask</span>
            </div>
          </div>
          <button onClick={() => setVermas(!vermas)} className="btn-vermas">
            Ver más
          </button>
          <div className={!vermas ? "hiddenVermas" : ""}>
            <div className="content-gridtecno__Vermas">
              <div>
                <img
                  src={imgGit}
                  alt="logo git"
                  title="Git, Github, Bitbucket"
                  className="img-git"
                />
                <span>Git</span>
              </div>
              <div>
                <img
                  src={imgStrapi}
                  alt="logo strapi"
                  title="Strapi"
                  className="img-strapi"
                />
                <span>Strapi</span>
              </div>
              <div>
                <img src={imgMysql} alt="logo mysql" title="MySql" />
                <span>MySql</span>
              </div>
              <div>
                <img
                  src={imgPostgresql}
                  alt="logo postgresql"
                  title="PostgreSql"
                />
                <span>PosgreSQL</span>
              </div>

              <div>
                <img src={imgCss} alt="logo css" title="Css" />
                <span>Css</span>
              </div>
              <div>
                <img
                  src={imgStyledComponents}
                  alt="logo styled-components"
                  title="Styled components"
                />
                <span>Styled Components</span>
              </div>
              <div>
                <img
                  src={imgTailwindcss}
                  alt="logo tailwind css"
                  title="Tailwind css"
                  className="img-tailwind"
                />
                <span>Tailwind Css</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
