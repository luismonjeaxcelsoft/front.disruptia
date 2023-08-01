import "../styles/PerfilLogin.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Radio } from "antd";
import { SidebarEmployees } from "../PagesEmployees/SidebarEmployees";
import CustomSelect from "./CustomSelect";
import { GetDiscapacidad } from "../services/PreguntasRegistroService";

const FinishRegister = ({ setRequest, request, pasoRegistro }: any) => {
  const navigate = useNavigate();
  const [discapacidad, setDiscapacidad] = useState<any[]>([]);

  const getDiscapacidad = async () => {
    const res = await GetDiscapacidad();
    if (typeof res !== "string") {
      const info = res.map((item: string) => ({
        label: item,
        value: item,
      }));

      setDiscapacidad(info);
    }
  };

  useEffect(() => {
    getDiscapacidad();
  }, [pasoRegistro]);
  return (
    <>
      {/* <SidebarEmployees/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "80px",
          width: "600px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿Hablas algún idioma o dialecto regional además del español?
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Radio.Group>
            <div style={{ marginTop: "10px", display: "flex" }}>
              <div>
                <Radio></Radio>
                <span className="text-pregunta">Sí</span>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Radio></Radio>
                <span className="text-pregunta">No</span>
              </div>
            </div>
          </Radio.Group>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta-bold">
            ¿Cuál(es)? ___________________________________________
          </span>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿En qué tipo de área has pasado la mayor parte de tu vida?
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Radio.Group>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <Radio></Radio>
                <span className="text-pregunta">Área Urbana</span>
              </div>
              <div>
                <Radio></Radio>
                <span className="text-pregunta">Área Rural</span>
              </div>
              <div>
                <Radio></Radio>
                <span className="text-pregunta">Ambas</span>
              </div>
            </div>
          </Radio.Group>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">¿Eres cabeza de hogar?</span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Radio.Group>
            <div style={{ marginTop: "10px", display: "flex" }}>
              <div>
                <Radio></Radio>
                <span className="text-pregunta">Sí</span>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Radio></Radio>
                <span className="text-pregunta">No</span>
              </div>
            </div>
          </Radio.Group>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿Tienes algún tipo de discapacidad?
          </span>
        </div>
        <div style={{ justifyContent: "center" }}>
          <div style={{ marginTop: "0px", display: "flex", marginLeft: "0px" }}>
            <CustomSelect
              options={discapacidad}
              placeHolder="Indigena"
              name="discapacidad"
              styleLabel="label-register-nacionalidad"
            />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿Cuál es tu nivel socio-económico?
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
              <button className="button-item"> 1 </button>
              <button style={{marginLeft:"16.3px"}} className="button-item"> 2 </button>
              <button style={{marginLeft:"16.3px"}} className="button-item"> 3 </button>
              <button style={{marginLeft:"16.3px"}} className="button-item"> 4 </button>
              <button style={{marginLeft:"16.3px"}} className="button-item"> 5 </button>
              <button style={{marginLeft:"16.3px"}} className="button-item"> 6 </button>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "52%",
            marginTop: "10px",
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
