import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type PERFILREDACTADO = {
  disrupterId: number;
  perfil: string
}

type VALIDARCONCHATGPT = {
  disrupterId: number;
  mensaje: string;
  paso: number
}

export const SavePerfilRedactado = async (values: PERFILREDACTADO) => {
  try {
    const response = await axios.post(`${API_URL}/perfilgpt`, values);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetPerfilDisrupterId = async (id: number): Promise<PERFILREDACTADO | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/perfilgpt/${id}`
    );
    return response.data;
   } catch (error: any) {
    return error.response.data
   }
};

export const ValidarPerfilRedactado = async (values: VALIDARCONCHATGPT) => {
  try {
    const response = await axios.post(`${API_URL}/chatgpt`, values);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};


