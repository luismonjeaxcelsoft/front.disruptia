import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import Experiencia from "../assets/images/Experiencia.png";
import "../styles/ValidateExperience.css";
import {FC} from 'react'

type ValidateExperienceProps = {
    validadorComponente: React.Dispatch<number>;
}

const ValidateExperience: FC <ValidateExperienceProps> = ({validadorComponente}) => {
  return (
    <div className="containerValidateExperience">
      <div>
        <img style={{ width: "800px" }} src={Experiencia} />
      </div>
      <div className="containerBodyExperience">
        <span style={{ fontSize: "70px", color: "white" }}>
          ¿Has tenido experiencia laboral?
        </span>
        <div className="containerOptionsExperience">
          <button onClick={()=>validadorComponente(2)} className="btn btn-primary backOptionsExperience">
            ¡Si!
            <SmileOutlined className="iconFaceDown" />
          </button>
          <button className="btn btn-primary backOptionsExperience">
            No, nunca
            <FrownOutlined className="iconFaceDown" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValidateExperience;
