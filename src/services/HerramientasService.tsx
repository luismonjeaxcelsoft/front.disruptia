import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type HERRAMIENTAOFIMATICA = {
  disrupterId: number;
  herramientas: HERRAMIENTA[];
  paso: number;
};

export type HERRAMIENTA = {
  id: number;
  herramienta: string;
  nivel: string;
};

export const SaveHerramientas = async (values: HERRAMIENTAOFIMATICA) => {
  try {
    const response = await axios.post(`${API_URL}/ofimatica`, values);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetHerramientasDisrupterId = async (
  disrupterId: number
): Promise<HERRAMIENTAOFIMATICA | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/ofimatica/disrupterId/${disrupterId}`
    );
    return response.data as HERRAMIENTAOFIMATICA;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetHerramientas = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_URL}/ofimatica/list`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
