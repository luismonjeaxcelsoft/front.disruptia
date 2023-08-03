import CustomSelect from "./CustomSelect";
import "../styles/PerfilLogin.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Radio } from "antd";
import { SidebarEmployees } from "../PagesEmployees/SidebarEmployees";
import {
  GetComunidadCulturalEtnica,
  GetIdentidadGenero,
  GetOrientacionSexual,
  IDENTIDAD_GENERO,
} from "../services/PreguntasRegistroService";
import ArrowBack from "../assets/images/LogIn_Arrow-50.png";
import ArrowNext from "../assets/images/LogIn_Arrow-49.png";

const PerfilLogin = ({
  setRequest,
  pasoRegistro,
  setPasoRegistro,
  request,
}: any) => {
  const [identidadGenero, setIdentidadGenero] = useState<IDENTIDAD_GENERO[]>(
    []
  );
  const [orientacionSexual, setOrientacionSexual] = useState<any[]>([]);
  const [comunidadCulturalEtnica, setComunidadCulturalEtnica] = useState<any[]>(
    []
  );
  const getIdentidadGenero = async () => {
    const res = await GetIdentidadGenero();
    if (typeof res !== "string") {
      setIdentidadGenero(res);
    }
  };
  const getOrientacionSexual = async () => {
    const res = await GetOrientacionSexual();
    if (typeof res !== "string") {
      const info = res.map((item: string) => ({
        label: item,
        value: item,
      }));

      setOrientacionSexual(info);
    }
  };

  const getComunidadCulturalEtnica = async () => {
    const res = await GetComunidadCulturalEtnica();
    if (typeof res !== "string") {
      const info = res.map((item: string) => ({
        label: item,
        value: item,
      }));
      setComunidadCulturalEtnica(info);
    }
  };

  const onContinuar = () => {
    setPasoRegistro(3);
  };

  const onBack = () => {

    setPasoRegistro(1);
  };

  const handleRadioChange = (e: any) => {
    const newRequest = { ...request };
    newRequest.preguntasRegistro.identidadGenero = e.target.value;
    setRequest(newRequest);
    // setPayload({ ...payload, identidadGenero: e.target.value });
  };

  useEffect(() => {
    getIdentidadGenero();
    getOrientacionSexual();
    getComunidadCulturalEtnica();
  }, [pasoRegistro]);

  return (
    <>
      {/* <SidebarEmployees/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "650px",
          marginTop: "20px",
          width: "600px",
          marginBottom: "50px",
        }}
      >
        <div style={{display: "flex", flexDirection: "row-reverse"}}>
            <img
              onClick={() => onContinuar()}
              src={ArrowNext}
              style={{ width: "26px", cursor: "pointer" }}
            ></img>
            <img
              onClick={() => onBack()}
              src={ArrowBack}
              style={{ width: "26px", cursor: "pointer" }}
            ></img>
          </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿Cuál es tu identidad de género?
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Radio.Group
            onChange={handleRadioChange}
            value={request.preguntasRegistro.identidadGenero}
          >
            {identidadGenero.map((item: any) => (
              <div key={item} style={{ marginTop: "10px", display: "flex" }}>
                <Radio
                  style={{ color: "white" }}
                  value={item.descripcion}
                  key={item.descripcion}
                ></Radio>
                <div>
                  <span className="text-pregunta-bold">
                    {item.descripcion}{" "}
                    <span className="text-pregunta">
                      {"("}
                      {item.caracteristica} {")"}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </Radio.Group>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">¿Cuál es tu orientación sexual?</span>
        </div>
        <div style={{ justifyContent: "center" }}>
          <div style={{ marginTop: "0px", display: "flex", marginLeft: "0px" }}>
            <CustomSelect
              options={orientacionSexual}
              placeHolder="Indigena"
              name="orientacionSexual"
              styleLabel="label-register-nacionalidad"
              info="preguntasRegistro"
              request={request}
              setRequest={setRequest}
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
            ¿Te identificas con alguna comunidad cultural o étnica en
            particular?
          </span>
        </div>
        <div style={{ justifyContent: "center" }}>
          <div style={{ marginTop: "0px", display: "flex", marginLeft: "0px" }}>
            <CustomSelect
              options={comunidadCulturalEtnica}
              placeHolder="Indigena"
              name="comunidadCulturalEtnica"
              styleLabel="label-register-nacionalidad"
              info="preguntasRegistro"
              request={request}
              setRequest={setRequest}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "52%",
            marginTop: "10px",
            marginBottom:"20px"
          }}
        >
          <div>
            <img
              onClick={() => onBack()}
              src={ArrowBack}
              style={{ width: "22px", cursor: "pointer" }}
            ></img>
            <img
              onClick={() => onContinuar()}
              src={ArrowNext}
              style={{ width: "22px", cursor: "pointer" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilLogin;
