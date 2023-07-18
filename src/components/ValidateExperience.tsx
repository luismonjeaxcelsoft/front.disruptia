import Experiencia from "../assets/images/Experiencia.png";
import "../styles/ValidateExperience.css";
import { FC, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/disruptialogo.png";
import {
  GetExperienceDisrupterId,
  SaveExperience,
} from "../services/ExperienceService";
import MyContext from "../context/MyContext";
type ValidateExperienceProps = {
  validadorComponente: React.Dispatch<number>;
};

const ValidateExperience: FC<ValidateExperienceProps> = ({
  validadorComponente,
}) => {
  const navigate = useNavigate();

  const getExperience = async () => {
    const res = await GetExperienceDisrupterId(1);

    if (typeof res !== "string") {
      const validateRes = res.filter((item) => item.cargo !== "N/T");
      if (validateRes.length > 0) {
        validadorComponente(2);
      }
    }
  };

  useEffect(() => {
    getExperience();
  }, []);

  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { myMethod } = context;

  const buttonNo = async () => {
    const payload = {
      id: 0,
      disrupterId: 1,
      nombreEmpresa: "",
      cargo: "N/T",
      fechaInicio: "",
      fechaFin: "",
      cursando: false,
      logros: "",
    };

    const res = await SaveExperience(payload);

    if (res === "Experiencia guardada") {
      myMethod();
      navigate("/perfiles/4");
    }
  };

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
            onClick={() => buttonNo()}
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
