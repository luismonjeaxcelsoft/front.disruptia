import { FC, useEffect, useContext } from "react";
import "../styles/NotExperience.css";
import { Sidebar } from "./Sidebar";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import { CreateActivity, GetActivitiesId } from "../services/ActivityService";
import MyContext from "../context/MyContext";

type NotExperienceProps = {
  setFormComponent: React.Dispatch<boolean>;
};
const NotExperience: FC<NotExperienceProps> = ({
  setFormComponent,
}) => {
  const navigate = useNavigate();

  const getActivity = async () => {
    const res = await GetActivitiesId(1);

    if (typeof res !== "string") {
      const validateRes = res.filter((item) => item.nombreActividad !== "N/T");
      if (validateRes.length > 0) {
        setFormComponent(true);
      }
    }
  };

  useEffect(() => {
    getActivity();
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
      nombreActividad: "N/T",
      organizacion: "",
      fechaInicio: "",
      fechaFin: "",
      cursando: false,
      tipoActividad: "",
    };
    const res = await CreateActivity(payload);

    if (res === "Actividad guardada") {
      myMethod();
      navigate("/perfiles/5");
    }
  };

  

  return (
    <>
      <div>
        <Sidebar
          subTitle="¿Has realizado alguna actividad extracurricular?"
          backColor={false}
          img={true}
        />
      </div>
      <div style={{ width: "75rem" }}>
        <div
          style={{
            marginTop: "20px",
            width: "768px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "white",
              fontFamily: "Montserrat-Light",
            }}
          >
            Después de ver el video, elige tu respuesta.
          </span>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/SSyRzzuJpEs"
            style={{ borderRadius: "10px", border: "none" }}
          ></iframe>
        </div>
        <div className="contentTextSpan">
          <span className="textContent">¿Has realizado algún voluntariado</span>
          <p />
          <span className="textContent">o trabajo comunitario?</span>
        </div>
        <div
          style={{ marginTop: "50px" }}
          className="containerOptionsExperience"
        >
          <button
            style={{
              width: "195px",
              height: "56px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="btn btn-primary backOptionsExperience"
            onClick={() => setFormComponent(true)}
          >
            <span
              style={{
                fontSize: "20px",
                fontFamily: "Montserrat-Bold",
                opacity: "0.87",
              }}
            >
              Sí, añadir
            </span>
          </button>
          <button
            style={{
              width: "195px",
              height: "56px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="btn btn-primary backOptionsExperience"
            onClick={() => buttonNo()}
          >
            <span
              style={{
                fontSize: "20px",
                fontFamily: "Montserrat-Bold",
                opacity: "0.87",
              }}
            >
              No, continuar
            </span>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <img style={{ width: "150px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default NotExperience;
