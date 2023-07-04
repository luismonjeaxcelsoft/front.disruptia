import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type COMPLEMENTARIA = {
  id: number;
  disrupterId: number;
  nombreCurso: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  nombreInstitucion: string;
  paso: number;
};

export const SaveComplemento = async (values: any) => {
  try {
    const response = await axios.post(`${API_URL}/complementaria`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar la informacion complementaria");
  }
};

export const GetComplementoDisrupterId = async (
  disrupterId: number
): Promise<COMPLEMENTARIA[] | string> => {
  try {
    const response = await axios.get(`${API_URL}/complementaria/${disrupterId}`);
    return response.data as COMPLEMENTARIA[];
  } catch (error) {
    throw new Error("Error al obtener la informacion complementaria");
  }
};

export const DeleteComplemento = async (values: any) => {
  try {
    const response = await axios.delete(`${API_URL}/complementaria`, {
      data: values,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error al eliminar la informacion complementaria");
  }
};