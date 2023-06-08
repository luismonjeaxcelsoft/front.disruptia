import { FC, useState } from "react";
import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

type InformationLenguajesProps = {
  setValidateImgs: any;
  validateImgs: any;
};

const InformationLenguajes: FC<InformationLenguajesProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();
  const [valuesRadioSelect, setValuesRadioSelect] = useState<number>(0);
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const niveles = ["Basico", "Intermedio", "Avanzado", "Nativo"];
  const infoRadioIdiomas = [
    {
      idioma: "Español",
      select: [1, 2, 3, 4],
    },
    {
      idioma: "Ingles",
      select: [5, 6, 7, 8],
    },
    {
      idioma: "Frances",
      select: [9, 10, 11, 12],
    },
    {
      idioma: "Portugués",
      select: [13, 14, 15, 16],
    },
    {
      idioma: "Italiano",
      select: [17, 18, 19, 20],
    },
  ];
  const ValdationRadio = (e: any) => {
    setValuesRadioSelect(e.target.value);
    setValidateContinue(false)
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
    <div style={{ width: "79rem" }}>
      <div className="containerTextComponent">
        <span className="textTitleComponent">Manejo de Idiomas</span>
        <span className="textSubtitleComponent">
          Selecciona el nivel de Idiomas con el que cuentas
        </span>
      </div>
      <div>
        <Card
          bodyStyle={{
            background: "#310161",
            padding: "35px 20px 20px 47px",
            borderRadius: "25px",
          }}
        >
          <div className="containerLevels">
            {niveles.map((item) => (
              <div style={{ marginRight: "10px" }}>
                <span className="textItem">{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "15px" }}>
            {infoRadioIdiomas.map((idioma) => (
              <div className="containerIdiomaText">
                <div style={{ width: "10%" }}>
                  <span className="idiomaText">{idioma.idioma}</span>
                </div>
                <div>
                  <div style={{ marginLeft: "300px", display: "flex" }}>
                    {idioma.select.map((item) => (
                      <div style={{ width: "60px" }}>
                        <Radio.Group value={valuesRadioSelect}>
                          <Radio
                            value={item}
                            onChange={(e) => ValdationRadio(e)}
                          ></Radio>
                        </Radio.Group>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
     {
      !validateContinue &&  <div style={{ marginTop: "45px" }} className="containerSaveAction">
      <button
        style={{
          width: "165px",
          height: "47px",
          fontSize: "18px",
          fontFamily: "Montserrat-Bold",
        }}
        className="SaveInfo btn btn-primary"
        disabled={valuesRadioSelect !== 0 ? false : true}
        onClick={() => setValidateContinue(true)}
      >
        Guardar
      </button>
    </div>
     }
      <div className="containerSelect">
        <button
          className={validateContinue ? "buttonContinueSelect" : "ContainerDisabled"}
          onClick={() => {
            setValidateImgs([...validateImgs, "7"]);
            navigate("/perfiles/7");
          }}
          disabled={!validateContinue ? true : false}
        >
          <p className={!validateContinue ? "textDisabled" : "textSiguienteSelect"}>Siguiente</p>
        </button>
      </div>
      <div className="containerExpContinue">
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
   </>
  );
};

export default InformationLenguajes;
