import { type } from "os";
import { useState, useEffect } from "react";
import { SidebarEmployees } from "../PagesEmployees/SidebarEmployees";
import RegisterForm from "./RegisterForm";
import PerfilLogin from "./PerfilLogin";
import FinishRegister from "./FinishRegister";

type INFO_PERSONAL = {
  numeroDocumento: number;
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  indicativo: string;
  celular: string;
  fechaNacimiento: string;
  pais: string;
  departamento: string;
  ciudad: string;
  role: string;
};

type PREGUNTAS_REGISTRO = {
  identidadGenero: string;
  orientacionSexual: string;
  comunidadCulturalEtnica: string;
  idiomaDialecto: string;
  idiomaDialectoTexto: string;
  area: string;
  cabezaHogar: string;
  discapacidad: string;
  nivelSocioEconomico: number;
};

type REGISTRO = {
  infoPersonal: INFO_PERSONAL;
  preguntasRegistro: PREGUNTAS_REGISTRO;
};

const INITIAL_VALUE = {
  infoPersonal: {
    numeroDocumento: 0,
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    indicativo: "",
    celular: "",
    fechaNacimiento: "",
    pais: "",
    departamento: "",
    ciudad: "",
    role: "",
  },
  preguntasRegistro: {
    identidadGenero: "",
    orientacionSexual: "",
    comunidadCulturalEtnica: "",
    idiomaDialecto: "",
    idiomaDialectoTexto: "",
    area: "",
    cabezaHogar: "",
    discapacidad: "",
    nivelSocioEconomico: 0,
  },
};

const Register = () => {
  const [request, setRequest] = useState<REGISTRO>(INITIAL_VALUE);
  const [pasoRegistro, setPasoRegistro] = useState<number>(1);

  return (
    <>
      <SidebarEmployees />
      {pasoRegistro === 1 && (
        <RegisterForm
          setRequest={setRequest}
          setPasoRegistro={setPasoRegistro}
          request={request}
        />
      )}

      {pasoRegistro === 2 && (
        <PerfilLogin
          setRequest={setRequest}
          pasoRegistro={pasoRegistro}
          setPasoRegistro={setPasoRegistro}
          request={request}
        />
      )}
      {pasoRegistro === 3 && (
        <FinishRegister
          setRequest={setRequest}
          request={request}
          pasoRegistro={pasoRegistro}
        />
      )}
    </>
  );
};

export default Register;
