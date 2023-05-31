import { FC } from "react";
import "../../src/styles/CardPlegada.css"
import dropDown from "../assets/images/dropDownSinFondo.png"
import { DownOutlined } from "@ant-design/icons";

type CardPlegadaProps = {
  valuesFilter: any;
  setCardValidate:any
};

const CardPlegada: FC<CardPlegadaProps> = ({ valuesFilter,setCardValidate }) => {
  return (
    <div >
      <div className="containerElement">
       <div className="containerText">
       <span className="textSpanInfo"> {valuesFilter.nombreCurso}</span>
       <DownOutlined className="iconDropDown" onClick={()=>setCardValidate(false)} />

       </div>
      </div>
    </div>
  );
};

export default CardPlegada;
