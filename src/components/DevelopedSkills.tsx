import { FC, useState,useEffect } from "react";
import { Select } from "antd";
import logo from "../assets/images/disruptialogo.png";
import "../styles/DevelopedSkills.css";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";

type DevelopedSkillsProps = {
  setValidateImgs: any;
  validateImgs: any;
  setActiveTab:any
};

const DevelopedSkills: FC<DevelopedSkillsProps> = ({
  setValidateImgs,
  validateImgs,
  setActiveTab
}) => {
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
  const [validate, setValidate] = useState(true)
  console.log("🚀 ~ file: DevelopedSkills.tsx:62 ~ validate:", validate)

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
const validationDisabled = ()=>{
if(habilitysValues.length >= 2){
  setValidate(false)
} else {
  window.alert("Debe agregar como minimo 3 habilidades para poder continuar")
}
}


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
          <span style={{ color: "#F3CF46", fontSize: "25px" }}>
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
          <Select
            placeholder="Ejm: Orientación al logro"
            style={{
              borderRadius: "5px",
              background: "#4F2678",
              border: "none",
              color: "white",
              width: "113%",
            }}
            options={options.map((item: any) => ({
              label: item.label,
              value: item.label,
            }))}
            onChange={(e) => {
              setValueHab(e);
              setValidateContinue(false);
            }}
          />
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
        {!validateContinue  && (
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
                validationDisabled()
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
            className={
              validate ? "buttonContinueSelect" : "ContainerDisabled"
            }
            onClick={() => {
              navigate("/perfiles/10");
              setValidateImgs([...validateImgs, "10"]);
              setActiveTab("10")
            }}
            disabled={validate}
          >
            <p
              className={
                validate ? "textDisableds" : "textSiguienteSelect"
              }
            >
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
