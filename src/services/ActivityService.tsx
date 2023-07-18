import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type ACTIVIDAD = {
  id: number;
  nombreActividad: string;
  organizacion: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  tipoActividad: string;
};

export const CreateActivity = async (values: ACTIVIDAD) => {
  try {
    const response = await axios.post(`${API_URL}/extracurricular`, values);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetActivitiesId = async (
  id: number
): Promise<ACTIVIDAD[] | string> => {
  try {
    const response = await axios.get(`${API_URL}/extracurricular/${id}`);
    return response.data as ACTIVIDAD[];
  } catch (error: any) {
    return error.response.data;
  }
};

export const DeleteActivity = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/extracurricular/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
