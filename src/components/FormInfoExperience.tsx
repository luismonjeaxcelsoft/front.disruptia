import React, { FC, useState, useEffect } from "react";
import InfoWordExperience from "./InfoWordExperience";
import ".././styles/InfoWordExp.css";
import logo from "../assets/images/disruptialogo.png";
import { GetStudiesId } from "../services/EstudiesService";
interface FormInfoExperienceProps {
  setNextTab: React.Dispatch<string>;
  setActiviKey: any;
  activiKey: any;
}

const INITIAL_VALUES_FORM = {
  disrupterId: 1,
  estudioId: 1,
  nombreCurso: "",
  dateInit: "",
  fechaInicio: "",
  dateEnd: "",
  fechaFin: "",
  cursando: "",
  nombreInstitucion: "",
  tipoEstudio: "",
  paisId: "",
  ciudadId: "",
};
const FormInfoExperience: FC<FormInfoExperienceProps> = ({
  setNextTab,
  setActiviKey,
  activiKey,
}) => {
  const [valuesForm, setValuesForm] = useState<any>([INITIAL_VALUES_FORM]);
  const [validateViewB, setValidateViewB] = useState<boolean>(false)
  const getFormStudies = async () => {
    const res = await GetStudiesId(1);
    if (res.length > 0) {
      let infoMap = res.map((item: any) => {
        return {
          disrupterId: 1,
          estudioId: item.estudioId,
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
        };
      });
      const nuevoArray = infoMap.reduce((accumulator: any, currentValue) => {
        return [...accumulator, currentValue];
      }, []);
      setValuesForm(nuevoArray);
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
            />
          );
        })}
      </div>

      {validateViewB && (
        <div className="containerButtonContinue">
          <button
            onClick={() => {
              setValuesForm([...valuesForm, INITIAL_VALUES_FORM]);
              setValidateViewB(false)
            }}
            className="btn btn-primary hoverAgregar"
          >
            Agregar estudio +
          </button>
        </div>
      )}

      {validateViewB && (
        <div className="containerSelect">
          <button
            className="buttonContinueSelect"
            onClick={() => {
              setNextTab("3");
              setActiviKey([...activiKey, { tabThree: true }]);
            }}
          >
            <p className="textSiguienteSelect">Siguiente</p>
          </button>
        </div>
      )}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default FormInfoExperience;
