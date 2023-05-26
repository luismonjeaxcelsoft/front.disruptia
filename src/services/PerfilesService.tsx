import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
interface Perfiles {
  id: number;
  name: string;
}
interface perfilesSelect {
  disrupterId: number;
  perfilesId: Array<number>;
}

export const PerfilesService = async (): Promise<Perfiles[]> => {
  try {
    const response = await axios.get(`${API_URL}/perfiles`);
    return response.data as Perfiles[];
  } catch (error) {
    throw new Error("Error al obtener los perfiles");
  }
};

export const perfilesSelect = async (disrupterId:number,perfilesId:Array<number>): Promise<perfilesSelect[]> => {
  try {
    const response = await axios.post(`${API_URL}/seleccionperfil`, {
      body: {
        disrupterId:disrupterId,
        perfilesId:perfilesId
      }
    });
    return response.data as perfilesSelect[];
  } catch (error) {
    throw new Error("Error al cargar los perfiles");
  }
};
