import axios from "axios";
import { type } from "os";

const API_URL = import.meta.env.VITE_API_URL;

type HERRAMIENTA = {
  disrupterId: number;
  herramientas: SUBHERRAMIENTA[];
};

type SUBHERRAMIENTA = {
    herramienta: string,
    nivel: number,
}

export const SaveHerramientas = async (values: any) => {
  try {
    const response = await axios.post(`${API_URL}/ofimatica`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar las herramientas");
  }
};

export const GetHerramientasDisrupterId = async (
  disrupterId: number
): Promise<HERRAMIENTA[] | string> => {
  try {
    const response = await axios.get(`${API_URL}/ofimatica/disrupterId/${disrupterId}`);
    return response.data as HERRAMIENTA[];
  } catch (error) {
    throw new Error("Error al obtener las herramientas del disrupter");
  }
};

export const GetHerramientas = async (): Promise<string[]> => {
    try {
      const response = await axios.get(`${API_URL}/ofimatica/list`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener las herramientas");
    }
  };

