import { FC, useState, useEffect } from "react";
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

type WorkingModalityProps = {
  setValidateImgs: any;
  validateImgs: any;
};

type MODELOTRABAJO = {
  disrupterId: number;
  modelos: string[];
};

const WorkingModality: FC<WorkingModalityProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<MODELOTRABAJO[]>([]);
  const [validateContinue, setValidateContinue] = useState<boolean>(
    selectedOptions.length !== 0 ? false : true
  );
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
      disrupterId: 1,
      modelos: selectedOptions,
    };

    const res = await SaveModeloTrabajo(payload);
    if (res === "Modelo de trabajo guardado") {
      setValidateContinue(true);
    }
  };

  const getModelosBD = async () => {
    const res = await GetModelosTrabajoDisrupterId(1);
    if (res !== "No se encontraron idiomas para este disrupter") {
      setSelectedOptions(res.modelos);
    }
  };

  const getModelos = async () => {
    const res = await GetModelosTrabajo();
    setModelos(res);
  };

  useEffect(() => {
    getModelos();
    getModelosBD();
  }, []);

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
            onClick={() => {
              setValidateImgs([...validateImgs, "9"]);
              navigate("/perfiles/9");
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
        <div style={{ marginTop: "240px" }} className="containerExpContinue">
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default WorkingModality;
