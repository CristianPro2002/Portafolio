import imgHtml from "../assets/img/iconos/html.png";
import imgJavascript from "../assets/img/iconos/javascript.png";
import imgPython from "../assets/img/iconos/python.png";
import imgReact from "../assets/img/iconos/react.png";
import imgAngular from "../assets/img/iconos/angular.png";
import imgNodejs from "../assets/img/iconos/nodejs.png";
import imgDjango from "../assets/img/iconos/django.png";
import imgGit from "../assets/img/iconos/git.png";
import imgStrapi from "../assets/img/iconos/strapi.png";
import imgMysql from "../assets/img/iconos/mysql.png";
import imgPostgresql from "../assets/img/iconos/postgresql.png";
import "../styles/perfil.css";

export default function Perfil() {
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
          <img src={imgHtml} alt="logo html" title="Html" />
          <img src={imgJavascript} alt="logo javascript" title="Javascript" />
          <img src={imgPython} alt="logo python" title="Python" />
          <img src={imgReact} alt="logo react" title="React" />
          <img src={imgAngular} alt="logo angular" title="Angular" />
          <img src={imgNodejs} alt="logo nodejs" title="Node js" />
          <img
            src={imgDjango}
            alt="logo django"
            title="Django y Django rest framework"
          />
          <details>
            <summary>Ver mas</summary>
            <img
              src={imgGit}
              alt="logo git"
              title="Git, Github, Bitbucket"
              className="img-git"
            />
            <img
              src={imgStrapi}
              alt="logo strapi"
              title="Strapi"
              className="img-strapi"
            />
          <img src={imgMysql} alt="logo mysql" title="MySql" />
          <img src={imgPostgresql} alt="logo postgresql" title="PostgreSql" />

          </details>
        </div>
      </div>
    </div>
  );
}
