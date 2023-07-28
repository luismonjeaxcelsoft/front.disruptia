
import "../styles/PerfilLogin.css";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";
import { SidebarEmployees } from "../PagesEmployees/SidebarEmployees";

const FinishRegister = () => {
  const navigate = useNavigate();

  return (
    <>
    <SidebarEmployees/>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "22%" }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ justifyContent: "center" }}>
          <div className="container-pregunta-idioma">
            <span className="text-pregunta-socioE">
              ¿Te encuentras en estado de embarazo o licencia de maternidad?
            </span>
            <div
              style={{
                marginLeft: "55px",
                marginTop: "2%",
                display: "flex",
              }}
            >
              <Radio>
                <span style={{ color: "white" }}>Sí</span>
              </Radio>
              <Radio>
                <span style={{ color: "white" }}>No</span>
              </Radio>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div className="container-pregunta-idioma">
          <span className="text-pregunta-socioE">¿Eres cabeza de hogar?</span>
          <div
            style={{
              marginLeft: "55px",
              marginTop: "2%",
              display: "flex",
              marginBottom: "2px",
            }}
          >
            <Radio>
              <span style={{ color: "white" }}>Sí</span>
            </Radio>
            <Radio>
              <span style={{ color: "white" }}>No</span>
            </Radio>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "52%",
            marginTop: "180px",
          }}
        >
          <button
            onClick={() => navigate("/")}
            className="button-perfile-finish"
          >
            <span
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: "20px",
                color: "#4D1AE8",
              }}
            >
              Registrarme
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FinishRegister;
