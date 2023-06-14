import { FC, useState } from "react";
import { Input } from "antd";
import logo from "../assets/images/disruptialogo.png";
import "../styles/DevelopedSkills.css";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

type DevelopedSkillsProps = {
  setValidateImgs: any;
  validateImgs: any;
};

const DevelopedSkills: FC<DevelopedSkillsProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const [validateSelect, setValidateSelect] = useState(false);
  let options = [
    {
      id: 1,
      label: "Habilidades socio emocionales",
    },
    {
      id: 2,
      label: "Saber vender",
    },
    {
      id: 3,
      label: "Orientación al cliente (servicio)",
    },
    {
      id: 4,
      label: "Resolución de problemas",
    },
    {
      id: 5,
      label: "Orientación a resultados",
    },
    {
      id: 6,
      label: "Comunicación",
    },
    {
      id: 7,
      label: "Trabajo en equipo",
    },
    {
      id: 8,
      label: "Gestión del tiempo",
    },
    {
      id: 9,
      label: "Flexibilidad y adaptabilidad",
    },
  ];

  const navigate = useNavigate();
  const [habilitysValues, setHabilitysValues] = useState<any>([]);
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [countId, setCountId] = useState<number>(0);
  const [valueHab, setValueHab] = useState<any>("");
  const [validate, setValidate] = useState(true);
  console.log("🚀 ~ file: DevelopedSkills.tsx:62 ~ validate:", validate);

  const agregateHability = () => {
    if (valueHab !== "") {
      const palabras = valueHab.trim().split(/\s+/);
      setHabilitysValues([
        ...habilitysValues,
        {
          id: countId,
          label: palabras,
        },
      ]);
    }
  };
  const validationDisabled = () => {
    if (habilitysValues.length >= 2) {
      setValidate(false);
    } else {
      window.alert(
        "Debe agregar como minimo 3 habilidades para poder continuar"
      );
    }
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
      <div style={{ width: "70rem", marginTop: "50px" }}>
        <div>
          <span
            style={{
              color: "#F3CF46",
              fontSize: "25px",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Habilidades Desarrolladas
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <label className="labelContainer">Habilidades Desarrolladas</label>
          <div
            style={{
              width: "702px",
              height: "57px",
              borderRadius: "17px",
              background: "#4F2678",
              display: "flex",
            }}
          >
            <Input
              onClick={(e: any) => {
                setValueHab(e.target.value);
                setValidateSelect(!validateSelect);
              }}
              style={{
                background: "#4F2678",
                color: "white",
                border: "none",
                fontFamily: "Montserrat-Light",
                fontSize:"20px"
              }}
              onChange={(e) => {
                setValidateContinue(false);
                setValueHab(e.target.value);
              }}
              value={valueHab}
            />
          </div>
          {validateSelect && (
            <div
              style={{
                width: "702px",
                borderRadius: "17px",
                background: "rgba(255, 255, 255, 0.4)",
              }}
            >
              {options.map((item) => (
                <div
                  className="containerOptionsSelect"
                  onClick={() => {
                    setValueHab(item.label);
                    setValidateSelect(false);
                    setValidateContinue(false);
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "Montserrat-Light",
                      marginLeft: "20px",
                      color: "white",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2px",
          }}
        >
          {habilitysValues.map((item: any) => (
            <div style={{ marginRight: "10px" }} className="containerSkills">
              <span className="skillText">
                {item.label.length > 1
                  ? `${item.label[0]} ${item.label[1]}...`
                  : item.label[0]}
              </span>
            </div>
          ))}
        </div>
        {!validateContinue && (
          <div style={{ marginTop: "55px" }} className="containerSaveAction">
            <button
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              className="SaveInfo btn btn-primary"
              onClick={() => {
                validationDisabled();
                setValidateContinue(true);
                setCountId(countId + 1);
                agregateHability();
                setValueHab("");
              }}
              disabled={valueHab === "" ? true : false}
            >
              Guardar
            </button>
          </div>
        )}
        <div className="containerSelect">
          <button
            className={validate ? "buttonContinueSelect" : "ContainerDisabled"}
            onClick={() => {
              navigate("/perfiles/10");
              setValidateImgs([...validateImgs, "10"]);
            }}
            disabled={validate}
          >
            <p className={validate ? "textDisableds" : "textSiguienteSelect"}>
              Siguiente
            </p>
          </button>
        </div>
        <div style={{ marginTop: "80px" }} className="containerExpContinue">
          <img style={{ width: "100px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default DevelopedSkills;
