import { useState, FC } from "react";
import ValidateExperience from "./ValidateExperience";
import FormValidateExp from "./FormValidateExp";


const ValidateExpFather = () => {

  const [validateComponent, setValidateComponent] = useState<number>(1);

  return (
    <div>
      {validateComponent === 1 ? (
        <ValidateExperience
          validadorComponente={setValidateComponent}
        />
      ) : validateComponent === 2 ? (
        <div>
          <FormValidateExp
            type={"experience"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ValidateExpFather;
