import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type REFERENCE = {
  id: number;
  disrupterId: number;
  tipoReferencia: string;
  nombreCompleto: string;
  relacion: string;
  correo: string;
  celular: string;
  empresa: string;
  cargo: string;
};

export const SaveReference = async (values: REFERENCE) => {
  try {
    const response = await axios.post(`${API_URL}/referencias`, values);
    return response.data;
  } catch (error) {
    throw new Error("Error al guardar la referencia");
  }
};

export const GetReferencesDisrupterId = async (id: number): Promise<REFERENCE[] | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/referencias/disrupterId/${id}`
    );
    return response.data;
   } catch (error) {
    return "No se encontraron referencias para este disrupter"
    //  throw new Error("Error al obtener las referencias");
   }
};

export const DeleteReference = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/referencias/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al eliminar la referencia");
  }
};
