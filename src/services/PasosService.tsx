import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const GetPasos = async (id: number): Promise<number[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/pasos/${id}`
    );
    return response.data;
   } catch (error: any) {
    throw new Error("Error al traer el perfil");
   }
};

