import { FC } from "react";
import "../../src/styles/CardPlegada.css";
import Aroow from "../assets/images/Aroow-46.png"

type CardPlegadaProps = {
  valuesFilter: any;
  setCardValidate: any;
  type:string;
  setValidateContinue?: any;
  setValidateSiguiente?: any;
  setValidateViewB?:any
};

const CardPlegada: FC<CardPlegadaProps> = ({
  valuesFilter,
  setCardValidate,
  type,
  setValidateContinue,
  setValidateSiguiente,
  setValidateViewB
}) => {

  const valuesInput = ()=>{
    if(type === "estudios" || type === "additionalCurse"){
      const palabras = valuesFilter.nombreCurso.trim().split(/\s+/);
      if(palabras.length > 3){
        return `${palabras[0]} ${palabras[1]} ${palabras[2]}...`
      }else {
        return valuesFilter.nombreCurso
      }
      
    } else if(type === "experience") {
      const palabras = valuesFilter.nombreEmpresa.trim().split(/\s+/);
      if(palabras.length > 3){
        return `${palabras[0]} ${palabras[1]} ${palabras[2]}...`
      }else {
        return valuesFilter.nombreEmpresa
      }
    } else if (type === "additionalActivity") {
      const palabras = valuesFilter.nombreActividad.trim().split(/\s+/);
      if(palabras.length > 3){
        return `${palabras[0]} ${palabras[1]} ${palabras[2]}...`
      }else {
        return valuesFilter.nombreActividad
      }
    } else if (type === "reference") {
      const palabras = valuesFilter.nombreCompleto.trim().split(/\s+/);
      if(palabras.length > 3){
        return `${palabras[0]} ${palabras[1]} ${palabras[2]}...`
      }else {
        return valuesFilter.nombreCompleto
      }
      
    }
  }

  const handlerOnClick = () => {
    setCardValidate(false);
    setValidateViewB(false)
    if (type === "reference"){
      setValidateContinue(false);
      setValidateSiguiente(false);
    }
  }

  return (
    <div className="containerElement">
      <div className="containerText">
        <span className={type === "laboral" ? "textSpanInfoLaboral" : "textSpanInfo"}> {valuesInput()}</span>
        <div style={{cursor:"pointer"}} onClick={handlerOnClick}>
         <img style={{width:"60px"}} alt="flecha_abajo" src={Aroow}/>
        </div>
      </div>
    </div>
  );
};

export default CardPlegada;
