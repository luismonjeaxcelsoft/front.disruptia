import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import Experiencia from "../assets/images/Experiencia.png";
import "../styles/ValidateExperience.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/disruptialogo.png";
type ValidateExperienceProps = {
  validadorComponente: React.Dispatch<number>;
  setValidateImgs: any;
  validateImgs: any;
  setActiveTab:any
};

const ValidateExperience: FC<ValidateExperienceProps> = ({
  validadorComponente,
  setValidateImgs,
  validateImgs,
  setActiveTab
}) => {
  const navigate = useNavigate();
  return (
    <div className="containerValidateExperience">
      <div
        style={{
          position: "relative",
          marginLeft: "-5%",
        }}
      >
        <img style={{ width: "800px" }} src={Experiencia} />
      </div>
      <div className="containerBodyExperience">
        <div>
          <span
            style={{ fontSize: "60px", color: "white", marginLeft: "120px",fontFamily:"Montserrat-Bold" }}
          >
            ¿Has tenido
          </span>
          <p />
          <span style={{ fontSize: "60px", color: "white",fontFamily:"Montserrat-Bold" }}>
            experiencia laboral?
          </span>
        </div>
        <div className="containerOptionsExperience">
          <button
            onClick={() => {
              validadorComponente(2);
            }}
            style={{ width: "250px", height: "87px" }}
            className="btn btn-primary backOptionsExperience"
          >
            ¡Sí!
            <SmileOutlined className="iconFaceDown" />
          </button>
          <button
            onClick={() => {
              validadorComponente(3);
              setValidateImgs([...validateImgs, "4"]);
              navigate("/perfiles/4");
              setActiveTab("4")
            }}
            style={{ width: "265px", height: "87px" }}
            className="btn btn-primary backOptionsExperience"
          >
            No, nunca
            <FrownOutlined className="iconFaceDown" />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "135px",
            marginLeft:"-102%",

          }}
        >
          <img style={{ width: "100px" }} alt="" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default ValidateExperience;
