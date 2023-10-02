import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Logo from "../../public/Logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content-divFooter">
        <div className="content-infoFooter"></div>
      </div>
      <div className="content-dataFooter">
        <div className="content-dataGeneral">
          <h4>Software Developer</h4>
          <p>Programador apasionado y dedicado a su trabajo</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h4>Contacto</h4>
          <div className="content-iconsFooter">
            <a
              href="https://github.com/CristianPro2002"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="iconFooter" />
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-andres-casta%C3%B1o-salas-580608221/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="iconFooter" />
            </a>
            <a
              href="https://wa.me/+573172527140"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className="iconFooter" />
            </a>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h4>
            Todos los derechos reservados &copy; {new Date().getFullYear()}
          </h4>
          <img src={Logo} alt="Logo" className="logoFooter" />
        </div>
      </div>
      <div>
        <p className="developer">Desarrollado por Cristian Castaño</p>
      </div>
    </footer>
  );
}
