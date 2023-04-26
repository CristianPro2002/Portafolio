import { useRef, useState } from "react";
import "../styles/contacto.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

export default function Contacto() {
  const [spinner, setSpinner] = useState(false);

  const form = useRef();
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    setSpinner(true);
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        setSpinner(false);
        toast.success("Mensaje enviado correctamente!");
      },
      (error) => {
        setSpinner(false);
        toast.error("Error al enviar el mensaje!");
      }
    );

    form.current.reset();
  };

  return (
    <div id="contacto">
      <div
        className={
          spinner ? "content-contacto content-paddintop" : "content-contacto"
        }
      >
        <h2>Contactame!</h2>
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
          <div>
            {spinner ? (
              <>
                <Spinner />
              </>
            ) : null}
          </div>
          <div className="content-buttonUser">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
