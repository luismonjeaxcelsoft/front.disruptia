import axios from "axios";

const API_URL = import.meta.env.VITE_API_AUTH_URL;

export type IDENTIDAD_GENERO = {
  descripcion: string;
  caracteristica: string;
}

export const GetIdentidadGenero = async (): Promise<IDENTIDAD_GENERO[] | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/identidadGeneros`
    );
    return response.data;
   } catch (error: any) {
    throw new Error("Error al traer la identidad de Generos");
   }
};

export const GetOrientacionSexual = async (): Promise<string[]> => {
    try {
      const response = await axios.get(
        `${API_URL}/orientacionSexual`
      );
      return response.data;
     } catch (error: any) {
      throw new Error("Error al traer la Orientacion Sexual");
     }
  };

  export const GetComunidadCulturalEtnica = async (): Promise<string[]> => {
    try {
      const response = await axios.get(
        `${API_URL}/comunidadCulturalEtnica`
      );
      return response.data;
     } catch (error: any) {
      throw new Error("Error al traer la Comunidad");
     }
  };

  export const GetDiscapacidad = async (): Promise<string[]> => {
    try {
      const response = await axios.get(
        `${API_URL}/discapacidad`
      );
      return response.data;
     } catch (error: any) {
      throw new Error("Error al traer las discapacidades");
     }
  };