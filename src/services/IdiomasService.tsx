import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type IDIOMAS = {
  disrupterId: number;
  idiomas: SUBIDIOMA[];
};

type SUBIDIOMA = {
    idioma: string,
    nivel: string,
}

export const SaveIdiomas = async (values: any) => {
  try {
    const response = await axios.post(`${API_URL}/idiomas`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar los idiomas");
  }
};

export const GetIdiomasDisrupterId = async (
  disrupterId: number
): Promise<IDIOMAS | string> => {
  try {
    const response = await axios.get(`${API_URL}/idiomas/disrupterId/${disrupterId}`);
    return response.data as IDIOMAS;
  } catch (error) {
    throw new Error("Error al obtener los idiomas del disrupter");
  }
};

export const GetIdiomas = async (): Promise<string[]> => {
    try {
      const response = await axios.get(`${API_URL}/idiomas/list`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los idiomas");
    }
  };

