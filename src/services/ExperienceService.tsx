import axios from "axios";
import { type } from "os";

const API_URL = import.meta.env.VITE_API_URL;

type EXPERIENCE = {
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

export const SaveExperience = async (values: any) => {
  try {
    const response = await axios.post(`${API_URL}/experiencia`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar la experiencia");
  }
};

export const GetExperienceDisrupterId = async (
  disrupterId: number
): Promise<EXPERIENCE[] | string> => {
  try {
    const response = await axios.get(`${API_URL}/experiencia/${disrupterId}`);
    return response.data as EXPERIENCE[];
  } catch (error) {
    throw new Error("Error al obtener la experiencia");
  }
};

export const DeleteExperience = async (values: any) => {
  try {
    const response = await axios.delete(`${API_URL}/experiencia`, {
      data: values,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error al eliminar la experiencia");
  }
};
