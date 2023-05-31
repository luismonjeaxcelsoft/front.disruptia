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
type ESTUDIES = {
  id: number;
  disrupterId: number;
  estudioId: number;
  nombreCurso: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: false;
  nombreInstitucion: string;
  tipoEstudio: string;
  paisId: number;
  ciudadId: number;
};

export const FormationAcademy = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/formacionacademica/tipoestudio`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener las formaciones");
  }
};

export const GetCountries = async (): Promise<COUNTRIES[]> => {
  try {
    const response = await axios.get(`${API_URL}/formacionacademica/paises`);
    return response.data as COUNTRIES[];
  } catch (error) {
    throw new Error("Error al obtener los paises");
  }
};

export const GetMunicipality = async (): Promise<MUNICIPALITY[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/formacionacademica/municipios/${169}`
    );
    return response.data as MUNICIPALITY[];
  } catch (error) {
    throw new Error("Error al obtener los Municipios");
  }
};

export const CreateStudy = async (values: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/formacionacademica/estudios`,
      values
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al crear los estudios");
  }
};

export const GetStudiesId = async (id:number): Promise<ESTUDIES[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/formacionacademica/estudios/${id}`
    );
    return response.data as ESTUDIES[];
  } catch (error) {
    throw new Error("Error al obtener los estudios");
  }
};
