import { UserOutlined } from "@ant-design/icons";
import { Sidebar } from "../components/Sidebar";
import CustomSelect from "./CustomSelect";
import "../styles/PerfilLogin.css";
import { useNavigate } from "react-router-dom";
import { Switch } from "antd";

const FinishRegister = () => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar
        subTitle="Construcción Cultural"
        smallTitle=""
        backColor={false}
        img={false}
        video={false}
        subText="Instrucciones para diligenciar los campos de la derecha"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="container-text-perfil">
          <span className="title-perfil-page">Mi perfil</span>
          <div style={{ marginLeft: "5%" }}>
            <UserOutlined style={{ scale: "5", color: "#FFFFFF" }} />
          </div>
        </div>
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
                marginLeft: "70px",
                marginTop: "2%",
                display: "flex",

              }}
            >
              <Switch
                checkedChildren="SI"
                unCheckedChildren="NO"
                style={{ width: "60px" }}
              />
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
              marginLeft: "70px",
              marginTop: "2%",
              display: "flex",
              marginBottom: "2px",
            }}
          >
            <Switch
              checkedChildren="SI"
              unCheckedChildren="NO"
              style={{ width: "60px" }}
            />
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              marginLeft: "250px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <CustomSelect
              labelName="¿Cual de las siguientes opciones representa mejor tu orientación sexual?"
              placeHolder="Bisexual"
              name="etnia"
              classStyle="select-prlofile-page"
              styleImg="imgCustom-register-nacio"
              styleLabel="label-register-nacionalidad"
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginLeft: "430px", marginBottom: "20px" }}>
          <CustomSelect
            labelName="¿Cuál de las siguientes categorías incluye tu edad?"
            placeHolder="17 años o menor"
            name="etnia"
            classStyle="select-prlofile-page"
            styleImg="imgCustom-register-nacio"
            styleLabel="label-register-nacionalidad"
          />
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "36%",
            marginTop: "10px",
          }}
        >
          <button
            onClick={() => navigate("/registro")}
            className="button-perfile-finish"
          >
            <span
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: "20px",
                color: "#4D1AE8",
              }}
            >
              Finalizar Registro
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FinishRegister;
