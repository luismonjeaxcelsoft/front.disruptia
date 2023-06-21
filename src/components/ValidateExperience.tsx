import Experiencia from "../assets/images/Experiencia.png";
import "../styles/ValidateExperience.css";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/disruptialogo.png";
import { GetExperienceDisrupterId } from "../services/ExperienceService";
type ValidateExperienceProps = {
  validadorComponente: React.Dispatch<number>;
  setValidateImgs: any;
  validateImgs: any;
};

const ValidateExperience: FC<ValidateExperienceProps> = ({
  validadorComponente,
  setValidateImgs,
  validateImgs,
}) => {
  const navigate = useNavigate();

  const getExperience = async () => {

    const res = await GetExperienceDisrupterId(1);

    if (res !== "No se encontro experiencia") {
      validadorComponente(2);
    }
  }

  useEffect(() => {
    getExperience();
  }, [])

  return (
    <div className="containerValidateExperience">
      <div
        style={{
          position: "relative",
          marginLeft: "-5%",
        }}
      >
        <img style={{ width: "896px", height: "662px" }} src={Experiencia} />
      </div>
      <div className="containerBodyExperience">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "70px",
              color: "white",
              fontFamily: "Montserrat-Bold",
            }}
          >
            ¿Has tenido
          </span>
          <p />
          <span
            style={{
              fontSize: "70px",
              color: "white",
              fontFamily: "Montserrat-Bold",
            }}
          >
            experiencia laboral?
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "white",
              fontFamily: "Montserrat-Light",
            }}
          >
            (contrato laboral y/o prestación de servicios)
          </span>
        </div>
        <div className="containerOptionsExperience">
          <button
            onClick={() => {
              validadorComponente(2);
            }}
            style={{ width: "250px", height: "87px" }}
            className="btn btn-primary backOptionsExperience"
          >
            ¡Sí!
          </button>
          <button
            onClick={() => {
              validadorComponente(3);
              setValidateImgs([...validateImgs, "4"]);
              navigate("/perfiles/4");
            }}
            style={{ width: "265px", height: "87px" }}
            className="btn btn-primary backOptionsExperience"
          >
            Aún no
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "135px",
            marginLeft: "-102%",
          }}
        >
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default ValidateExperience;
