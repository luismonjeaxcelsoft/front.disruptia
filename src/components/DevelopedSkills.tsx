import { FC, useEffect, useState, useContext } from "react";
import { Input } from "antd";
import logo from "../assets/images/disruptialogo.png";
import "../styles/DevelopedSkills.css";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { CloseOutlined } from "@ant-design/icons";
import {
  GetHabilidadDesarrolladaDisrupterId,
  GetHabilidadesDesarrolladas,
  SaveHabilidadDesarrollada,
} from "../services/HabilidadDesarrolladaService";
import MyContext from "../context/MyContext";

const DevelopedSkills = () => {
  const [validateSelect, setValidateSelect] = useState(false);

  const navigate = useNavigate();
  const [habilitysValues, setHabilitysValues] = useState<string[]>([]);
  const [idHabilidad, setIdHabilidad] = useState<number>(0);
  const [habilidades, setHabilidades] = useState<string[]>([]);
  const [habilitysOptions, setHabilitysOptions] = useState<string[]>([]);
  const [validateContinue, setValidateContinue] = useState<boolean>(
    habilitysValues.length !== 0 ? false : true
  );
  const [valueHab, setValueHab] = useState<any>("");

  const handleEliminarClick = (index: any) => {
    setValidateContinue(false);
    setHabilitysValues((prevOptions: any) => {
      return prevOptions.filter((i: any) => i !== index);
    });
  };

  const handleSetHabilidades = (index: string) => {
    if (habilitysValues.length !== 10) {
      if (!habilitysValues.includes(index)) {
        if (index !== "") {
          setHabilitysValues([...habilitysValues, index]);
        }
      } else {
        window.alert("La habilidad ya esta agregada");
      }
    } else {
      window.alert("No puedes agregar mas de 10 habilidades");
    }
  };

  const onChangeFilter = (value: string) => {
    setValidateSelect(true);
    const filter = habilidades.filter((item: string) => item.includes(value));
    setHabilitysOptions(filter);
  };

  const saveHabilidades = async () => {
    const payload = {
      id: idHabilidad,
      disrupterId: 1,
      habilidades: habilitysValues,
    };

    const res = await SaveHabilidadDesarrollada(payload);

    if (res === "Habilidades desarrolladas guardadas") {
      setValidateContinue(true);
      getHabilidadessBD();
    }
  };

  const getHabilidadessBD = async () => {
    const res = await GetHabilidadDesarrolladaDisrupterId(1);
    if (typeof res !== "string") {
      setHabilitysValues(res.habilidades);
      setIdHabilidad(res.id);
    }
  };

  const infoHabilidades = async () => {
    const res = await GetHabilidadesDesarrolladas();
    setHabilidades(res);
    setHabilitysOptions(res);
  };
  const buttonSiguiente = () => {
    myMethod();
    if (pasos.length !== 12) {
      navigate("/perfiles/10");
    } else {
      setActualizarPreview((prev: boolean) => !prev);
      navigate("/perfiles/13");
    }
  };

  useEffect(() => {
    infoHabilidades();
    getHabilidadessBD();
  }, []);

  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { myMethod, pasos, setActualizarPreview } = context;
  return (
    <>
      <div>
        <Sidebar
          subTitle="Piensa en las habilidades que has obtenido a través de diferentes experiencias y que estén relacionadas con el cargo que aplicas. Por ejemplo: para un rol de ventas, requieres habilidades como la comunicación."
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      <div style={{ width: "70rem", marginTop: "40px" }}>
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
              onPressEnter={(e: any) => {
                handleSetHabilidades(e.target.value);
                setValueHab("");
                setValidateSelect(false);
              }}
              onClick={(e: any) => {
                setValueHab(e.target.value);
                setValidateSelect(!validateSelect);
              }}
              style={{
                background: "#4F2678",
                color: "white",
                border: "none",
                fontFamily: "Montserrat-Light",
                fontSize: "20px",
              }}
              onChange={(e) => {
                setValidateContinue(false);
                setValueHab(e.target.value);
                onChangeFilter(e.target.value);
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
              {habilitysOptions.map((item: string) => (
                <div
                  key={item}
                  className="containerOptionsSelect"
                  onClick={() => {
                    handleSetHabilidades(item);
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
                      cursor: "pointer",
                    }}
                  >
                    {item}
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
            justifyContent: "center",
          }}
        >
          {habilitysValues.map((item: any) => (
            <div
              key={item}
              style={{ marginRight: "10px" }}
              className="containerSkills"
            >
              <span className="skillText">
                {item.length > 14 ? `${item.substring(0, 14)}... ` : item}
              </span>
              <CloseOutlined
                onClick={() => handleEliminarClick(item)}
                className="iconStylesClose"
              />
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
                saveHabilidades();
              }}
              disabled={habilitysValues.length >= 3 ? false : true}
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
            onClick={() => buttonSiguiente()}
            disabled={!validateContinue}
          >
            <p
              className={
                !validateContinue ? "textDisableds" : "textSiguienteSelect"
              }
            >
              Siguiente
            </p>
          </button>
        </div>
        <div style={{ marginTop: "80px" }} className="containerExpContinue">
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default DevelopedSkills;
