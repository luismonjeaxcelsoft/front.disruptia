import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type HABILIDADSOFTWARE = {
  disrupterId: number;
  habilidades: HABILIDADES[];
};

type HABILIDADES = {
  habilidad: string;
  nivel: string;
};

type HABILIDADSOFTWAREUPDATE = {
  disrupterId: number;
  habilidad: string;
  nivel: string;
};

export const SaveHabilidadSoftware = async (values: HABILIDADSOFTWARE) => {
  try {
    const response = await axios.post(`${API_URL}/software`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar las habilidades");
  }
};

export const UpdateHabilidadNivel = async (values: HABILIDADSOFTWAREUPDATE) => {
  try {
    const response = await axios.put(`${API_URL}/software/nivel`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al editar el nivel");
  }
};

export const GetHabilidadDeSoftwareDisrupterId = async (
  disrupterId: number
): Promise<HABILIDADSOFTWARE | string> => {
  try {
    const response = await axios.get(`${API_URL}/software/disrupterId/${disrupterId}`);
    return response.data as HABILIDADSOFTWARE;
  } catch (error) {
    throw new Error("Error al obtener las habilidades del disrupter");
  }
};

export const GetHabilidadesSoftware = async (): Promise<string[]> => {
    try {
      const response = await axios.get(`${API_URL}/software/list`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener las habilidades de software");
    }
  };

  export const GetNiveles = async (): Promise<string[]> => {
    try {
      const response = await axios.get(`${API_URL}/software/listniveles`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los niveles");
    }
  };

