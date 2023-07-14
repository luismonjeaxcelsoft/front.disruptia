import { Input } from "antd";
import Aroow from "../assets/images/Aroow-46.png";
import { FC, useState } from "react";
interface CustomSelectProps {
  labelName?: string | undefined;
  options?: any;
}

const CustomSelect: FC<CustomSelectProps> = ({ labelName, options }) => {
  const [containerOptions, setContainerOptions] = useState<boolean>(false);
  return (
    <div className="container-label-register">
      <label className="label-register-form">{labelName}</label>
      <div style={{ display: "flex" }}>
        <Input
          placeholder="Cédula de ciudadania"
          className="input-text-register"
        />
        <div
          style={{ position: "absolute", marginTop: "9px", marginLeft: "57%" }}
        >
          <img
            onClick={() => setContainerOptions(!containerOptions)}
            style={{ width: "40px", cursor: "pointer" }}
            alt="flecha_abajo"
            src={Aroow}
          />
        </div>
      </div>
      {containerOptions && (
        <div style={{ background: "white", borderRadius: "20px",display:"flex",flexDirection: "column"}}>
          {options?.map((item: any) => (
            <span>{item.label}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
