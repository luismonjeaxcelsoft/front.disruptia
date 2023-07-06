import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type PREVIEW = {
  perfil: string;
  formaciones: FORMACION[];
  experiencias: EXPERIENCIA[];
  actividadesExtracurriculares: ACTIVIDAD[];
  informacionComplemtaria: COMPLEMENTARIA[];
  idiomas: IDIOMA[];
  herramientasOfimaticas: HERRAMIENTAOFIMATICA[];
  modelosTrabajo: MODELOTRABAJO[];
  habilidadesDesarrolladas: HABILIDADDESARROLLADA[];
  habilidadesSoftware: HABILIDADSOFTWARE[];
  referencias: REFERENCIA[];
};

export type FORMACION = {
  titulo: string;
  institucion: string;
  fechaInicio: string;
  fechaFin: string;
  actualmente: boolean;
  modalidad: string;
  pais: string;
  ciudad: string;
  tipoFormacion: string;
};

export type EXPERIENCIA = {
  cargo: string;
  empresa: string;
  fechaInicio: string;
  fechaFin: string;
  actualmente: boolean;
  logro: string;
};

export type ACTIVIDAD = {
  actividad: string;
  organizacion: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  tipoActividad: string;
};

export type COMPLEMENTARIA = {
  nombreCurso: string;
  fechaInicio: string;
  fechaFin: string;
  institucion: string;
  cursando: boolean;
};

export type IDIOMA = {
  idioma: string;
  nivel: string;
};

export type HERRAMIENTAOFIMATICA = {
  herramienta: string;
  nivel: string;
};

export type MODELOTRABAJO = {
  modeloTrabajo: string;
};

export type HABILIDADDESARROLLADA = {
  habilidad: string;
};

export type HABILIDADSOFTWARE = {
  habilidad: string;
  nivel: string;
};

export type REFERENCIA = {
  tipoReferencia: string;
  nombreCompleto: string;
  relacion: string;
  correo: string;
  celular: string;
  empresa: string;
  cargo: string;
};

export const GetPreview = async (id: number): Promise<PREVIEW | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/preview/${id}`
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
