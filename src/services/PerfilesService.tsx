import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
interface Perfiles {
  id: number;
  name: string;
}
export interface PerfilesSelect {
  id: number;
  disrupterId: number;
  perfiles: number[];
}

export const PerfilesService = async (): Promise<Perfiles[]> => {
  try {
    const response = await axios.get(`${API_URL}/perfiles`);
    return response.data as Perfiles[];
  } catch (error) {
    throw new Error("Error al obtener los perfiles");
  }
};

export const saveSelectPerfiles = async (data: PerfilesSelect)=> {
  try {
    const response = await axios.post(`${API_URL}/seleccionperfil`, data);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los perfiles");
  }
};

export const getPerfilesService = async (disrupterId:any): Promise<PerfilesSelect> => {
  try {
    const response = await axios.get(`${API_URL}/seleccionperfil/disrupter/${disrupterId}`,);
    return response.data as PerfilesSelect;
  } catch (error) {
    throw new Error("Error al obtener los perfiles");
  }
};
