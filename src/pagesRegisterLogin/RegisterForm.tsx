import { useState, useEffect } from "react";
import { Checkbox, DatePicker, Form, Input } from "antd";

import "../styles/RegisterPage.css";
import CustomSelect from "./CustomSelect";
import {
  GetCountries,
  GetDepartamento,
  GetCiudades,
  DEPARTAMENTO,
  COUNTRIES,
  CIUDAD,
} from "../services/EstudiesService";
import { useNavigate } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";
import moment from "moment";
import { SidebarEmployees } from "../PagesEmployees/SidebarEmployees";

type DATA = {
  label: string;
  value: number | string;
};

const RegisterForm = ({ setRequest, setPasoRegistro, request }: any) => {
  const navigate = useNavigate();
  const [valuesCountries, setvaluesCountries] = useState<DATA[]>([]);
  const [valuesCountriesPhone, setvaluesCountriesPhone] = useState<any[]>([]);
  const [valuesDept, setValuesDept] = useState<DATA[]>([]);
  const [municipality, setMunicipality] = useState<DATA[]>([]);
  const [age, setAge] = useState("");
  const [payload, setPayload] = useState(request.infoPersonal);
  const optionsTypeDocument = [
    {
      label: "Cedula de Ciudadania",
      value: "CC",
    },
    {
      label: "Cedula de Extranjeria",
      value: "CE",
    },
    {
      label: "Permiso de Trabajo",
      value: "PT",
    },
    {
      label: "Tajerta de Identidad",
      value: "TI",
    },
  ];
  const getPaises = async () => {
    const resCountries = await GetCountries();
    const infoPais = resCountries.map((pais: COUNTRIES) => {
      return {
        label: pais.nombrePais,
        value: pais.codigoPais,
      };
    });

    const infoPaisPhone = resCountries.map((pais: COUNTRIES) => {
      return {
        label: (
          <span style={{ display: "inline-block", marginRight: "8px" }}>
            <span>
              {pais.codigoTelefono} {pais.codigo} {"  "}
            </span>
            <img
              src={pais.bandera}
              alt="Bandera"
              style={{ width: "17px", height: "17px" }}
            />
          </span>
        ),
        value: pais.codigoTelefono,
      };
    });

    setvaluesCountries(infoPais);
    setvaluesCountriesPhone(infoPaisPhone);
  };

  const getDepartamento = async (paisId: number) => {
    const resDepartamento = await GetDepartamento(paisId);

    const infoDepartamento = resDepartamento.map(
      (departamento: DEPARTAMENTO) => {
        return {
          label: departamento.nombre,
          value: departamento.departamentoId,
        };
      }
    );

    setValuesDept(infoDepartamento);
  };

  const getCiudades = async (departamentoId: number) => {
    const resCiudades = await GetCiudades(departamentoId);

    const infoCiudades = resCiudades.map((ciudad: CIUDAD) => {
      return {
        label: ciudad.nombre,
        value: ciudad.nombre,
      };
    });

    setMunicipality(infoCiudades);
  };

  const handleDateChange = (e: any) => {
    calculateAge(e);

    const date = new Date(e.$d);
    const fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    setPayload({...payload, fechaNacimiento: fecha})
  };

  const calculateAge = (e: any) => {
    if (e) {
      const date = new Date(e.$d);
      const year = date.getFullYear();
      const today = moment();
      const years = today.year();
      const calculatorYears = years - year;
      setAge(calculatorYears.toString());
    } else {
      setAge("");
    }
  };

  const onchange = (e: any) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);

    setPayload({ ...payload, [name]: value });
  };

  const onContinuar = () => {
    setRequest({...request, infoPersonal: payload})
    setPasoRegistro(2);
  };

  useEffect(() => {
    getPaises();
  }, []);

  return (
    <>
      {/* <SidebarEmployees /> */}
      <div style={{ marginLeft: "70px", marginTop: "25px" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "488px" }}
        >
          <span className="title-register">Registro</span>
          <span className="sub-title-register">
            Crea tu perfil y consigue una oportunidad laboral
          </span>
        </div>
        <div style={{ marginTop: "51.2px" }}>
          <Form>
            <div className="container-register-user">
              <div>
                <div className="container-label-register">
                  <label className="label-register-form">Nombre</label>
                  <Input
                    placeholder="Andres"
                    className="input-text-register"
                    name="nombre"
                    onChange={onchange}
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Correo Electrónico
                  </label>
                  <Input
                    placeholder="andres@gmail.com"
                    className="input-text-register"
                    name="email"
                    onChange={onchange}
                  />
                </div>
                <CustomSelect
                  options={optionsTypeDocument}
                  labelName="Tipo de Documento"
                  placeHolder="Cédula de Ciudadanía"
                  name="tipoDocumento"
                  styleLabel="label-register-form"
                  payload={payload}
                  setPayload={setPayload}
                />
                <div className="container-label-register">
                  <label className="label-register-form">
                    Fecha de Nacimiento
                  </label>
                  <DatePicker
                    suffixIcon={
                      <CalendarOutlined style={{ color: "#F3CF46" }} />
                    }
                    placeholder="11/marzo/1998"
                    className="input-text-register"
                    style={{ color: "white !important" }}
                    onChange={(e: any) => {
                      handleDateChange(e);
                    }}
                  />
                </div>
                <CustomSelect
                  options={valuesCountries}
                  labelName="País de Residencia"
                  placeHolder="Colombia"
                  name="pais"
                  styleLabel="label-register-form"
                  getDepartamento={getDepartamento}
                  payload={payload}
                  setPayload={setPayload}
                />
                <div className="container-label-register">
                  <label className="label-register-form">Contraseña</label>
                  <Input
                    placeholder=""
                    className="input-text-register"
                    name="password"
                    type="password"
                    onChange={onchange}
                  />
                </div>
                <div
                  style={{ width: "140%", marginLeft: "15px" }}
                  className="container-label-register"
                >
                  <Checkbox>
                    <span
                      style={{
                        color: "white",
                        opacity: "0.7",
                        fontFamily: "Montserrat-Light",
                        fontSize: "8.5px",
                      }}
                    >
                      Aceptar politicas y tratamiento de datos
                    </span>
                  </Checkbox>
                </div>
              </div>
              <div style={{ marginLeft: "60px" }}>
                <div className="container-label-register">
                  <label className="label-register-form">Apellido</label>
                  <Input
                    placeholder="Beltrán"
                    className="input-text-register"
                    name="apellido"
                    onChange={onchange}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    // gridTemplateColumns: "1fr 1fr",
                    // gap: "4%",
                  }}
                >
                  <CustomSelect
                    options={valuesCountriesPhone}
                    labelName="Indicativo"
                    placeHolder="+57 COL"
                    name="indicativo"
                    styleLabel="label-register-form"
                    payload={payload}
                    setPayload={setPayload}
                  />
                  <div className="container-label-register-celular">
                    <label className="label-register-form">Celular</label>
                    <Input
                      placeholder="3284556790"
                      className="input-text-register"
                      name="celular"
                      onChange={onchange}
                    />
                  </div>
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Número de Documento
                  </label>
                  <Input
                    placeholder="1016784335"
                    className="input-text-register"
                    name="numeroDocumento"
                    onChange={onchange}
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">Edad</label>
                  <Input
                    placeholder="25"
                    className="input-text-register"
                    style={{ width: "108px" }}
                    value={age}
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4%",
                  }}
                >
                  <CustomSelect
                    options={valuesDept}
                    labelName="Departamento"
                    placeHolder="Antioquia"
                    name="departamento"
                    styleLabel="label-register-form"
                    getCiudades={getCiudades}
                    payload={payload}
                    setPayload={setPayload}
                  />
                  <CustomSelect
                    options={municipality}
                    labelName="Ciudad"
                    placeHolder="Medellin"
                    name="ciudad"
                    styleLabel="label-register-form"
                    payload={payload}
                    setPayload={setPayload}
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Confirmar Contraseña
                  </label>
                  <Input
                    placeholder=""
                    type="password"
                    className="input-text-register"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                marginLeft: "230px",
                marginTop: "20px",
                width: "80%",
              }}
            >
              <button
                onClick={() => {
                  onContinuar();
                }}
                className="button-register-submit"
              >
                <span
                  style={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: "20px",
                    color: "#4D1AE8",
                  }}
                >
                  Continuar
                </span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
