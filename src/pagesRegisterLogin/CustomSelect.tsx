import { Input } from "antd";
import Aroow from "../assets/images/Aroow-46.png";
import { FC, useState } from "react";
import "../styles/CustomSelect.css";
interface CustomSelectProps {
  labelName?: string | undefined;
  options?: any;
  placeHolder?: string;
  name?: string;
  classStyle?:string;
  styleImg?:string;
  styleLabel?:string
}

const CustomSelect: FC<CustomSelectProps> = ({
  labelName,
  options,
  placeHolder,
  name,
  classStyle,
  styleImg,
  styleLabel
}) => {
  const [containerOptions, setContainerOptions] = useState<boolean>(false);
  const [labelInput, setLabelInput] = useState<any>("");
  const handleItemClick = (itemLabel: string) => {
    setLabelInput(itemLabel);
    setContainerOptions(false);
  };
  return (
    <div className="container-label-register">
      <label className={styleLabel}>{labelName}</label>
      <div style={{ display: "flex" }}>
        <Input
          placeholder={placeHolder}
          className={classStyle}
          value={labelInput}
          name={name}
        />
        <img
          onClick={() => setContainerOptions(!containerOptions)}
          className={styleImg}
          alt="flecha_abajo"
          src={Aroow}
        />
      </div>
      {containerOptions && (
        <div className="containerItems-custom">
          {options?.map((item: any) => (
            <div
            onClick={() => handleItemClick(item.label)}
              className="container-items-selector"
            >
              <span className="items-select-custom">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
