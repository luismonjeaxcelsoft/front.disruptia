import axios from "axios";
import { type } from "os";

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

type FORMACION = {
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

type EXPERIENCIA = {
  cargo: string;
  empresa: string;
  fechaInicio: string;
  fechaFin: string;
  actualmente: boolean;
  logro: string;
};

type ACTIVIDAD = {
  actividad: string;
  organizacion: string;
  fechaInicio: string;
  fechaFin: string;
  cursando: boolean;
  tipoActividad: string;
};

type COMPLEMENTARIA = {
  nombreCurso: string;
  fechaInicio: string;
  fechaFin: string;
  institucion: string;
  cursando: boolean;
};

type IDIOMA = {
  idioma: string;
  nivel: string;
};

type HERRAMIENTAOFIMATICA = {
  herramienta: string;
  nivel: string;
};

type MODELOTRABAJO = {
  modeloTrabajo: string;
};

type HABILIDADDESARROLLADA = {
  habilidad: string;
};

type HABILIDADSOFTWARE = {
  habilidad: string;
  nivel: string;
};

type REFERENCIA = {
  tipoReferencia: string;
  nombreCompleto: string;
  relacion: string;
  correo: string;
  celular: string;
  empresa: string;
  cargo: string;
};

export const GetPreview = async (id: number): Promise<REFERENCE[] | string> => {
  try {
    const response = await axios.get(
      `${API_URL}/referencias/disrupterId/${id}`
    );
    return response.data;
  } catch (error) {
    return "No se encontraron referencias para este disrupter";
    //  throw new Error("Error al obtener las referencias");
  }
};
