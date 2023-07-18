import { useState, useEffect, useContext } from "react";
import Software_Web from "../assets/images/Software_Web.jpg";
import "../styles/ValidationSkillsDeveloped.css";
import { useNavigate } from "react-router-dom";
import SkillsDeveloping from "./SkillsDeveloping";
import {
  GetHabilidadDeSoftwareDisrupterId,
  SaveHabilidadSoftware,
} from "../services/HabilidadSoftwareService";
import MyContext from "../context/MyContext";

const ValidationSkillsDeveloped = () => {
  type HABILIDADES = {
    habilidad: string;
    nivel: string;
  };

  const navigate = useNavigate();
  const [validationComponent, setValidationComponent] = useState(false);
  const [habilidadesDisrupter, setHabilidadesDisrupter] = useState<
    HABILIDADES[]
  >([]);

  const disrupterId = 1;

  const getHabilidadesDisrupter = async () => {
    const res = await GetHabilidadDeSoftwareDisrupterId(disrupterId);

    if (typeof res !== "string") {
      setValidationComponent(true);
      const habilidadesFilter = res.habilidades.filter(
        (item) => item.habilidad !== "N/T"
      );

      if (habilidadesFilter.length > 0) {
        setHabilidadesDisrupter(habilidadesFilter);
      }
    } 
  };

  const buttonNo = async () => {
    const payload = {
      disrupterId: 1,
      habilidades: [
        {
          habilidad: "N/T",
          nivel: "N/T",
        },
      ],
    };

    const res = await SaveHabilidadSoftware(payload);

    if (res === "Habilidades de software guardadas") {
      myMethod();
      navigate("/perfiles/11 ");
    }
  };

  useEffect(() => {
    getHabilidadesDisrupter();
  }, []);

  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { myMethod } = context;

  return (
    <>
      {validationComponent ? (
        <SkillsDeveloping
          habilidadesDisrupter={habilidadesDisrupter}
        />
      ) : (
        <div style={{ width: "800px" }}>
          <img
            style={{ width: "800px", borderRadius: "40px" }}
            src={Software_Web}
          />
          <div
            style={{
              lineHeight: "40px",
              position: "absolute",
              top: "86px",
              left: "186px",
            }}
          >
            <span
              style={{ marginLeft: "27px" }}
              className="spanTitleSkillsVlidate"
            >
              ¿Cuentas con alguna
            </span>
            <p />

            <span className="spanTitleSkillsVlidate">
              habilidad en Desarrollo
            </span>
            <p />

            <span
              style={{ marginLeft: "100px" }}
              className="spanTitleSkillsVlidate"
            >
              de Software?
            </span>
            <div>
              <div
                style={{
                  marginTop: "80px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <button
                  onClick={() => setValidationComponent(true)}
                  className="buttonSelectSkillsDevelop btn btn-primary"
                >
                  <span className="spanButtomResp">Si</span>
                </button>
                <button
                  onClick={() => buttonNo()}
                  className="buttonSelectSkillsDevelop btn btn-primary"
                >
                  <span className="spanButtomResp">No</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ValidationSkillsDeveloped;
