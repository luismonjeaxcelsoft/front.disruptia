import { type } from "os";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarEmployees } from "../PagesEmployees/SidebarEmployees";
import RegisterForm from "./RegisterForm";
import PerfilLogin from "./PerfilLogin";
import FinishRegister from "./FinishRegister";
import { ConfirmarRegistro, REGISTRO, SaveRegistro } from "../services/RegisterService";



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
    role: "ROLE_DISRUPTER",
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
  const navigate = useNavigate();
  const [request, setRequest] = useState<REGISTRO>(INITIAL_VALUE);
  const [pasoRegistro, setPasoRegistro] = useState<number>(1);

  const onRegister = async() => {
    console.log(request);
    await SaveRegistro(request);
    // onConfirmar();    
  }

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
          setPasoRegistro={setPasoRegistro}
          onRegister={onRegister}
        />
      )}
    </>
  );
};

export default Register;
