import { FC } from "react";
import "../../src/styles/CardPlegada.css";
import Aroow from "../assets/images/Aroow-46.png"

type CardPlegadaProps = {
  valuesFilter: any;
  setCardValidate: any;
  type:string
};

const CardPlegada: FC<CardPlegadaProps> = ({
  valuesFilter,
  setCardValidate,
  type
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
    }
  }
  return (
    <div className="containerElement">
      <div className="containerText">
        <span className={type === "laboral" ? "textSpanInfoLaboral" : "textSpanInfo"}> {valuesInput()}</span>
        <div style={{cursor:"pointer"}} onClick={() => setCardValidate(false)}>
         <img style={{width:"60px"}} alt="flecha_abajo" src={Aroow}/>
        </div>
      </div>
    </div>
  );
};

export default CardPlegada;
