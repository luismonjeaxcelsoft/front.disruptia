import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import Experiencia from "../assets/images/Experiencia.png";
import "../styles/ValidateExperience.css";
import { FC } from "react";

type ValidateExperienceProps = {
  validadorComponente: React.Dispatch<number>;
};

const ValidateExperience: FC<ValidateExperienceProps> = ({
  validadorComponente,
}) => {

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
            style={{ fontSize: "70px", color: "white", marginLeft: "120px" }}
          >
            ¿Has tenido
          </span>
          <p />
          <span style={{ fontSize: "70px", color: "white" }}>
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
            ¡Si!
            <SmileOutlined className="iconFaceDown" />
          </button>
          <button
            onClick={() => validadorComponente(3)}
            style={{ width: "265px", height: "87px" }}
            className="btn btn-primary backOptionsExperience"
          >
            No, nunca
            <FrownOutlined className="iconFaceDown" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValidateExperience;
