import { Sidebar } from "../components/Sidebar";
import CustomSelect from "./CustomSelect";
import "../styles/PerfilLogin.css";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";

const PerfilLogin = () => {
  const navigate = useNavigate();
  const Nacionalidad = [
    {
      label: "Extranjero",
      value: "1",
    },
    {
      label: "Colombiano",
      value: "2",
    },
  ];
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
      <div style={{ display: "flex", flexDirection: "column",marginLeft:"25%" }}>
       
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ justifyContent: "center" }}>
          <div
            style={{ marginTop: "20px", display: "flex", marginLeft: "310px" }}
          >
            <CustomSelect
              options={Nacionalidad}
              labelName="¿Te reconoces con algún origen étnico?"
              placeHolder="Indigena"
              name="etnia"
              classStyle="select-prlofile-page"
              styleImg="imgCustom-register-nacio"
              styleLabel="label-register-nacionalidad"
            />
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "50px",
          }}
        >
          <div className="container-pregunta-idioma">
            <div style={{ display: "flex", alignItems: "center" }}>
              <CustomSelect
                labelName="¿Cual es tu genero?"
                placeHolder="Mujer"
                name="etnia"
                classStyle="select-prlofile-page"
                styleImg="imgCustom-register-nacio"
                styleLabel="label-register-nacionalidad"
              />
            </div>
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
              marginLeft: "314px",
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
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "1%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div className="container-pregunta-idioma">
          <span className="text-pregunta-socioE-buttom">
            ¿Te consideras transgénero?
          </span>
          <div
            style={{
              marginLeft: "55px",
              marginTop: "2%",
              display: "flex",
              marginBottom: "2%",
            }}
          >
           <Radio><span style={{color:"white"}}>Sí</span></Radio>
            <Radio><span style={{color:"white"}}>No</span></Radio>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginLeft: "317px", marginBottom: "20px" }}>
          <CustomSelect
            labelName="¿Actualmente, tienes alguna de estas condiciones de salud?"
            placeHolder="Intelectual"
            name="etnia"
            classStyle="select-prlofile-page"
            styleImg="imgCustom-register-nacio"
            styleLabel="label-register-nacionalidad"
          />
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "55%",
            marginTop: "10px",
          }}
        >
          <button
            onClick={() => navigate("/finalizar-registro")}
            className="button-perfile-finish"
          >
            <span
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: "20px",
                color: "#4D1AE8",
              }}
            >
              Continuar
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PerfilLogin;
