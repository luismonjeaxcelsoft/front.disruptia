import { useState, FC } from "react";
import NotExperience from "./NotExperience";
import FormValidateExp from "./FormValidateExp";

const ComunityFather= () => {
  const [formComponent, setFormComponent] = useState(false);

  return (
    <div>
      {!formComponent ? (
        <NotExperience
          setFormComponent={setFormComponent}

        />
      ) : (
        <FormValidateExp
          type={"additionalActivity"}

        />
      )}
    </div>
  );
};

export default ComunityFather;
