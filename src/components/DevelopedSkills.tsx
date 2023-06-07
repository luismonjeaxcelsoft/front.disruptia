import {FC} from 'react'
import { Input } from "antd";
import logo from "../assets/images/disruptialogo.png";
import "../styles/DevelopedSkills.css";
import { useNavigate } from "react-router-dom";

type DevelopedSkillsProps ={
    setValidateImgs:any,
    validateImgs:any
}

const DevelopedSkills:FC<DevelopedSkillsProps> = ({
    setValidateImgs,
    validateImgs

}) => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "70rem", marginTop: "50px" }}>
      <div>
        <span style={{ color: "#F3CF46", fontSize: "25px" }}>
          Habilidades Desarrolladas
        </span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "50px" }}
      >
        <label className="labelContainer">Habilidades Desarrolladas</label>
        <Input
          placeholder="Ejm: Orientación al logro"
          style={{
            borderRadius: "5px",
            background: "#4F2678",
            height: "57px",
            border: "none",
          }}
          type="select"
        />
      </div>
      <div style={{display:"flex"}}>
        <div  style={{marginRight:"10px"}} className="containerSkills">
          <span className="skillText">Responsabilidad</span>
        </div>
        <div className="containerSkills">
          <span className="skillText">Comunicación</span>
        </div>
      </div>
      <div style={{ marginTop: "155px" }} className="containerSaveAction">
        <button
          style={{
            width: "165px",
            height: "47px",
            fontSize: "18px",
            fontFamily: "Montserrat-Bold",
          }}
          className="SaveInfo btn btn-primary"
          onClick={() => {
            navigate("/perfiles/10");
            setValidateImgs([...validateImgs,"10"])
          }}
        >
          Guardar
        </button>
      </div>
      <div style={{ marginTop: "80px" }} className="containerExpContinue">
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default DevelopedSkills;
