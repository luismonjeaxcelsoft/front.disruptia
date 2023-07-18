import { useState, FC, useEffect, useContext } from "react";
import logo from "../assets/images/disruptialogo.png";
import InfoValidateExperience from "./InfoValidateExperience";
import { useNavigate } from "react-router-dom";
import { GetExperienceDisrupterId } from "../services/ExperienceService";
import { GetActivitiesId } from "../services/ActivityService";
import { GetComplementoDisrupterId } from "../services/ComplementService";
import MyContext from "../context/MyContext";

const INITIAL_VALUES_FORM_EXPERIENCE = {
  id: 0,
  disrupterId: 1,
  nombreEmpresa: "",
  cargo: "",
  fechaInicio: "",
  fechaFin: "",
  cursando: false,
  logros: "",
};

const INITIAL_VALUES_FORM_ACTIVIDAD = {
  id: 0,
  disrupterId: 1,
  nombreActividad: "",
  organizacion: "",
  fechaInicio: "",
  fechaFin: "",
  cursando: false,
  tipoActividad: "",
};

const INITIAL_VALUES_FORM_COMPLEMENTARIO = {
  id: 0,
  disrupterId: 1,
  nombreCurso: "",
  fechaInicio: "",
  fechaFin: "",
  cursando: false,
  nombreInstitucion: "",
  certificacion: false,
};

type FormValidateExpProps = {
  type: string;
};

const FormValidateExp: FC<FormValidateExpProps> = ({ type }) => {
  const initialValue =
    type === "experience"
      ? INITIAL_VALUES_FORM_EXPERIENCE
      : type === "additionalActivity"
      ? INITIAL_VALUES_FORM_ACTIVIDAD
      : INITIAL_VALUES_FORM_COMPLEMENTARIO;

  const [valuesForm, setValuesForm] = useState<any>([initialValue]);
  const navigate = useNavigate();
  const [validateViewB, setValidateViewB] = useState<boolean>(false);
  const [valuesRes, setValuesRes] = useState<any>(false);

  useEffect(() => {
    getForms();
  }, []);

  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { myMethod, pasos, setActualizarPreview } = context;

  const getForms = async () => {
    if (type === "experience") {
      const res = await GetExperienceDisrupterId(1);
      setValuesRes(true);
      if (typeof res !== "string") {
        const resFilter = res.filter((item) => item.cargo !== "N/T");
        if (resFilter.length > 0) {
          setValuesForm(resFilter);
        }
      }
    } else if (type === "additionalActivity") {
      const res = await GetActivitiesId(1);
      setValuesRes(true);
      if (typeof res !== "string") {
        const resFilter = res.filter((item) => item.nombreActividad !== "N/T");
        if (resFilter.length > 0) {
          setValuesForm(resFilter);
        }
      }
    } else {
      const res = await GetComplementoDisrupterId(1);
      setValuesRes(true);
      if (typeof res !== "string") {
        setValuesForm(res);
      }
    }
  };

  const validateNavigation = () => {
    if (type === "experience") {
      if (pasos.length !== 12) {
        navigate("/perfiles/4");
      } else {
        setActualizarPreview((prev: any) => !prev)
        navigate("/perfiles/13");
      }
    } else if (type === "additionalActivity") {
      if (pasos.length !== 12) {
        navigate("/perfiles/5");
      } else {
        setActualizarPreview((prev: any) => !prev)
        navigate("/perfiles/13");
      }
    } else if (type === "additionalCurse") {
      if (pasos.length !== 12) {
        navigate("/perfiles/6");
      } else {
        setActualizarPreview((prev: any) => !prev)
        navigate("/perfiles/13");
      }
    }
  };

  return (
    <div>
      <div>
        {valuesForm.map((valueForm: any, i: any) => {
          return (
            <InfoValidateExperience
              key={i}
              valuesFilter={valuesForm}
              id={i}
              setValues={setValuesForm}
              values={valueForm}
              setValidateViewB={setValidateViewB}
              type={type}
              valuesRes={valuesRes}
              getForms={getForms}
            />
          );
        })}
      </div>

      {validateViewB && (
        <div className="containerButtonContinueWord">
          <button
            onClick={() => {
              setValuesForm([...valuesForm, initialValue]);
              setValidateViewB(false);
              setValuesRes(false);
            }}
            className="btn btn-primary hoverAgregarEx"
          >
            <span
              style={{
                fontSize: "18px",
                fontFamily: "Montserrat-Light",
                opacity: "0.7",
              }}
            >
              {type === "experience"
                ? "Agregar Experiencia +"
                : type === "additionalActivity"
                ? "Agregar Actividad +"
                : type === "additionalCurse"
                ? "Agregar Curso +"
                : ""}
            </span>
          </button>
        </div>
      )}

      {validateViewB && (
        <div className="containerSelect">
          <button
            onClick={() => {
              myMethod();
              validateNavigation();
            }}
            className="buttonContinueSelect"
          >
            <p className="textSiguienteSelect">Siguiente</p>
          </button>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default FormValidateExp;
