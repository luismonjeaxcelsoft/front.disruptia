import { useState, FC } from "react";
import NotExperience from "./NotExperience";
import FormValidateExp from "./FormValidateExp";

type ComunityFatherProps = {
  setValidateImgs: any;
  validateImgs: any;
};

const ComunityFather: FC<ComunityFatherProps> = ({
  setValidateImgs,
  validateImgs,
}) => {
  const [formComponent, setFormComponent] = useState(false);

  return (
    <div>
      {!formComponent ? (
        <NotExperience
          setValidateImgs={setValidateImgs}
          validateImgs={validateImgs}
          setFormComponent={setFormComponent}
        />
      ) : (
        <FormValidateExp
          setValidateImgs={setValidateImgs}
          validateImgs={validateImgs}
          type={"additionalActivity"}
        />
      )}
    </div>
  );
};

export default ComunityFather;
