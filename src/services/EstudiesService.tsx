import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type COUNTRIES = {
  codigoPais: number;
  nombrePais: string;
};

type MUNICIPALITY = {
  municipioDepartamento: string;
  municipioId: number;
  departamentoId: number;
  codigoPais: number;
  nombrePais: string;
};
export type ESTUDIES = {
  id: number;
  disrupterId: number;
  nombreCurso: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  nombreInstitucion: string;
  tipoEstudio: string;
  pais: string;
  ciudad: string;
  modalidad: string;
};

export const FormationAcademy = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/formacionacademica/tipoestudio`
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetModalidad = async () => {
  try {
    const response = await axios.get(`${API_URL}/formacionacademica/modalidad`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetCountries = async (): Promise<COUNTRIES[]> => {
  try {
    const response = await axios.get(`${API_URL}/formacionacademica/paises`);
    return response.data as COUNTRIES[];
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetMunicipality = async (): Promise<MUNICIPALITY[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/formacionacademica/municipios/${169}`
    );
    return response.data as MUNICIPALITY[];
  } catch (error: any) {
    return error.response.data;
  }
};

export const CreateStudy = async (values: ESTUDIES) => {
  try {
    const response = await axios.post(`${API_URL}/formacionacademica`, values);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetStudiesId = async (id: number): Promise<ESTUDIES[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/formacionacademica/estudios/${id}`
    );
    return response.data as ESTUDIES[];
  } catch (error: any) {
    return error.response.data;
  }
};

export const DeleteStudie = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/formacionacademica/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
