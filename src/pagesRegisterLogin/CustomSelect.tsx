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
  info: string;
  styleLabel?: string;
  getDepartamento?: any;
  getCiudades?: any;
  request?: any;
  setRequest?: any;
}

const CustomSelect: FC<CustomSelectProps> = ({
  labelName,
  options,
  placeHolder,
  name,
  info,
  styleLabel,
  getDepartamento,
  getCiudades,
  request,
  setRequest,
}) => {
  const handleItemClick = (item: any) => {
    if (name === "pais" && item === 169) {
      getDepartamento(item);
    }

    if (name === "departamento") {
      getCiudades(item);
    }

    if (name === "pais" || name === "departamento") {
      const value = options.find((option: any) => option.value === item).label;

      const newRequest = { ...request };

      newRequest[info][name] = value;

      setRequest(newRequest);
    } else {
      const newRequest = { ...request };

      newRequest[info][name] = item;

      setRequest(newRequest);
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
          value={request[info][name]}
          placeholder={placeHolder}
          options={options}
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
