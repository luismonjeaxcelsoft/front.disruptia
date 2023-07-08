import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export type EXPERIENCE = {
  id: number;
  disrupterId: number;
  nombreEmpresa: string;
  cargo: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  logros: string;
  paso: number;
};

export const SaveExperience = async (values: EXPERIENCE) => {
  try {
    const response = await axios.post(`${API_URL}/experiencia`, values);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetExperienceDisrupterId = async (
  disrupterId: number
): Promise<EXPERIENCE[] | string> => {
  try {
    const response = await axios.get(`${API_URL}/experiencia/${disrupterId}`);
    return response.data as EXPERIENCE[];
  } catch (error: any) {
    return error.response.data;
  }
};

export const DeleteExperience = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/experiencia/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
