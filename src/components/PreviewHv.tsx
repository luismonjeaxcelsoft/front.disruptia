import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import "../styles/PreviewHv.css";
import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import {
  ACTIVIDAD,
  COMPLEMENTARIA,
  EXPERIENCIA,
  FORMACION,
  GetPreview,
  HABILIDADDESARROLLADA,
  HABILIDADSOFTWARE,
  HERRAMIENTAOFIMATICA,
  IDIOMA,
  MODELOTRABAJO,
  PREVIEW,
  REFERENCIA,
} from "../services/PreviewService";
import DocumentoPDF from "./DocumentoPDF";

const FORMACION_INICIAL = {
  titulo: "",
  institucion: "",
  fechaInicio: "",
  fechaFin: "",
  actualmente: false,
  modalidad: "",
  pais: "",
  ciudad: "",
  tipoFormacion: "",
};

const EXPERIENCIA_INICIAL = {
  cargo: "",
  empresa: "",
  fechaInicio: "",
  fechaFin: "",
  actualmente: false,
  logro: "",
};

const ACTIVIDAD_INICIAL = {
  actividad: "",
  organizacion: "",
  fechaInicio: "",
  fechaFin: "",
  cursando: false,
  tipoActividad: "",
};

const COMPLEMENTARIA_INICIAL = {
  nombreCurso: "",
  fechaInicio: "",
  fechaFin: "",
  institucion: "",
  cursando: false,
};

const IDIOMA_INICIAL = {
  idioma: "",
  nivel: "",
};

const HERRAMIENTAOFIMATICA_INICIAL = {
  herramienta: "",
  nivel: "",
};

const MODELOTRABAJO_INICIAL = {
  modeloTrabajo: "",
};

const HABILIDADDESARROLLADA_INICIAL = {
  habilidad: "",
};

const HABILIDADSOFTWARE_INICIAL = {
  habilidad: "",
  nivel: "",
};

const REFERENCIA_INICIAL = {
  tipoReferencia: "",
  nombreCompleto: "",
  relacion: "",
  correo: "",
  celular: "",
  empresa: "",
  cargo: "",
};

const PREVIEW_INICIAL = {
  perfil: "",
  formaciones: [FORMACION_INICIAL],
  experiencias: [EXPERIENCIA_INICIAL],
  actividadesExtracurriculares: [ACTIVIDAD_INICIAL],
  informacionComplemtaria: [COMPLEMENTARIA_INICIAL],
  idiomas: [IDIOMA_INICIAL],
  herramientasOfimaticas: [HERRAMIENTAOFIMATICA_INICIAL],
  modelosTrabajo: [MODELOTRABAJO_INICIAL],
  habilidadesDesarrolladas: [HABILIDADDESARROLLADA_INICIAL],
  habilidadesSoftware: [HABILIDADSOFTWARE_INICIAL],
  referencias: [REFERENCIA_INICIAL],
};

