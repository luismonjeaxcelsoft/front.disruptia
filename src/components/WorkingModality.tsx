import { FC, useState, useEffect,useContext } from "react";
import { Checkbox } from "antd";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import "../styles/WorkingModality.css";
import {
  GetModelosTrabajo,
  GetModelosTrabajoDisrupterId,
  SaveModeloTrabajo,
} from "../services/ModeloTrabajoService";
import MyContext from "../context/MyContext";

const WorkingModality = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [idModelo, setIdModelo] = useState<number>(0);
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [modelos, setModelos] = useState<string[]>([]);

  const handleCheckboxChange = (option: any) => {
    setValidateContinue(false);
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const saveModelos = async () => {
    const payload = {
      id: idModelo,
      disrupterId: 1,
      modelos: selectedOptions,
    };

    const res = await SaveModeloTrabajo(payload);
    if (res === "Modelo de trabajo guardado") {
      setValidateContinue(true);
      getModelosBD();
    }
  };

  const getModelosBD = async () => {
    const res = await GetModelosTrabajoDisrupterId(1);
    if (typeof res !== "string") {
      setSelectedOptions(res.modelos);
      setIdModelo(res.id);
      setValidateContinue(true);
    } else {
      setValidateContinue(false);
    }
  };

  const getModelos = async () => {
    const res = await GetModelosTrabajo();
    setModelos(res);
  };

  const buttonSiguiente = () => {
    myMethod();
    if (pasos.length !== 12) {
      navigate("/perfiles/9");
    } else {
      setActualizarPreview((prev: any) => !prev)
      navigate("/perfiles/13");
    }
  };

  useEffect(() => {
    getModelos();
    getModelosBD();
  }, []);
  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { myMethod, pasos, setActualizarPreview } = context;


  return (
    <>
      <div>
        <Sidebar
          subTitle="Definiciones que debes conocer.
          Trabajo Remoto: Realizar tareas laborales desde cualquier lugar.
          Trabajo Presencial: Realizar tareas laborales en un lugar de trabajo específico.
          Trabajo Híbrido: Combinación de trabajo remoto y presencial.
          "
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      <div style={{ width: "79rem", marginTop: "50px" }}>
        <div>
          <span
            style={{
              color: "#F3CF46",
              fontSize: "25px",
              fontFamily: "Montserrat-Bold",
            }}
          >
            ¿Qué modelo de trabajo prefieres?
          </span>
        </div>
        <div style={{ marginTop: "25px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "31px",
              justifyContent: "center",
            }}
          >
            {modelos.map((modelo: string) => (
              <Checkbox
                key={modelo}
                className="checkbox-redondo"
                checked={selectedOptions.includes(modelo)}
                onChange={() => handleCheckboxChange(modelo)}
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Light",
                }}
              >
                {modelo}
              </Checkbox>
            ))}
          </div>
        </div>
        {!validateContinue && (
          <div style={{ marginTop: "90px" }} className="containerSaveAction">
            <button
              onClick={() => {
                saveModelos();
              }}
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              className="SaveInfo btn btn-primary"
              disabled={selectedOptions.length !== 0 ? false : true}
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
            onClick={() => buttonSiguiente()}
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
        <div style={{ marginTop: "240px" }} className="containerExpContinue">
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default WorkingModality;
