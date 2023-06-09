import {FC} from 'react'
import "../styles/NotExperience.css";
import { Sidebar } from "./Sidebar";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";

type NotExperienceProps ={
  setFormComponent: React.Dispatch<boolean>;
  setValidateImgs:any,
  validateImgs:any
  setActiveTab:any
}
const NotExperience:FC <NotExperienceProps> = ({setFormComponent, setValidateImgs,
  validateImgs,setActiveTab}) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Sidebar
          subTitle="Aquí encontrarás las instrucciones para diligenciar los campos requeridos"
          backColor={false}
          img={true}
        />
      </div>
      <div style={{ width: "75rem" }}>
        <div style={{ marginTop: "25px" }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/SSyRzzuJpEs"
            style={{ borderRadius: "10px", border: "none" }}
          ></iframe>
        </div>
        <div className="contentTextSpan">
          <span className="textContent">¿Has realizado algún voluntariado</span>
          <p />
          <span className="textContent">o trabajo comunitario?</span>
        </div>
        <div
          style={{ marginTop: "23px" }}
          className="containerOptionsExperience"
        >
          <button
            style={{ width: "195px", height: "56px" }}
            className="btn btn-primary backOptionsExperience"
            onClick={() => setFormComponent(true)}
          >
            <span style={{ fontSize: "20px" }}>Sí, añadir</span>
          </button>
          <button
            style={{ width: "195px", height: "56px" }}
            className="btn btn-primary backOptionsExperience"
            onClick={() => {  setValidateImgs([...validateImgs,"5"]);navigate("/perfiles/5");setActiveTab("5")}}
          >
            <span style={{ fontSize: "20px" }}>No, continuar</span>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <img style={{ width: "150px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default NotExperience;