const PreviewHv = ({setActualizarPreview, actualizarPreview} : any) => {
  const disrupterId = 1;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preview, setPreview] = useState<PREVIEW>(PREVIEW_INICIAL);

  useEffect(() => {
    getPreview();
  }, [actualizarPreview]);

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setIsModalOpen(false);
  };

  const getPreview = async () => {
    const res = await GetPreview(disrupterId);

    if (typeof res !== "string") {
      setPreview(res);
    }
  };

  const meses = [
    { value: "01", label: "Enero" },
    { value: "02", label: "Febrero" },
    { value: "03", label: "Marzo" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Mayo" },
    { value: "06", label: "Junio" },
    { value: "07", label: "Julio" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
  ];

  const convertirAMes = (fecha: string) => {
    const partes = fecha.split("-");
    return meses.find((value) => value.value === partes[0])?.label;
  };

  const convertirAAnno = (fecha: string) => {
    const partes = fecha.split("-");
    return partes[1];
  };

  const perfil = () => {
    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Perfil</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/11");
              setActualizarPreview(!actualizarPreview);
            }}
            className="iconEdit"
          />
        </div>
        <div
          style={{
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="itemSpan" style={{ textAlign: "justify" }}>
            {preview?.perfil}
          </span>
        </div>
      </div>
    );
  };

  const formacionAcademica = () => {
    const formaciones = preview?.formaciones.sort((a, b) => {
      const fechaInicioA = new Date(a.fechaInicio).getTime();
      const fechaInicioB = new Date(b.fechaInicio).getTime();
      return fechaInicioA - fechaInicioB;
    });

    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Formación Académica</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/2");
            }}
            className="iconEdit"
          />
        </div>
        {formaciones?.map((formacion: FORMACION) => (
          <div
            key={formacion.titulo}
            style={{
              marginBottom: "12px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="itemSpan">
              {formacion.tipoFormacion + " en " + formacion.titulo}
            </span>
            <span className="itemSpan">
              {formacion.institucion +
                ", " +
                convertirAMes(formacion.fechaInicio) +
                " " +
                convertirAAnno(formacion.fechaInicio) +
                " - "}
              {formacion.actualmente
                ? "Actualmente"
                : convertirAMes(formacion.fechaFin) +
                  " " +
                  convertirAAnno(formacion.fechaFin)}
            </span>
            <span className="itemSpan">
              {formacion.modalidad === "Virtual" ? "Virtual" : formacion.ciudad}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const experienciaLaboral = () => {
    const experiencias = preview?.experiencias.sort((a, b) => {
      const fechaInicioA = new Date(a.fechaInicio).getTime();
      const fechaInicioB = new Date(b.fechaInicio).getTime();
      return fechaInicioA - fechaInicioB;
    });

    const experienciasFilter = experiencias.filter(
      (item) => item.cargo !== "N/T"
    );

    return (
      <>
        {experienciasFilter.length > 0 ? (
          <div className="containerItems">
            <div className="containerEdit">
              <span className="titleItem">Experiencia Laboral</span>
              <EditOutlined
                onClick={() => {
                  navigate("/perfiles/3");
                }}
                className="iconEdit"
              />
            </div>
            {experienciasFilter?.map((experiencia: EXPERIENCIA) => (
              <div
                key={experiencia.logro}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span className="itemSpan">{experiencia.cargo}</span>
                <span className="itemSpan">
                  {experiencia.empresa +
                    ", " +
                    convertirAMes(experiencia.fechaInicio) +
                    " " +
                    convertirAAnno(experiencia.fechaInicio) +
                    " - "}
                  {experiencia.actualmente
                    ? "Actualmente"
                    : convertirAMes(experiencia.fechaFin) +
                      " " +
                      convertirAAnno(experiencia.fechaFin)}
                </span>
                <span className="itemSpan">{experiencia.logro}</span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const actividadesExtracurriculares = () => {
    const actividades = preview?.actividadesExtracurriculares.sort((a, b) => {
      const fechaInicioA = new Date(a.fechaInicio).getTime();
      const fechaInicioB = new Date(b.fechaInicio).getTime();
      return fechaInicioA - fechaInicioB;
    });

    const actividadesFilter = actividades.filter(
      (item) => item.actividad !== "N/T"
    );

    return (
      <>
        {actividadesFilter.length > 0 ? (
          <div className="containerItems">
            <div className="containerEdit">
              <span className="titleItem">Actividades Extracurriculares</span>
              <EditOutlined
                onClick={() => {
                  navigate("/perfiles/4");
                }}
                className="iconEdit"
              />
            </div>
            {actividadesFilter?.map((actividad: ACTIVIDAD) => (
              <div
                key={actividad.actividad}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span className="itemSpan">{actividad.actividad}</span>
                <span className="itemSpan">{actividad.tipoActividad}</span>
                <span className="itemSpan">
                  {actividad.organizacion +
                    ", " +
                    convertirAMes(actividad.fechaInicio) +
                    " " +
                    convertirAAnno(actividad.fechaInicio) +
                    " - "}
                  {actividad.cursando
                    ? "Actualmente"
                    : convertirAMes(actividad.fechaFin) +
                      " " +
                      convertirAAnno(actividad.fechaFin)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const informacionComplemtaria = () => {
    const cursos = preview?.informacionComplemtaria.sort((a, b) => {
      const fechaInicioA = new Date(a.fechaInicio).getTime();
      const fechaInicioB = new Date(b.fechaInicio).getTime();
      return fechaInicioA - fechaInicioB;
    });

    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Formación Complementaria</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/5");
            }}
            className="iconEdit"
          />
        </div>
        {cursos?.map((curso: COMPLEMENTARIA) => (
          <div
            style={{
              marginBottom: "12px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="itemSpan">{curso.nombreCurso}</span>
            <span className="itemSpan">
              {curso.institucion +
                ", " +
                convertirAMes(curso.fechaInicio) +
                " " +
                convertirAAnno(curso.fechaInicio) +
                " - "}
              {curso.cursando
                ? "Actualmente"
                : convertirAMes(curso.fechaFin) +
                  " " +
                  convertirAAnno(curso.fechaFin)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const idiomas = () => {
    const newIdiomas = preview?.idiomas.filter(
      (idioma) => idioma.nivel !== "Ninguno"
    );

    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Manejo de Idiomas</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/6");
            }}
            className="iconEdit"
          />
        </div>
        {newIdiomas?.map((idioma: IDIOMA) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="itemSpan">
              {idioma.idioma + " - " + idioma.nivel}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const herramientasOfimaticas = () => {
    const newHerramientas = preview?.herramientasOfimaticas.filter(
      (herramienta) => herramienta.nivel !== "Ninguno"
    );

    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Herramientas Ofimaticas</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/7");
            }}
            className="iconEdit"
          />
        </div>
        {newHerramientas?.map((herramienta: HERRAMIENTAOFIMATICA) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="itemSpan">
              {herramienta.herramienta + " - " + herramienta.nivel}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const modelosTrabajo = () => {
    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Modelos de Trabajo</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/8");
            }}
            className="iconEdit"
          />
        </div>
        {preview?.modelosTrabajo.map((modelo: MODELOTRABAJO) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="itemSpan">{modelo.modeloTrabajo}</span>
          </div>
        ))}
      </div>
    );
  };

  const habilidadesDesarrolladas = () => {
    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Habilidades Desarrolladas</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/9");
            }}
            className="iconEdit"
          />
        </div>
        {preview?.habilidadesDesarrolladas.map(
          (habilidad: HABILIDADDESARROLLADA) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="itemSpan">{habilidad.habilidad}</span>
            </div>
          )
        )}
      </div>
    );
  };

  const habilidadesSoftware = () => {
    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Habilidades de Software</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/10");
            }}
            className="iconEdit"
          />
        </div>
        {preview?.habilidadesSoftware.map((habilidad: HABILIDADSOFTWARE) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="itemSpan">
              {habilidad.habilidad + " - " + habilidad.nivel}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const referencias = () => {
    const referenciasPersonales = preview?.referencias.filter(
      (referencia) => referencia.tipoReferencia === "Personal"
    );

    const referenciasFamiliares = preview?.referencias.filter(
      (referencia) => referencia.tipoReferencia === "Familiar"
    );

    return (
      <div className="containerItems">
        <div className="containerEdit">
          <span className="titleItem">Referencias</span>
          <EditOutlined
            onClick={() => {
              navigate("/perfiles/12");
            }}
            className="iconEdit"
          />
        </div>
        {referenciasFamiliares?.length > 0 && (
          <>
            <span className="subTitleItem">Referencias Familiares</span>
            {referenciasFamiliares?.map((referencia: REFERENCIA) => (
              <div
                key={referencia.nombreCompleto}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span className="itemSpan">{referencia.nombreCompleto}</span>
                <span className="itemSpan">{referencia.relacion}</span>
                <span className="itemSpan">{referencia.correo}</span>
                <span className="itemSpan">{referencia.celular}</span>
              </div>
            ))}
          </>
        )}
        {referenciasPersonales?.length > 0 && (
          <>
            <span className="subTitleItem">Referencias Personales</span>
            {referenciasPersonales?.map((referencia: REFERENCIA) => (
              <div
                key={referencia.nombreCompleto}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span className="itemSpan">{referencia.nombreCompleto}</span>
                <span className="itemSpan">
                  {referencia.empresa + ", " + referencia.cargo}
                </span>
                <span className="itemSpan">{referencia.relacion}</span>
                <span className="itemSpan">{referencia.correo}</span>
                <span className="itemSpan">{referencia.celular}</span>
              </div>
            ))}
          </>
        )}
      </div>
    );
  };

  const previewHtml = () => {
    return (
      <>
        <div
          className="containerInfoHv"
          style={{ overflow: "auto", height: "600px" }}
        >
          <div className="containerItemOne">
            <div className="containerEdit">
              <span className="titleItem">Andres Mauricio Beltrán</span>
            </div>
            <span className="itemSpan">andresbeltran@gmail.com</span>
            <span className="itemSpan">+57 300 455 2070</span>
            <span className="itemSpan">Soacha, Colombia</span>
          </div>
          {perfil()}
          {preview?.experiencias.length >= 2
            ? experienciaLaboral()
            : formacionAcademica()}
          {preview?.experiencias.length >= 2
            ? formacionAcademica()
            : experienciaLaboral()}

          {preview?.actividadesExtracurriculares.length > 0 &&
            actividadesExtracurriculares()}

          {informacionComplemtaria()}
          {idiomas()}
          {herramientasOfimaticas()}
          {modelosTrabajo()}
          {habilidadesDesarrolladas()}
          {habilidadesSoftware()}
          {referencias()}
        </div>
      </>
    );
  };

  

  return (
    <>
      <div>
        <Sidebar
          title=""
          smallTitle="Crear Hoja de vida"
          subTitle="Llegó el momento, aquí tienes tu hoja de vida, por favor verifica que toda la información que tienes está completa y que sea cierta.
          Si necesitas modificar puedes dar click a la derecha donde aparecen los íconos de editar, esto te permitirá modificar y mejorar cada sección. Una vez sientas que está listo, dale FINALIZAR.
          "
          backColor={false}
          img={false}
          video={false}
          open={false}
        />
      </div>
      <div>
        <div className="containerTitlePreview">
          <span className="textTtilePreview">Preview Hoja de vida</span>
        </div>
        {previewHtml()}
        <div style={{ marginTop: "35px" }} className="containerSaveAction">
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              width: "165px",
              height: "47px",
              fontSize: "18px",
              fontFamily: "Montserrat-Bold",
            }}
            className="SaveInfo btn btn-primary"
          >
            Finalizar
          </button>
        </div>
        <div>
          <Modal
            centered
            open={isModalOpen}
            width="1073px"
            bodyStyle={{ padding: "40px", height: "542px" }}
            footer={null}
            onCancel={handleCancel}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="textModal">Andrés, has finalizado</span>
                <span className="textModal">con éxito tu Hoja de vida.</span>
                <span className="textModal">
                  ¡Ahora estás listo para conectarte
                </span>
                <span className="textModal">con una oferta de empleo</span>
                <span className="textModal">Disruptiva!</span>
                <DocumentoPDF
                  preview={preview}
                  setIsModalOpen={setIsModalOpen}
                  convertirAMes={convertirAMes}
                  convertirAAnno={convertirAAnno}
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default PreviewHv;
