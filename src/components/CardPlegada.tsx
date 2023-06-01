import { FC } from "react";
import "../../src/styles/CardPlegada.css";

import { DownOutlined } from "@ant-design/icons";

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
    if(type === "estudios" || type === "laboral"){
      const palabras = valuesFilter.nombreCurso.trim().split(/\s+/);
      if(palabras.length > 3){
        return `${palabras[0]} ${palabras[1]} ${palabras[2]}...`
      }else {
        return valuesFilter.nombreCurso
      }
      
    } 
  }
  return (
    <div className="containerElement">
      <div className="containerText">
        <span className="textSpanInfo"> {valuesInput()}</span>
        <div>
          <DownOutlined
            className="iconDropDown"
            onClick={() => setCardValidate(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardPlegada;
