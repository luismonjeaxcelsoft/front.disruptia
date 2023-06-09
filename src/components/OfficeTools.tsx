import { FC, useState } from "react";
import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

type OfficeToolsProps = {
  setValidateImgs: any;
  validateImgs: any;
  setActiveTab:any
};

const OfficeTools: FC<OfficeToolsProps> = ({
  setValidateImgs,
  validateImgs,
  setActiveTab
}) => {
  const navigate = useNavigate();
  const niveles = ["Basico", "Intermedio", "Avanzado"];
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [valuesRadioSelect, setValuesRadioSelect] = useState<number>(0);
  const infoRadioIdiomas = [
    {
      programa: "Microsoft Word ",
      label: "(Google Docs)",
      select: [1, 2, 3],
    },
    {
      programa: "Microsoft Excel ",
      label: "(Google Sheets)",
      select: [22, 23, 24],
    },
    {
      programa: "Microsoft PowerPoint ",
      label: "(Google Slides)",
      select: [4, 5, 6],
    },
    {
      programa: "Correo electrónico ",
      label: "(Microsoft Outlook, Gmail, etc)",
      select: [7, 8, 9],
    },
    {
      programa: "Gestión de proyectos ",
      label: "(Trello, Asana, Jira, etc)",
      select: [10, 11, 12],
    },
    {
      programa: "Videoconferencia ",
      label: "(Zoom, Meet, Teams)",
      select: [13, 14, 15],
    },
    {
      programa: "Imágenes y gráficos ",
      label: "(Photoshop, Canva, etc)",
      select: [16, 17, 18],
    },
    {
      programa: "Chat GPT",
      select: [19, 20, 21],
    },
  ];
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
    <div style={{ width: "79rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <span className="textTitleComponent">Herramientas Ofimáticas</span>
      </div>
      <div>
        <Card
          bodyStyle={{
            background: "#310161",
            padding: "35px 20px 20px 47px",
            borderRadius: "25px",
          }}
        >
          <div>
            <span
              style={{
                color: "white",
                fontFamily: "Avenir, Medium",
                fontSize: "20px",
              }}
            >
              Selecciona en qué nivel te encuentras de las siguientes
              herramientas
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "171%",
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
            {infoRadioIdiomas.map((idioma) => (
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
                  <div style={{ marginLeft: "10px", display: "flex" }}>
                    {idioma.select.map((item) => (
                      <div style={{ width: "60px" }}>
                        <Radio.Group
                          onChange={(e) => ValdationRadio(e)}
                          value={valuesRadioSelect}
                        >
                          <Radio value={item}></Radio>
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
            disabled={valuesRadioSelect !== 0 ? false : true}
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
            setActiveTab("8")
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
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
   </>
  );
};

export default OfficeTools;
