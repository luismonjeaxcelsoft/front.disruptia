import { useState, FC, useEffect } from "react";
import logo from "../assets/images/disruptialogo.png";
import InfoValidateExperience from "./InfoValidateExperience";
import { useNavigate } from "react-router-dom";
import { GetExperienceDisrupterId } from "../services/ExperienceService";
import { GetActivitiesId } from "../services/ActivityService";
import { GetComplementoDisrupterId } from "../services/ComplementService";

const INITIAL_VALUES_FORM_EXPERIENCE = {
  disrupterId: 1,
  nombreEmpresa: "",
  cargo: "",
  fechaInicio: "",
  fechaFin: "",
  cursando: "",
  logros: "",
};

const INITIAL_VALUES_FORM_ACTIVIDAD = {
  disrupterId: 1,
  nombreActividad: "",
  organizacion: "",
  fechaInicio: "",
  fechaFin: "",
  cursando: "",
  tipoActividad: "",
};

const INITIAL_VALUES_FORM_COMPLEMENTARIO = {
  disrupterId: 1,
  nombreCurso: "",
  fechaInicio: "",
  fechaFin: "",
  cursando: "",
  nombreInstitucion: "",
  certificacion: "",
};

type FormValidateExpProps = {
  type: string;
  validateImgs?: any;
  setValidateImgs?: any;
};

const FormValidateExp: FC<FormValidateExpProps> = ({
  type,
  setValidateImgs,
  validateImgs,
}) => {
  const initialValue =
    type === "experience"
      ? INITIAL_VALUES_FORM_EXPERIENCE
      : type === "additionalActivity"
      ? INITIAL_VALUES_FORM_ACTIVIDAD
      : INITIAL_VALUES_FORM_COMPLEMENTARIO;

  const navigate = useNavigate();
  const [valuesForm, setValuesForm] = useState<any>([initialValue]);
  const [validateViewB, setValidateViewB] = useState<boolean>(false);
  const [valuesRes, setValuesRes] = useState<any>(false);

  const getForms = async () => {
    const res =
      type === "experience"
        ? await GetExperienceDisrupterId(1)
        : type === "additionalActivity"
        ? await GetActivitiesId(1)
        : await GetComplementoDisrupterId(1);  
    
    if (res && res.length > 0) {
      setValuesRes(true);
      const nuevoArray = res.reduce((accumulator: any, currentValue) => {
        return [...accumulator, currentValue];
      }, []);
      setValuesForm(nuevoArray);
    }
  };

  useEffect(() => {
    getForms();
  }, []);
  const validateNavigation = () => {
    if (type === "experience") {
      setValidateImgs([...validateImgs, "4"]);
      navigate("/perfiles/4");
    } else if (type === "additionalActivity") {
      setValidateImgs([...validateImgs, "5"]);
      navigate("/perfiles/5");
    } else if (type === "additionalCurse") {
      setValidateImgs([...validateImgs, "6"]);
      navigate("/perfiles/6");
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
              setValuesForm([...valuesForm, INITIAL_VALUES_FORM]);
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
