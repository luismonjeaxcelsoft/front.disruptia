import "../styles/Sidebar.css";
import { useState } from "react";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "sidebar-open" : "sidebar"}>
      <div>
        {!isOpen && (
          <button className="buttonside" onClick={() => setIsOpen(!isOpen)}>
            <ArrowRightOutlined />
          </button>
        )}
        {isOpen && (
          <div className="sidebar-total">
            <div className="sidebar-menu">
              <div className="element">
                <h3>Crear mi Hoja de Vida</h3>
              </div>
              <div className="element">
                <button
                  className="buttonclose"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CloseOutlined />
                </button>
              </div>
            </div>
            <div>
              <h1 className="titulo">Hola Andrea</h1>
              <div className="con-fondo">
              <h1 className="titulo2">¡Es tu Oportunidad!</h1>
              </div>
              <p className="titulo3">
                Disruptia y Chat GPT, <br/>
                te ayudan a crear tu <br/>
                hoja de vida a un clic
              </p>
              <p className="titulo4">
                Hemos conectado el % del talento con <br/>
                la oferta laboral del país 
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
