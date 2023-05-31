import React, { FC, useState,useEffect } from "react";
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
  disrupterId:1,
  estudioId:0,
  nombreCurso: "",
  dateInit: "",
  fechaInicio: "",
  dateEnd: "",
  fechaFin: "",
  cursando:false,
  nombreInstitucion: "",
  tipoEstudio: "",
  paisId: 0,
  ciudadId: 0,
};
const FormInfoExperience: FC<FormInfoExperienceProps> = ({
  setNextTab,
  setActiviKey,
  activiKey,
}) => {
  const [valuesForm, setValuesForm] = useState<any>([
    INITIAL_VALUES_FORM,
  ]);
  console.log("🚀 ~ file: FormInfoExperience.tsx:47 ~ valuesForm:", valuesForm)
const getFormStudies = async()=>{
  const res = await GetStudiesId(1)
  if(res.length > 0){
  let infoMap = res.map((item:any)=>{
return {
  disrupterId:1,
  estudioId:item.estudioId,
  nombreCurso: item.nombreCurso,
  dateInit: item.dateInit,
  fechaInicio: item.fechaInicio,
  dateEnd: item.dateEnd,
  fechaFin: item.fechaFin,
  cursando:item.cursando,
  nombreInstitucion: item.nombreInstitucion,
  tipoEstudio: item.tipoEstudio,
  paisId: item.paisId,
  ciudadId: item.ciudadId,
}
   })
   const nuevoArray = infoMap.reduce((accumulator:any, currentValue) => {
    return [...accumulator, currentValue];
  }, []);
setValuesForm(nuevoArray)
  }
}

useEffect(() => {
  getFormStudies()
}, [])

  return (
    <div>
      <div>
        {valuesForm.map((valueForm:any, i:any) => {
          return (
            <InfoWordExperience
              setValues={setValuesForm}
              valuesFilter={valuesForm}
              values={valueForm}
              key={i}
              id={i}
            />
          );
        })}
      </div>
      
      <div className="containerButtonContinue">
        <button
          onClick={() => {
            setValuesForm([...valuesForm, INITIAL_VALUES_FORM]);
          }}
          className="btn btn-primary hoverAgregar"
        >
          Agregar estudio +
        </button>
      </div>
      
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
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
      >
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default FormInfoExperience;
