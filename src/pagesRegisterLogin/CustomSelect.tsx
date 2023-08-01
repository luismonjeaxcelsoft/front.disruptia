import { Input, Select } from "antd";
import Aroow from "../assets/images/Aroow-46.png";
import { FC, useState } from "react";
import "../styles/CustomSelect.css";
import "antd/dist/reset.css";

interface CustomSelectProps {
  labelName?: string | undefined;
  options?: any;
  placeHolder?: string;
  name: string;
  styleLabel?: string;
  getDepartamento?: any;
  getCiudades?: any;
  payload?: any;
  setPayload?: any;
}

const CustomSelect: FC<CustomSelectProps> = ({
  labelName,
  options,
  placeHolder,
  name,
  styleLabel,
  getDepartamento,
  getCiudades,
  payload,
  setPayload,
}) => {
  const [labelInput, setLabelInput] = useState<any>("");
  const handleItemClick = (item: any) => {
    if (name === "pais" && item === 169) {
      getDepartamento(item);
    }

    if (name === "departamento") {
      getCiudades(item);
    }

    if (name === "pais" || name === "departamento") {
      const value = options.find((option: any) => option.value === item).label;
      setPayload({ ...payload, [name]: value });
    } else {
      setPayload({ ...payload, [name]: item });
    }
  };

  const onchange = (item: any) => {
    handleItemClick(item);
  };
  return (
    <div className="container-label-register">
      <label className={styleLabel}>{labelName}</label>
      <div style={{ display: "flex" }}>
        <Select
          className={
            name === "indicativo" ? "select-antd-indicativo" : "select-antd"
          }
          defaultValue={labelInput}
          placeholder={placeHolder}
          options={options}
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
