import { useRef } from "react";
import "../styles/contacto.css";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a5iubid",
        "template_1ogw125",
        form.current,
        "7MIM-pU7BiIcdX34f"
      )
      .then(
        (result) => {
          console.log(result);
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.log(error);
          alert("Error al enviar el mensaje");
        }
      );

    form.current.reset();
  };

  return (
    <div id="contacto">
      <div className="content-contacto">
        <form ref={form} onSubmit={sendEmail}>
          <div className="content-infoUser">

          <div>
            <label>Usuario</label>
            <input type="text" name="user_name" />
          </div>
          <div>
            <label>Correo</label>
            <input type="email" name="user_email" />
          </div>
          <div>
            <label>Mensaje</label>
            <textarea name="message" />
          </div>
          <div>
            <label>Telefono</label>
            <input type="number" name="user_phone" />
          </div>
          </div>
          <div className="content-buttonUser">
          <button type="submit" >Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
