import { FC, useEffect, useState } from "react";
import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import {
  GetIdiomas,
  GetIdiomasDisrupterId,
  SaveIdiomas,
} from "../services/IdiomasService";

type InformationLenguajesProps = {
  setValidateImgs: any;
  validateImgs: any;
};

type IDIOMA = {
  idioma: string;
  nivel: string;
};

const InformationLenguajes: FC<InformationLenguajesProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<IDIOMA[]>([]);
  const [validateContinue, setValidateContinue] = useState<boolean>(
    selectedOptions.length === 5 ? false : true
  );
  const [idiomas, setIdiomas] = useState<string[]>([]);

  const niveles = ["Ninguno", "Basico", "Intermedio", "Avanzado", "Nativo"];

  const infoRadioIdiomas = async () => {
    const res = await GetIdiomas();
    setIdiomas(res);
  };

  const infoRadioIdiomasBD = async () => {
    const res = await GetIdiomasDisrupterId(1);
    if (res !== "No se encontraron idiomas para este disrupter") {
      setSelectedOptions(res.idiomas);
    }
  };

  const handleRadioChange = (idioma: string, nivel: string) => {
    setValidateContinue(false);

    const updateArray = [...selectedOptions];

    const exist = updateArray.findIndex((item: any) => item.idioma === idioma);

    if (exist !== -1) {
      updateArray[exist].nivel = nivel;
    } else {
      const newItem = {
        idioma: idioma,
        nivel: nivel,
      };
      updateArray.push(newItem);
    }

    setSelectedOptions(updateArray);
  };

  const saveIdiomas = async () => {
    const payload = {
      disrupterId: 1,
      idiomas: selectedOptions,
    };

    const res = await SaveIdiomas(payload);

    if (res === "Idiomas guardados") {
      setValidateContinue(true);
    }
  };

  useEffect(() => {
    infoRadioIdiomas();
    infoRadioIdiomasBD();
  }, []);

  return (
    <>
      <div>
        <Sidebar
          subTitle="Sabías que las personas que hablan más de un idioma tienen hasta un 15% más de probabilidades de conseguir empleo en comparación con aquellas que solo hablan un idioma. Además, los hablantes multilingües tienden a ganar hasta un 20% más en salarios."
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      <div style={{ width: "750px" }}>
        <div className="containerTextComponent">
          <span className="textTitleComponent">Manejo de Idiomas</span>
          <span className="textSubtitleComponent">
            Selecciona el nivel que dominas para cada idioma.
          </span>
        </div>

        <Card
          bodyStyle={{
            background: "#310161",
            padding: "35px 20px 20px 47px",
            borderRadius: "25px",
          }}
        >
          <div className="containerLevels">
            {niveles.map((item) => (
              <div style={{ marginRight: "15px" }} key={item}>
                <span className="textItem">{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "15px" }}>
            {idiomas.map((info) => (
              <div className="containerIdiomaText" key={info}>
                <div style={{ width: "1%" }}>
                  <span className="idiomaText">
                    {decodeURIComponent(escape(info))}
                  </span>
                </div>
                <div>
                  <div style={{ marginLeft: "300px", display: "flex" }}>
                    <Radio.Group
                      onChange={(e) =>
                        handleRadioChange(
                          decodeURIComponent(escape(info)),
                          e.target.value
                        )
                      }
                      value={
                        selectedOptions.find(
                          (item) =>
                            item.idioma === decodeURIComponent(escape(info))
                        )?.nivel || null
                      }
                    >
                      <div style={{ display: "flex" }}>
                        {niveles.map((item: string) => (
                          <div style={{ width: "85px" }} key={item}>
                            <Radio key={item} value={item}></Radio>
                          </div>
                        ))}
                      </div>
                    </Radio.Group>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

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
              disabled={selectedOptions.length === 5 ? false : true}
              onClick={() => saveIdiomas()}
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
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default InformationLenguajes;
