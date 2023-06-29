import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type HABILIDADDESARROLLADA = {
  disrupterId: number;
  habilidades: string[];
};

export const SaveHabilidadDesarrollada = async (values: HABILIDADDESARROLLADA) => {
  try {
    const response = await axios.post(`${API_URL}/habilidades`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar las habilidades");
  }
};

export const GetHabilidadDesarrolladaDisrupterId = async (
  disrupterId: number
): Promise<HABILIDADDESARROLLADA[] | string> => {
  try {
    const response = await axios.get(`${API_URL}/habilidades/disrupterId/${disrupterId}`);
    return response.data as HABILIDADDESARROLLADA[];
  } catch (error) {
    throw new Error("Error al obtener las habilidades del disrupter");
  }
};

export const GetHabilidadesDesarrolladas = async (): Promise<string[]> => {
    try {
      const response = await axios.get(`${API_URL}/habilidades/list`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener las habilidades de trabajo");
    }
  };

