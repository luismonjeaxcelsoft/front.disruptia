import {FC} from 'react'
import { Radio } from "antd";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";

type WorkingModalityProps ={
    setValidateImgs:any,
    validateImgs:any
}

const WorkingModality:FC <WorkingModalityProps> = ({setValidateImgs,validateImgs}) => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "79rem",marginTop:"50px" }}>
      <div>
        <span style={{ color: "#F3CF46", fontSize: "25px" }}>
          ¿Qué modelo de trabajo prefieres?
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column",marginLeft:"31px" }}>
        <Radio>
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontFamily: "Avenir, Medium",
            }}
          >
            Remoto
          </span>
        </Radio>
        <Radio>
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontFamily: "Avenir, Medium",
            }}
          >
            Hibrido
          </span>
        </Radio>
        <Radio>
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontFamily: "Avenir, Medium",
            }}
          >
            Presencial
          </span>
        </Radio>
      </div>
      <div style={{ marginTop: "90px" }} className="containerSaveAction">
        <button
          onClick={() => {
            setValidateImgs([...validateImgs, "9"]);
            navigate("/perfiles/9");
          }}
          style={{ width: "165px", height: "47px", fontSize: "18px",fontFamily:"Montserrat-Bold" }}
          className="SaveInfo btn btn-primary"
        >
          Guardar
        </button>
      </div>
      <div style={{marginTop: "120px" }} className="containerExpContinue">
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default WorkingModality;
