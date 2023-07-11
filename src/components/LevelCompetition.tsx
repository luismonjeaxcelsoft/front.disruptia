import { useState, useEffect } from "react";
import { Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { GetNiveles, UpdateHabilidadNivel } from "../services/HabilidadSoftwareService";

const LevelCompetition = ({ skills, setValidateImgs, validateImgs }: any) => {
  const navigate = useNavigate();
  const [valueRadio, setValueRadio] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [niveles, setNiveles] = useState<string[]>([]);
  const [validateContinue, setValidateContinue] = useState<boolean>(true);
  const [validateSiguiente, setValidateSiguiente] = useState<boolean>(true);

  const validateValuesFilter = () => {
    if (currentIndex < skills.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setValueRadio("");
      getValidateSiguiente();
    } else if (currentIndex === skills.length - 1) {
      setValueRadio("");
      navigate("/perfiles/11");
      setValidateImgs([...validateImgs, "11"]);
    }
  };

  const handleRadioChange = (item: string) => {
    setValueRadio(item);
    setValidateContinue(false);
  }

  const saveNivel = async () => {
    const payload = {
      disrupterId: 1,
      habilidad: skills[currentIndex].habilidad,
      nivel: valueRadio
    }
    const res = await UpdateHabilidadNivel(payload);

    if (res === "Nivel guardado") {
      setValidateContinue(true);
      setValidateSiguiente(false);
    }

  }

  const getNiveles = async () => {
    const res = await GetNiveles();
    setNiveles(res);
  };

  const getValidateSiguiente = () => {
    if (skills[currentIndex].nivel !== "" && skills[currentIndex].nivel !== "Pendiente") {
      setValidateSiguiente(false);
      setValueRadio(skills[currentIndex].nivel)
    }
  }

  useEffect(() => {
    getNiveles();
    getValidateSiguiente();
  }, []);

  return (
    <div>
      <div className="containerComponent">
        <div style={{ marginLeft: "95px", marginTop: "10px" }}>
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontFamily: "Montserrat-Light",
            }}
          >
            Tu nivel de competencia en {skills[currentIndex].habilidad} es:
          </span>
        </div>
        <div>
          <Radio.Group
            onChange={(e) => handleRadioChange(e.target.value)}
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "115px",
              marginBottom: "15px",
            }}
            value={valueRadio}
          >
            {niveles.map((item: any) => (
              <Radio value={item} key={item}>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Montserrat-Light",
                  }}
                >
                  {item}
                </span>
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
      {!validateContinue && (
        <div style={{ marginTop: "40px" }} className="containerSaveAction">
          <button
            style={{
              width: "165px",
              height: "47px",
              fontSize: "18px",
              fontFamily: "Montserrat-Bold",
            }}
            className="SaveInfo btn btn-primary"
            onClick={() => {
              saveNivel();
            }}
            disabled={validateContinue}
          >
            Guardar
          </button>
        </div>
      )}
      <div className="containerSelect">
        <button
          onClick={() => {
            validateValuesFilter();
          }}
          className={!validateSiguiente ? "buttonContinueSelect" : "ContainerDisabled"}
          disabled={validateSiguiente}
        >
          <p className={!validateSiguiente ? "textSiguienteSelect" : "textDisabled"}>Siguiente</p>
        </button>
      </div>
    </div>
  );
};

export default LevelCompetition;
