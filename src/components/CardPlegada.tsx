import { FC } from "react";
import "../../src/styles/CardPlegada.css"
import dropDown from "../assets/images/dropDownSinFondo.png"

type CardPlegadaProps = {
  valuesFilter: any;
  setCardValidate:any
};

const CardPlegada: FC<CardPlegadaProps> = ({ valuesFilter,setCardValidate }) => {
  return (
    <div >
      <div className="containerElement">
       <div className="containerText">
       <span className="textSpanInfo"> {valuesFilter.nameCurse}</span>
       <img style={{width:"40px",cursor:"pointer"}} onClick={()=>setCardValidate(false)} src={dropDown}/>
       </div>
      </div>
    </div>
  );
};

export default CardPlegada;
