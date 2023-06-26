import { FC, useState } from "react";
import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

type OfficeToolsProps = {
  setValidateImgs: any;
  validateImgs: any;
};

const OfficeTools: FC<OfficeToolsProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  const niveles = ["Basico", "Intermedio", "Avanzado"];
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  // const infoRadioIdiomas = [
  //   {
  //     programa: "Microsoft Word ",
  //     label: "(Google Docs)",
  //     select: [1, 2, 3],
  //   },
  //   {
  //     programa: "Microsoft Excel ",
  //     label: "(Google Sheets)",
  //     select: [22, 23, 24],
  //   },
  //   {
  //     programa: "Microsoft PowerPoint ",
  //     label: "(Google Slides)",
  //     select: [4, 5, 6],
  //   },
  //   {
  //     programa: "Correo electrónico ",
  //     label: "(Microsoft Outlook, Gmail, etc)",
  //     select: [7, 8, 9],
  //   },
  //   {
  //     programa: "Gestión de proyectos ",
  //     label: "(Trello, Asana, Jira, etc)",
  //     select: [10, 11, 12],
  //   },
  //   {
  //     programa: "Videoconferencia ",
  //     label: "(Zoom, Meet, Teams)",
  //     select: [13, 14, 15],
  //   },
  //   {
  //     programa: "Imágenes y gráficos ",
  //     label: "(Photoshop, Canva, etc)",
  //     select: [16, 17, 18],
  //   },
  //   {
  //     programa: "Chat GPT",
  //     select: [19, 20, 21],
  //   },
  // ];
  const ValdationRadio = (idioma: any, selectId: any) => {
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
    setValidateContinue(false);
  };
  return (
    <>
      <div>
        <Sidebar
          subTitle="¿Sabías que el 82% de las empresas considera el dominio de herramientas ofimáticas como un requisito fundamental al contratar nuevos empleados? Esto puede marcar la diferencia al buscar oportunidades laborales. No solo aumentarás tu eficiencia en el trabajo, sino que también demostrarás una capacidad para adaptarte al entorno laboral actual. "
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      <div style={{ width: "79rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <span className="textTitleComponent">Herramientas Ofimáticas</span>
        </div>
        <div>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                color: "white",
                fontFamily: "Montserrat-Light",
                fontSize: "20px",
              }}
            >
              Selecciona en qué nivel te encuentras de las siguientes
              herramientas
            </span>
          </div>
          <Card
            bodyStyle={{
              background: "#310161",
              padding: "15px 20px 20px 47px",
              borderRadius: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "162%",
                marginTop: "20px",
              }}
            >
              {niveles.map((item) => (
                <div style={{ marginRight: "10px" }}>
                  <span className="textItem">{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "15px" }}>
              {infoRadioIdiomas.map((idioma: any) => (
                <div className="containerIdiomaText">
                  <div style={{ width: "100%" }}>
                    <span className="idiomaText">{idioma.programa}</span>
                    <span
                      style={{ opacity: "0.8", fontSize: "15px" }}
                      className="idiomaText"
                    >
                      {idioma.label}
                    </span>
                  </div>
                  <div>
                    <div style={{ marginLeft: "5px", display: "flex" }}>
                      {idioma.select.map((selectId: any) => (
                        <div style={{ width: "80px" }}>
                          <Radio
                            key={selectId}
                            checked={selectedOptions.some(
                              (option: any) =>
                                option.idioma === idioma.programa &&
                                option.selectId === selectId
                            )}
                            onChange={() => {
                              ValdationRadio(idioma.programa, selectId);
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
          <div style={{ marginTop: "35px" }} className="containerSaveAction">
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
              // disabled={valuesRadioSelect !== 0 ? false : true}
              className="SaveInfo btn btn-primary"
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
              setValidateImgs([...validateImgs, "8"]);
              navigate("/perfiles/8");
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

        <div style={{ marginTop: "30px" }} className="containerExpContinue">
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default OfficeTools;
