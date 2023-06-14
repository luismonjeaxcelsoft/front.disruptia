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
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const niveles = ["Ninguno","Basico", "Intermedio", "Avanzado", "Nativo"];
  const infoRadioIdiomas = [
    {
      idioma: "Español",
      select: [1, 2, 3, 4,5],
    },
    {
      idioma: "Ingles",
      select: [6, 7, 8, 9,10],
    },
    {
      idioma: "Frances",
      select: [11, 12, 13, 14,15],
    },
    {
      idioma: "Portugués",
      select: [16, 17, 18, 19,20],
    },
    {
      idioma: "Italiano",
      select: [21, 22, 23, 24,25],
    },
  ];
  const handleOptionChange = (idioma: any, selectId: any) => {
    const updatedOptions = [...selectedOptions];
    const index = updatedOptions.findIndex(
      (option) => option.idioma === idioma
    );

    if (index === -1) {
      updatedOptions.push({ idioma, selectId });
    } else {
      if (updatedOptions[index].selectId === selectId) {
        updatedOptions[index].selectId = null;
      } else {
        updatedOptions[index].selectId = selectId;
      }
    }

    setSelectedOptions(updatedOptions);
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
      <div style={{width: "750px"}}>
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
                <div style={{ marginRight: "15px" }}>
                  <span className="textItem">{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "15px" }}>
              {infoRadioIdiomas.map((info) => (
                <div className="containerIdiomaText">
                  <div style={{ width: "1%" }}>
                    <span className="idiomaText">{info.idioma}</span>
                  </div>
                  <div>
                    <div style={{ marginLeft: "300px", display: "flex" }}>
                      {info.select.map((selectId: any) => (
                        <div style={{ width: "85px" }}>
                          <Radio
                            key={selectId}
                            checked={selectedOptions.some(
                              (option: any) =>
                                option.idioma === info.idioma &&
                                option.selectId === selectId
                            )}
                            onChange={() => {
                              handleOptionChange(info.idioma, selectId);
                            }}
                          ></Radio>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        {!validateContinue && (
          <div style={{ marginTop: "45px" }} className="containerSaveAction">
            <button
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              className="SaveInfo btn btn-primary"
              disabled={selectedOptions.length > 0 ? false : true}
              onClick={() => setValidateContinue(true)}
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
              setValidateImgs([...validateImgs, "7"]);
              navigate("/perfiles/7");
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
        <div className="containerExpContinue">
          <img style={{ width: "153px",height:"41px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default InformationLenguajes;
