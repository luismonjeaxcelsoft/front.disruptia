import axios from "axios";

const API_URL = import.meta.env.VITE_API_AUTH_URL;

export type INFO_PERSONAL = {
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

export type PREGUNTAS_REGISTRO = {
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

export type REGISTRO = {
  infoPersonal: INFO_PERSONAL;
  preguntasRegistro: PREGUNTAS_REGISTRO;
};

export type CONFIRMAR_REGISTRO = {
  email: string;
  codeConfirmation: string;
};

  export const SaveRegistro = async (data: REGISTRO) => {
    try {
      const response = await axios.post(
        `${API_URL}/signUp`, data
      );
      return response.data;
     } catch (error: any) {
      throw new Error("Error al Registrar");
     }
  };

  export const ConfirmarRegistro = async (data: CONFIRMAR_REGISTRO) => {
    try {
      const response = await axios.post(
        `${API_URL}/confirm`, data
      );
      return response.data;
     } catch (error: any) {
      throw new Error("Error al confirmar el email");
     }
  };