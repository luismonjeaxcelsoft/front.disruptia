import { useState } from "react";
import { Sidebar } from "./Sidebar";
import "../styles/Perfil.css";
import { Input } from "antd";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";

const Perfil = ({ setValidateImgs, validateImgs }: any) => {
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [validationGpt, setValidationGpt] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Sidebar
          title=""
          smallTitle="Crear Hoja de vida"
          subTitle=""
          backColor={false}
          img={false}
          video={true}
        />
      </div>
      <div style={{ marginBottom: "15px",marginTop:"40px" }}>
        <span className="titlePerfil">Cuéntanos ¿Cuál es tu perfil?</span>
      </div>
      <div>
        <div className="containerTextPerfil">
          <Input.TextArea
            style={{
              background: "#613C86",
              color: "white",
              opacity: "0.75",
              fontSize: "20px",
              fontFamily: "Montserrat, Medium",
              borderRadius: "25px",
              border: "none",
            }}
          ></Input.TextArea>
        </div>
        <div
          style={{ display: "flex", marginTop: "15px", justifyContent: "end" }}
        >
          <button onClick={() => setValidationGpt(true)} className="buttonGpt">
            <span className="textButtonGpt">Validar con ChatGPT</span>
          </button>
        </div>
        {validationGpt && (
          <>
            <div style={{ marginBottom: "15px" }}>
              <span className="titlePerfil">Perfil ajustado con ChatGPT</span>
            </div>
            <div className="containerTextPerfil">
              <Input.TextArea
                style={{
                  background: "#613C86",
                  color: "white",
                  opacity: "0.75",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Light",
                  borderRadius: "25px",
                  border: "none",
                }}
              ></Input.TextArea>
            </div>
            <div
              style={{
                display: "grid",
                marginTop: "15px",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              <button className="buttonGptValidation">
                <span className="textButtonGptValidation">
                  Dejar texto de ChatGPT
                </span>
              </button>
              <button className="buttonGptValidation">
                <span className="textButtonGptValidation">
                  Editar texto de ChatGPT
                </span>
              </button>
              <button
                onClick={() => setValidationGpt(false)}
                className="buttonGptValidation"
              >
                <span className="textButtonGptValidation">
                  Omitir perfil ChatGPT
                </span>
              </button>
            </div>
          </>
        )}
        {!validateContinue && (
          <div style={{ marginTop: "35px" }} className="containerSaveAction">
            <button
              onClick={() => {
                setValidateContinue(true);
              }}
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              className="SaveInfo btn btn-primary"
            >
              Guardar
            </button>
          </div>
        )}
        <div className="containerSelect">
          <button
            className={
              validateContinue ? "buttonContinueSelect" : "ContainerDisabled"
            }
            onClick={() => {
              setValidateImgs([...validateImgs, "12"]);
              navigate("/perfiles/12");
            }}
            disabled={!validateContinue ? true : false}
          >
            <p
              className={
                !validateContinue ? "textDisabled" : "textSiguienteSelect"
              }
            >
              Siguiente
            </p>
          </button>
        </div>

        <div style={{ marginTop: "30px" }} className="containerExpContinue">
          <img style={{ width: "153px",height: "41px"}} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default Perfil;
