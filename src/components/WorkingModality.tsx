import { FC, useState } from "react";
import { Radio } from "antd";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

type WorkingModalityProps = {
  setValidateImgs: any;
  validateImgs: any;
  setActiveTab:any
};

const WorkingModality: FC<WorkingModalityProps> = ({
  setValidateImgs,
  validateImgs,
  setActiveTab
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
          subTitle=""
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      <div style={{ width: "79rem", marginTop: "50px" }}>
        <div>
          <span style={{ color: "#F3CF46", fontSize: "25px" }}>
            ¿Qué modelo de trabajo prefieres?
          </span>
        </div>
        <div>
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
                  fontFamily: "Avenir, Medium",
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
                  fontFamily: "Avenir, Medium",
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
                  fontFamily: "Avenir, Medium",
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
              setActiveTab("9")
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
        <div style={{ marginTop: "120px" }} className="containerExpContinue">
          <img style={{ width: "100px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default WorkingModality;
