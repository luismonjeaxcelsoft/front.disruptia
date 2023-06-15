import { FC, useState } from "react";
import { Radio } from "antd";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

type WorkingModalityProps = {
  setValidateImgs: any;
  validateImgs: any;
};

const WorkingModality: FC<WorkingModalityProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();
  const [valuesRadioSelect, setValuesRadioSelect] = useState<number>(0);
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const ValdationRadio = (e: any) => {
    setValuesRadioSelect(e.target.value);
    setValidateContinue(false);
  };
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
          <Radio.Group
            onChange={(e) => ValdationRadio(e)}
            value={valuesRadioSelect}
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "31px",
            }}
          >
            <Radio value="1">
              <span
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Light",
                }}
              >
                Remoto
              </span>
            </Radio>
            <Radio value="2">
              <span
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Light",
                }}
              >
                Hibrido
              </span>
            </Radio>
            <Radio value="3">
              <span
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Light",
                }}
              >
                Presencial
              </span>
            </Radio>
          </Radio.Group>
        </div>
        {!validateContinue && (
          <div style={{ marginTop: "90px" }} className="containerSaveAction">
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
              disabled={valuesRadioSelect !== 0 ? false : true}
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
