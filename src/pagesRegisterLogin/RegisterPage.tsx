import { useState, useEffect } from "react";
import { Checkbox, Form, Input } from "antd";
import { Sidebar } from "../components/Sidebar";
import "../styles/RegisterPage.css";
import CustomSelect from "./CustomSelect";
import { GetCountries, GetMunicipality } from "../services/EstudiesService";
const RegisterPage = () => {
  const [valuesCountries, setvaluesCountries] = useState<any[]>([]);
  const [municipality, setMunicipality] = useState<any[]>([]);
  console.log(
    "🚀 ~ file: RegisterPage.tsx:10 ~ RegisterPage ~ municipality:",
    municipality
  );
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
      <div style={{ marginLeft: "-660px", marginTop: "50px" }}>
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
                    Correo electrónico
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
                />
                <div className="container-label-register">
                  <label className="label-register-form">
                    Fecha de nacimiento
                  </label>
                  <Input
                    placeholder="11/marzo/1998"
                    className="input-text-register"
                  />
                </div>
                <CustomSelect
                  options={valuesCountries}
                  labelName="País de residencia"
                  placeHolder="Colombia"
                  name="pais"
                  classStyle="input-text-register"
                  styleImg="imgCustom-register"
                />
                <div className="container-label-register">
                  <label className="label-register-form">Contraseña</label>
                  <Input
                    placeholder="Colombia"
                    className="input-text-register"
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
                    <label className="label-register-form">Telefono fijo</label>
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
                <CustomSelect
                  options={optionsTypeDocument}
                  labelName="Edad"
                  placeHolder="25"
                  name="edad"
                  classStyle="input-text-register-ege"
                  styleImg="imgCustom-register-eges"
                />
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
                  />
                  <CustomSelect
                    options={optionsTypeDocument}
                    labelName="Ciudad"
                    placeHolder="Medellin"
                    name="pais"
                    classStyle="input-text-register"
                    styleImg="imgCustom-register"
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Confirmar Contraseña
                  </label>
                  <Input
                    placeholder="Antioquia"
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
              <button className="button-register-submit">
                <span
                  style={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: "20px",
                    color: "#4D1AE8",
                  }}
                >
                  Registrarme
                </span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
