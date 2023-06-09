import { useState, FC } from "react";
import NotExperience from "./NotExperience";
import FormValidateExp from "./FormValidateExp";

type ComunityFatherProps = {
  setValidateImgs: any;
  validateImgs: any;
  setActiveTab:any
};

const ComunityFather: FC<ComunityFatherProps> = ({
  setValidateImgs,
  validateImgs,
  setActiveTab
}) => {
  const [formComponent, setFormComponent] = useState(false);

  return (
    <div>
      {!formComponent ? (
        <NotExperience
          setValidateImgs={setValidateImgs}
          validateImgs={validateImgs}
          setFormComponent={setFormComponent}
          setActiveTab={setActiveTab}

        />
      ) : (
        <FormValidateExp
          setValidateImgs={setValidateImgs}
          validateImgs={validateImgs}
          type={"additionalActivity"}
          setActiveTab={setActiveTab}

        />
      )}
    </div>
  );
};

export default ComunityFather;
