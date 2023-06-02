import {FC} from 'react'
import "../styles/NotExperience.css";
import { Sidebar } from "./Sidebar";
import logo from "../assets/images/disruptialogo.png";

type NotExperienceProps ={
    validadorComponente:any
}

const NotExperience: FC <NotExperienceProps> = ({validadorComponente}) => {
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
        <video
          className="containerVideo"
          src={"https://www.youtube.com/watch?v=SSyRzzuJpEs"}
          controls
        />
      </div>
      <div className="contentTextSpan">
        <span className="textContent">¿Has realizado algún voluntariado</span>
        <p />
        <span className="textContent">o trabajo comunitario?</span>
      </div>
      <div style={{marginTop:"23px"}} className="containerOptionsExperience">
        <button
          style={{ width: "195px", height: "56px" }}
          className="btn btn-primary backOptionsExperience"
          onClick={()=>validadorComponente(4)}
        >
         <span style={{fontSize:"20px"}}>
         Si, añadir
         </span>
        </button>
        <button
          style={{ width: "195px", height: "56px" }}
          className="btn btn-primary backOptionsExperience"
        >
          <span style={{fontSize:"20px"}}>
          No, Continuar
          </span>
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
