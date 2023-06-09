import { useState, FC } from "react";
import ValidateExperience from "./ValidateExperience";
import FormValidateExp from "./FormValidateExp";

type ValidateExpFatherProps = {
  setValidateImgs: any;
  validateImgs: any;
  setActiveTab: any;
};

const ValidateExpFather: FC<ValidateExpFatherProps> = ({
  setValidateImgs,
  validateImgs,
  setActiveTab,
}) => {
  const [validateComponent, setValidateComponent] = useState<number>(1);

  return (
    <div>
      {validateComponent === 1 ? (
        <ValidateExperience
          setValidateImgs={setValidateImgs}
          validateImgs={validateImgs}
          validadorComponente={setValidateComponent}
          setActiveTab={setActiveTab}
        />
      ) : validateComponent === 2 ? (
        <div>
          <FormValidateExp
            validateImgs={validateImgs}
            setValidateImgs={setValidateImgs}
            type={"experience"}
            setActiveTab={setActiveTab}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ValidateExpFather;
