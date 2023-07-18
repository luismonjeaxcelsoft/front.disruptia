import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type COMPLEMENTARIA = {
  id: number;
  disrupterId: number;
  nombreCurso: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  nombreInstitucion: string;
};

export const SaveComplemento = async (values: COMPLEMENTARIA) => {
  try {
    const response = await axios.post(`${API_URL}/complementaria`, values);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetComplementoDisrupterId = async (
  disrupterId: number
): Promise<COMPLEMENTARIA[] | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/complementaria/${disrupterId}`
    );
    return response.data as COMPLEMENTARIA[];
  } catch (error: any) {
    return error.response.data;
  }
};

export const DeleteComplemento = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/complementaria/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
