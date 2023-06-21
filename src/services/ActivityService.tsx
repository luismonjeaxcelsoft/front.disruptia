import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type ACTIVIDAD = {
  id: number;
  nombreActividad: string;
  organizacion: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  tipoActividad: string;
};

export const CreateActivity = async (values: any) => {
  try {
    const response = await axios.post(`${API_URL}/extracurricular`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al crear la actividad");
  }
};

export const GetActivitiesId = async (id: number): Promise<ACTIVIDAD[] | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/extracurricular/${id}`
    );
    return response.data as ACTIVIDAD[];
  } catch (error) {
    throw new Error("Error al obtener las actividades");
  }
};

export const DeleteActivity = async (values: any) => {
  try {
    const response = await axios.delete(`${API_URL}/extracurricular`, {
      data: values,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error al eliminar la actividad");
  }
};
