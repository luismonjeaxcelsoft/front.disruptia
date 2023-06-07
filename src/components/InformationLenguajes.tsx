import { FC } from "react";
import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";

type InformationLenguajesProps = {
  setValidateImgs: any;
  validateImgs: any;
};

const InformationLenguajes: FC<InformationLenguajesProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();
  const niveles = ["Basico", "Intermedio", "Avanzado", "Nativo"];
  const infoRadioIdiomas = [
    {
      idioma: "Español",
      select: [1, 2, 3, 4],
    },
    {
      idioma: "Ingles",
      select: [1, 2, 3, 4],
    },
    {
      idioma: "Frances",
      select: [1, 2, 3, 4],
    },
    {
      idioma: "Portugués",
      select: [1, 2, 3, 4],
    },
    {
      idioma: "Italiano",
      select: [1, 2, 3, 4],
    },
  ];
  return (
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
      <div style={{ marginTop: "65px" }} className="containerSaveAction">
        <button
          onClick={() => {
            setValidateImgs([...validateImgs, "7"]);
            navigate("/perfiles/7");
          }}
          style={{ width: "165px", height: "47px", fontSize: "18px",fontFamily:"Montserrat-Bold" }}
          className="SaveInfo btn btn-primary"
        >
          Guardar
        </button>
      </div>
      <div className="containerExpContinue">
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default InformationLenguajes;
