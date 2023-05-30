import React, { FC, useEffect, useState } from "react";
import InfoWordExperience from "./InfoWordExperience";
import ".././styles/InfoWordExp.css";

interface FormInfoExperienceProps {
  setNextTab: React.Dispatch<string>;
  setActiviKey: any;
  activiKey: any;
}
type FormEstudies = {
  position: number;
  nameCurse: string;
  dateInit: string;
  dateInitOne: string;
  dateEnd: string;
  dateEndOne: string;
  institution: string;
  studies: string;
  countries: string;
  countriesOne: string;
};
const FormInfoExperience: FC<FormInfoExperienceProps> = ({
  setNextTab,
  setActiviKey,
  activiKey,
}) => {
  const [countPosition, setCountPosition] = useState<number>(0);
  console.log("🚀 ~ file: FormInfoExperience.tsx:28 ~ countPosition:", countPosition)

  const INITIAL_VALUES_FORM = {
    position: countPosition,
    nameCurse: "",
    dateInit: "",
    dateInitOne: "",
    dateEnd: "",
    dateEndOne: "",
    institution: "",
    studies: "",
    countries: "",
    countriesOne: "",
  };
  const [valuesForm, setValuesForm] = useState<Array<FormEstudies>>([
    INITIAL_VALUES_FORM,
  ]);
  console.log("🚀 ~ file: FormInfoExperience.tsx:45 ~ valuesForm:", valuesForm)

  
  return (
    <div>
      <div>
        {valuesForm.map((valueForm, i) => {
            return (
                <InfoWordExperience
            setValues={setValuesForm}
            valuesFilter={valuesForm}
            values={valueForm}
            key={i}
            id={i}
            setCountPosition={setCountPosition}
            countPosition={countPosition}
          />
            )
          
})}
      </div>
      <div className="containerButtonContinue">
        <button
          onClick={() => {setValuesForm([...valuesForm, INITIAL_VALUES_FORM])}}
          className="btn btn-primary hoverAgregated"
        >
          Agregar estudio +
        </button>
        <button className="buttomSave btn btn-primary">Guardar</button>
      </div>
      <div className="containerButtomSelect">
        <button
          className="buttonContinueSelect"
          onClick={() => {
            setNextTab("3");
            setActiviKey([...activiKey, { tabThree: true }]);
          }}
        >
          <p className="textButtomSelect">Siguiente</p>
        </button>
      </div>
    </div>
  );
};

export default FormInfoExperience;
