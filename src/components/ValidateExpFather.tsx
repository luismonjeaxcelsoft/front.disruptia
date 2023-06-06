import {useState,FC} from 'react'
import ValidateExperience from "./ValidateExperience";
import FormValidateExp from "./FormValidateExp";

type ValidateExpFatherProps = {
  setValidateImgs:any,
  validateImgs:any
}

const ValidateExpFather:FC <ValidateExpFatherProps> = ({setValidateImgs,validateImgs}) => {
  const [validateComponent, setValidateComponent] = useState<number>(1);
  
  return (
    <div>
      {validateComponent === 1 ? 
        <ValidateExperience
        setValidateImgs={setValidateImgs}
        validateImgs={validateImgs}
        validadorComponente={setValidateComponent} />
       : validateComponent === 2 ?
       <div>
         <FormValidateExp
            validateImgs={validateImgs}
            setValidateImgs={setValidateImgs}
         type={"experience"}/>
       </div>  : ""
      }
    </div>
  );
};

export default ValidateExpFather;
