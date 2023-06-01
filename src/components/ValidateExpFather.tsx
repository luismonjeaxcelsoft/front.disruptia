import { useState} from "react";
import ValidateExperience from "./ValidateExperience";
import FormValidateExp from "./FormValidateExp";



const ValidateExpFather = () => {
  const [validateComponent, setValidateComponent] = useState<number>(1);
  return (
    <div>
      {validateComponent === 1 ? (
        <ValidateExperience validadorComponente={setValidateComponent} />
      ) : (
       <div>
         <FormValidateExp/>
       </div>
      )}
    </div>
  );
};

export default ValidateExpFather;
