import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

type MODELOTRABAJO = {
  disrupterId: number;
  modelos: string[];
};

export const SaveModeloTrabajo = async (values: any) => {
  try {
    const response = await axios.post(`${API_URL}/modelotrabajo`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar los modelos de trabajo");
  }
};

export const GetModelosTrabajoDisrupterId = async (
  disrupterId: number
): Promise<MODELOTRABAJO | string> => {
  try {
    const response = await axios.get(`${API_URL}/modelotrabajo/disrupterId/${disrupterId}`);
    return response.data as MODELOTRABAJO;
  } catch (error) {
    throw new Error("Error al obtener los modelos de trabajo del disrupter");
  }
};

export const GetModelosTrabajo = async (): Promise<string[]> => {
    try {
      const response = await axios.get(`${API_URL}/modelotrabajo/list`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los modelos de trabajo");
    }
  };

