import { useState, useEffect } from "react";
import InfoWordExperience from "./InfoWordExperience";
import ".././styles/InfoWordExp.css";
import logo from "../assets/images/disruptialogo.png";
import { GetStudiesId } from "../services/EstudiesService";
import { useNavigate } from "react-router-dom";

const INITIAL_VALUES_FORM = {
  id: "",
  disrupterId: 1,
  nombreCurso: "",
  dateInit: "",
  fechaInicio: "",
  dateEnd: "",
  fechaFin: "",
  cursando: "",
  nombreInstitucion: "",
  modalidad: "",
  tipoEstudio: "",
  paisId: "",
  ciudadId: "",
};
const FormInfoExperience = ({
  setValidateImgs,
  validateImgs,
  valuesIdPerfiles,
  valuesInputsPerfiles,
}: any) => {
  const [valuesForm, setValuesForm] = useState<any>([INITIAL_VALUES_FORM]);
  const navigate = useNavigate();
  const [validateViewB, setValidateViewB] = useState<boolean>(false);
  const [valuesRes, setValuesRes] = useState<any>(false);
  const getFormStudies = async () => {
    try {
      const res = await GetStudiesId(1);
      if (res && res.length > 0) {
        setValuesRes(true);
        let infoMap = res.map((item: any) => {
          return {
            id: item.id,
            disrupterId: 1,
            nombreCurso: item.nombreCurso,
            dateInit: item.dateInit,
            fechaInicio: item.fechaInicio,
            dateEnd: item.dateEnd,
            fechaFin: item.fechaFin,
            cursando: item.cursando,
            nombreInstitucion: item.nombreInstitucion,
            tipoEstudio: item.tipoEstudio,
            paisId: item.paisId,
            ciudadId: item.ciudadId,
            modalidad: item.modalidad,
          };
        });
        const nuevoArray = infoMap.reduce((accumulator: any, currentValue) => {
          return [...accumulator, currentValue];
        }, []);
        setValuesForm(nuevoArray);
      }
    } catch (error) {
      setValuesRes(false);
    }
  };

  useEffect(() => {
    getFormStudies();
  }, []);

  return (
    <div>
      <div>
        {valuesForm.map((valueForm: any, i: any) => {
          return (
            <InfoWordExperience
              setValues={setValuesForm}
              valuesFilter={valuesForm}
              values={valueForm}
              key={i}
              id={i}
              setValidateViewB={setValidateViewB}
              valuesRes={valuesRes}
              valuesIdPerfiles={valuesIdPerfiles}
              valuesInputsPerfiles={valuesInputsPerfiles}
              getFormStudies={getFormStudies}
            />
          );
        })}
      </div>

      {validateViewB && (
        <div className="containerButtonContinue">
          <button
            onClick={() => {
              setValuesRes(false);
              setValuesForm([...valuesForm, INITIAL_VALUES_FORM]);
              setValidateViewB(false);
            }}
            className="btn btn-primary hoverAgregar"
          >
            <span
              style={{
                fontSize: "20px",
                fontFamily: "Montserrat-Light",
                opacity: "0.7",
              }}
            >
              {" "}
              Agregar estudio +
            </span>
          </button>
        </div>
      )}

      {validateViewB && (
        <div className="containerSelect">
          <button
            className="buttonContinueSelect"
            onClick={() => {
              navigate("/perfiles/3");
              setValidateImgs([...validateImgs, "3"]);
            }}
          >
            <p className="textSiguienteSelect">Siguiente</p>
          </button>
        </div>
      )}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default FormInfoExperience;
