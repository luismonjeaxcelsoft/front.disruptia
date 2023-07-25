import { useState, useEffect } from "react";
import { Checkbox, DatePicker, Form, Input } from "antd";
import { Sidebar } from "../components/Sidebar";
import "../styles/RegisterPage.css";
import CustomSelect from "./CustomSelect";
import { GetCountries, GetMunicipality } from "../services/EstudiesService";
import { useNavigate } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";
import moment from "moment";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [valuesCountries, setvaluesCountries] = useState<any[]>([]);
  const [municipality, setMunicipality] = useState<any[]>([]);
  const [age, setAge] = useState("");
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
    const getMunicipalities = await GetMunicipality();

    let infoPais = resCountries.map((pais: any) => {
      return {
        label: pais.nombrePais,
        value: pais.codigoPais,
      };
    });

    let infoMunicipio = getMunicipalities.map((municipio: any) => {
      return {
        label: municipio.municipioDepartamento,
        value: municipio.municipioId,
      };
    });
    setvaluesCountries(infoPais);
    setMunicipality(infoMunicipio);
  };
  const handleDateChange = (e: any) => {  
    calculateAge(e);
  };
  
  const calculateAge = (e: any) => {
    const fecha = moment(e)   
    if (e) {
      const today = moment(); 
      const formattedDate = moment(fecha) // Convertimos la fecha seleccionada al formato "YYYY-MM-DD"
      const yearsDiff = today.diff(formattedDate, 'years');
      setAge(yearsDiff.toString());
    } else {
      setAge('');
    }
  };
  useEffect(() => {
    getPaises();
  }, []);

  return (
    <>
      <Sidebar
        subTitle=""
        smallTitle=""
        backColor={false}
        img={false}
        video={false}
      />
      <div style={{ marginLeft: "-600px", marginTop: "50px" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "140%" }}
        >
          <span className="title-register">Registro</span>
          <span className="sub-title-register">
            Crea tu perfil y consigue una oportunidad laboral
          </span>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Form>
            <div className="container-register-user">
              <div>
                <div className="container-label-register">
                  <label className="label-register-form">Nombre</label>
                  <Input placeholder="Andres" className="input-text-register" />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Correo Electrónico
                  </label>
                  <Input
                    placeholder="andres@gmail.com"
                    className="input-text-register"
                  />
                </div>
                <CustomSelect
                  options={optionsTypeDocument}
                  labelName="Tipo de Documento"
                  placeHolder="Cédula de Ciudadanía"
                  name="tipDocumento"
                  classStyle="input-text-register"
                  styleImg="imgCustom-register"
                  styleLabel="label-register-form"
                />
                <div className="container-label-register">
                  <label className="label-register-form">
                    Fecha de Nacimiento
                  </label>
                  <DatePicker
                    suffixIcon={
                      <CalendarOutlined  style={{ color: "#F3CF46" }} />
                    }
                    placeholder="11/marzo/1998"
                    className="input-text-register"
                    style={{ color: "white !important" }}
                    onChange={(e:any)=>{handleDateChange(e)}}
                  />
                </div>
                <CustomSelect
                  options={valuesCountries}
                  labelName="País de Residencia"
                  placeHolder="Colombia"
                  name="pais"
                  classStyle="input-text-register"
                  styleImg="imgCustom-register"
                  styleLabel="label-register-form"
                />
                <div className="container-label-register">
                  <label className="label-register-form">Contraseña</label>
                  <Input placeholder="" className="input-text-register" />
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
                        fontSize: "12px",
                      }}
                    >
                      Aceptar politicas y tratamiento de datos
                    </span>
                  </Checkbox>
                </div>
              </div>
              <div>
                <div className="container-label-register">
                  <label className="label-register-form">Apellido</label>
                  <Input
                    placeholder="Beltrán"
                    className="input-text-register"
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4%",
                  }}
                >
                  <div className="container-label-register">
                    <label className="label-register-form">Celular</label>
                    <Input
                      placeholder="3284556790"
                      className="input-text-register"
                    />
                  </div>
                  <div className="container-label-register">
                    <label className="label-register-form">Telefono Fijo</label>
                    <Input
                      placeholder="601345609"
                      className="input-text-register"
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
                    options={municipality}
                    labelName="Departamento"
                    placeHolder="Antioquia"
                    name="departamento"
                    classStyle="input-text-register"
                    styleImg="imgCustom-register"
                    styleLabel="label-register-form"
                  />
                  <CustomSelect
                    options={optionsTypeDocument}
                    labelName="Ciudad"
                    placeHolder="Medellin"
                    name="pais"
                    classStyle="input-text-register"
                    styleImg="imgCustom-register"
                    styleLabel="label-register-form"
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
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => {
                  navigate("/profileUser");
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
