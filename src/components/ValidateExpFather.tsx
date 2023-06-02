import { useState} from "react";
import ValidateExperience from "./ValidateExperience";
import FormValidateExp from "./FormValidateExp";
import NotExperience from "./NotExperience";



const ValidateExpFather = () => {
  const [validateComponent, setValidateComponent] = useState<number>(1);
  return (
    <div>
      {validateComponent === 1 ? 
        <ValidateExperience validadorComponente={setValidateComponent} />
       : validateComponent === 2 ?
       <div>
         <FormValidateExp type={"experience"}/>
       </div> : validateComponent === 3 ? <div>
        <NotExperience validadorComponente={setValidateComponent}/>
       </div> : <div>
       <FormValidateExp type={"additionalCurse"}/>
       </div>
      }
    </div>
  );
};

export default ValidateExpFather;
