import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type MANEJOIDIOMA = {
  disrupterId: number;
  idiomas: IDIOMA[];
};

export type IDIOMA = {
  id: number;
  idioma: string;
  nivel: string;
};

export const SaveIdiomas = async (values: MANEJOIDIOMA) => {
  try {
    const response = await axios.post(`${API_URL}/idiomas`, values);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetIdiomasDisrupterId = async (
  disrupterId: number
): Promise<MANEJOIDIOMA | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/idiomas/disrupterId/${disrupterId}`
    );
    return response.data as MANEJOIDIOMA;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetIdiomas = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_URL}/idiomas/list`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
