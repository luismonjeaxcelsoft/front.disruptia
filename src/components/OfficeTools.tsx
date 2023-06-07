import { FC } from "react";
import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";

type OfficeToolsProps = {
  setValidateImgs: any;
  validateImgs: any;
};

const OfficeTools: FC<OfficeToolsProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();
  const niveles = ["Basico", "Intermedio", "Avanzado"];
  const infoRadioIdiomas = [
    {
      programa: "Microsoft Word ",
      label: "(Google Docs)",
      select: [1, 2, 3],
    },
    {
      programa: "Microsoft Excel ",
      label: "(Google Sheets)",
      select: [1, 2, 3],
    },
    {
      programa: "Microsoft PowerPoint ",
      label: "(Google Slides)",
      select: [1, 2, 3],
    },
    {
      programa: "Correo electrónico ",
      label: "(Microsoft Outlook, Gmail, etc)",
      select: [1, 2, 3],
    },
    {
      programa: "Gestión de proyectos ",
      label: "(Trello, Asana, Jira, etc)",
      select: [1, 2, 3],
    },
    {
      programa: "Videoconferencia ",
      label: "(Zoom, Meet, Teams)",
      select: [1, 2, 3],
    },
    {
      programa: "Imágenes y gráficos ",
      label: "(Photoshop, Canva, etc)",
      select: [1, 2, 3],
    },
    {
      programa: "Chat GPT",
      select: [1, 2, 3],
    },
  ];
  return (
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
                  <span style={{ opacity:"0.8",fontSize:"15px"}}className="idiomaText">{idioma.label}</span>

                </div>
                <div>
                  <div style={{ marginLeft: "10px", display: "flex" }}>
                    {idioma.select.map(() => (
                      <div style={{ width: "60px" }}>
                        <Radio></Radio>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div style={{ marginTop: "35px" }} className="containerSaveAction">
        <button
          onClick={() => {
            setValidateImgs([...validateImgs, "8"]);
            navigate("/perfiles/8");
          }}
          style={{ width: "165px", height: "47px", fontSize: "18px",fontFamily:"Montserrat-Bold" }}
          className="SaveInfo btn btn-primary"
        >
          Guardar
        </button>
      </div>
      <div style={{marginTop: "30px" }} className="containerExpContinue">
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default OfficeTools;
