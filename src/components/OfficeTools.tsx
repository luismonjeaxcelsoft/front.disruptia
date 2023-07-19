import { FC, useState, useEffect, useContext } from "react";
import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import {
  GetHerramientas,
  GetHerramientasDisrupterId,
  SaveHerramientas,
  HERRAMIENTA,
} from "../services/HerramientasService";
import MyContext from "../context/MyContext";

const OfficeTools= () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<HERRAMIENTA[]>([]);
  const [validateContinue, setValidateContinue] = useState<boolean>(
    selectedOptions.length === 8 ? false : true
  );
  const [herramientas, setHerramientas] = useState<any>([]);

  const niveles = ["Ninguno", "Básico", "Intermedio", "Avanzado"];

  const infoRadioHerramientas = async () => {
    const res = await GetHerramientas();
    setHerramientas(res);
  };

  const infoRadioHerramientasBD = async () => {
    const res = await GetHerramientasDisrupterId(1);
    if (typeof res !== "string") {
      setSelectedOptions(res.herramientas);
    }
  };

  const handleRadioChange = (herramienta: string, nivel: string) => {
    setValidateContinue(false);

    const updateArray = [...selectedOptions];

    const exist = updateArray.findIndex(
      (item: HERRAMIENTA) => item.herramienta === herramienta
    );

    const id =
    selectedOptions.find((item: HERRAMIENTA) => item.herramienta === herramienta)
        ?.id || 0;
        console.log(id)

    if (exist !== -1) {
      updateArray[exist].nivel = nivel;
    } else {
      const newItem = {
        id: id,
        herramienta: herramienta,
        nivel: nivel,
      };
      updateArray.push(newItem);
    }

    setSelectedOptions(updateArray);
  };

  const saveHerramientas = async () => {
    const payload = {
      disrupterId: 1,
      herramientas: selectedOptions,
    };

    const res = await SaveHerramientas(payload);

    if (res === "Herramientas ofimaticas guardadas") {
      setValidateContinue(true);
      infoRadioHerramientasBD();
    }
  };

  useEffect(() => {
    infoRadioHerramientas();
    infoRadioHerramientasBD();
  }, []);

  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { myMethod, pasos, setActualizarPreview } = context;

  const buttonSiguiente = () => {
    myMethod();
    if (pasos.length !== 12) {
      navigate("/perfiles/8");
    } else {
      setActualizarPreview((prev: any) => !prev)
      navigate("/perfiles/13");
    }
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
          open={false}
        />
      </div>
      <div style={{ width: "90rem" }}>
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
              padding: "15px 47px 20px 47px",
              borderRadius: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                width: "100%",
                marginTop: "20px",
              }}
            >
              {niveles.map((item) => (
                <div
                  style={{
                    marginRight: "0px",
                    width: "92px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  key={item}
                >
                  <span className="textItem">{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "15px" }}>
              {herramientas.map((herramienta: any) => (
                <div className="containerIdiomaText" key={herramienta.nombre}>
                  <div style={{ width: "100%" }}>
                    <span className="herramientaText">
                      {herramienta.nombre + " "}
                    </span>
                    <span
                      style={{ opacity: "0.8", fontSize: "15px" }}
                      className="herramientaText"
                    >
                      {herramienta.alternativa}
                    </span>
                  </div>
                  <div>
                    <div style={{ marginLeft: "5px", display: "flex" }}>
                      <Radio.Group
                        onChange={(e) =>
                          handleRadioChange(herramienta.nombre, e.target.value)
                        }
                        value={
                          selectedOptions.find(
                            (item: any) =>
                              item.herramienta === herramienta.nombre
                          )?.nivel || null
                        }
                      >
                        <div style={{ display: "flex" }}>
                          {niveles.map((item: string) => (
                            <div
                              style={{
                                width: "92px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                              key={item}
                            >
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
        </div>
        {!validateContinue && (
          <div style={{ marginTop: "35px" }} className="containerSaveAction">
            <button
              onClick={() => {
                saveHerramientas();
              }}
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              disabled={selectedOptions.length === 8 ? false : true}
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
            onClick={() => buttonSiguiente()}
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
