import { useState, useEffect } from "react";
import Software_Web from "../assets/images/Software_Web.jpg";
import "../styles/ValidationSkillsDeveloped.css";
import { useNavigate } from "react-router-dom";
import SkillsDeveloping from "./SkillsDeveloping";
import { GetHabilidadDeSoftwareDisrupterId } from "../services/HabilidadSoftwareService";

const ValidationSkillsDeveloped = ({ setValidateImgs, validateImgs }: any) => {
  
  type HABILIDADES = {
    habilidad: string;
    nivel: string;
  };
 
  const navigate = useNavigate();
  const [validationComponent, setValidationComponent] = useState(false);
  const [habilidadesDisrupter, setHabilidadesDisrupter] = useState<HABILIDADES[]>([])

  const disrupterId = 1;

  const getHabilidadesDisrupter = async () => {
    const res = await GetHabilidadDeSoftwareDisrupterId(disrupterId);

    if (typeof res !== "string") {
      setValidationComponent(true);
      setHabilidadesDisrupter(res.habilidades);
    } else {
      setHabilidadesDisrupter([]);
    }
  };

  useEffect(() => {
    getHabilidadesDisrupter();
  }, []);

  return (
    <>
      {validationComponent ? (
        <SkillsDeveloping
          setValidateImgs={setValidateImgs}
          validateImgs={validateImgs}
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
                  onClick={() => {
                    setValidateImgs([...validateImgs, "11"]);
                    navigate("/perfiles/11 ");
                  }}
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
