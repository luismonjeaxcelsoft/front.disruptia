import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";
import { FC } from "react";
import {
  ACTIVIDAD,
  COMPLEMENTARIA,
  EXPERIENCIA,
  FORMACION,
  HABILIDADDESARROLLADA,
  HABILIDADSOFTWARE,
  HERRAMIENTAOFIMATICA,
  IDIOMA,
  MODELOTRABAJO,
  PREVIEW,
} from "../services/PreviewService";

import MontserratBold from "../fonts/Montserrat-Bold.ttf";
import MontserratLight from "../fonts/Montserrat-Light.ttf";

Font.register({ family: "Montserrat-Bold", src: MontserratBold });
Font.register({ family: "Montserrat-Light", src: MontserratLight });

const styles = StyleSheet.create({
  page: {
    fontSize: 14,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 60,
  },
  section: {
    marginTop: 20,
  },
  section2: {
    marginTop: 12,
  },
  section3: {
    marginTop: 8,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "left",
  },
  paragraph: {
    fontFamily: "Montserrat-Light",
    fontSize: 10,
    marginBottom: 2,
    textAlign: "justify",
  },
});

type DocumentoPDFProps = {
  preview: PREVIEW;
  setIsModalOpen: any;
  convertirAMes: any;
  convertirAAnno: any;
};

const DocumentoPDF: FC<DocumentoPDFProps> = ({
  preview,
  setIsModalOpen,
  convertirAMes,
  convertirAAnno,
}) => {
  const generatePdf = async () => {
    setIsModalOpen(false);
    const blob = await pdf(<PdfDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "HojaDeVidaDisruptia.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formacionesPdf = () => {
    const formaciones = preview.formaciones.sort((a, b) => {
      const fechaInicioA = new Date(a.fechaInicio).getTime();
      const fechaInicioB = new Date(b.fechaInicio).getTime();
      return fechaInicioA - fechaInicioB;
    });

    return (
      <>
        <Text style={styles.subtitle}>Formación Académica</Text>
        {formaciones.map((item: FORMACION) => (
          <View key={item.titulo} style={styles.section2}>
            <Text style={styles.paragraph}>
              {item.tipoFormacion + " en " + item.titulo}
            </Text>
            <Text style={styles.paragraph}>
              {item.institucion +
                ", " +
                convertirAMes(item.fechaInicio) +
                " " +
                convertirAAnno(item.fechaInicio) +
                " - "}
              {item.actualmente
                ? "Actualmente"
                : convertirAMes(item.fechaFin) +
                  " " +
                  convertirAAnno(item.fechaFin)}
            </Text>
            <Text style={styles.paragraph}>
              {item.modalidad === "Virtual" ? "Virtual" : item.ciudad}
            </Text>
          </View>
        ))}
      </>
    );
  };

  const experienciaPdf = () => {
    const experiencias = preview.experiencias.sort((a, b) => {
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
          <>
            <Text style={styles.subtitle}>Experiencia Laboral</Text>
            {experienciasFilter.map((item: EXPERIENCIA) => (
              <View key={item.logro} style={styles.section2}>
                <Text style={styles.paragraph}>{item.empresa}</Text>
                <Text style={styles.paragraph}>{item.cargo}</Text>
                <Text style={styles.paragraph}>
                  {
                    convertirAMes(item.fechaInicio) +
                    " " +
                    convertirAAnno(item.fechaInicio) +
                    " - "}
                  {item.actualmente
                    ? "Actualmente"
                    : convertirAMes(item.fechaFin) +
                      " " +
                      convertirAAnno(item.fechaFin)}
                </Text>
                <Text style={styles.paragraph}>{item.logro}</Text>
              </View>
            ))}
          </>
        ) : (
          <> </>
        )}
      </>
    );
  };

  const actividadesPdf = () => {
    const actividadesExtracurriculares =
      preview.actividadesExtracurriculares.sort((a, b) => {
        const fechaInicioA = new Date(a.fechaInicio).getTime();
        const fechaInicioB = new Date(b.fechaInicio).getTime();
        return fechaInicioA - fechaInicioB;
      });

    const actividadesFilter = actividadesExtracurriculares.filter(
      (item) => item.actividad !== "N/T"
    );

    return (
      <>
        {actividadesFilter.length > 0 ? (
          <>
            <Text style={styles.subtitle}>Actividades Extracurriculares</Text>
            {actividadesFilter.map((item: ACTIVIDAD) => (
              <View key={item.actividad} style={styles.section2}>
                <Text style={styles.paragraph}>{item.actividad}</Text>
                <Text style={styles.paragraph}>{item.tipoActividad}</Text>
                <Text style={styles.paragraph}>
                  {item.organizacion +
                    ", " +
                    convertirAMes(item.fechaInicio) +
                    " " +
                    convertirAAnno(item.fechaInicio) +
                    " - "}
                  {item.cursando
                    ? "Actualmente"
                    : convertirAMes(item.fechaFin) +
                      " " +
                      convertirAAnno(item.fechaFin)}
                </Text>
              </View>
            ))}
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  const complementariaPdf = () => {
    const informacionComplemtaria = preview.informacionComplemtaria.sort(
      (a, b) => {
        const fechaInicioA = new Date(a.fechaInicio).getTime();
        const fechaInicioB = new Date(b.fechaInicio).getTime();
        return fechaInicioA - fechaInicioB;
      }
    );

    return (
      <>
        <Text style={styles.subtitle}>Formación complementaria</Text>
        {informacionComplemtaria.map((item: COMPLEMENTARIA) => (
          <View key={item.nombreCurso} style={styles.section2}>
            <Text style={styles.paragraph}>{item.nombreCurso}</Text>
            <Text style={styles.paragraph}>
              {item.institucion +
                ", " +
                convertirAMes(item.fechaInicio) +
                " " +
                convertirAAnno(item.fechaInicio) +
                " - "}
              {item.cursando
                ? "Actualmente"
                : convertirAMes(item.fechaFin) +
                  " " +
                  convertirAAnno(item.fechaFin)}
            </Text>
          </View>
        ))}
      </>
    );
  };

  const idiomasPdf = () => {
    const idiomas = preview?.idiomas.filter(
      (idioma) => idioma.nivel !== "Ninguno"
    );

    return (
      <>
        <Text style={styles.subtitle}>Manejo de Idiomas</Text>
        {idiomas.map((item: IDIOMA) => (
          <View key={item.idioma} style={styles.section2}>
            <Text style={styles.paragraph}>
              {item.idioma + " - " + item.nivel}
            </Text>
          </View>
        ))}
      </>
    );
  };

  const herramientasOfimaticasPdf = () => {
    const herramientasOfimaticas = preview?.herramientasOfimaticas.filter(
      (herramienta) => herramienta.nivel !== "Ninguno"
    );

    return (
      <>
        <Text style={styles.subtitle}>Herramientas Ofimaticas</Text>
        {herramientasOfimaticas.map((item: HERRAMIENTAOFIMATICA) => (
          <View key={item.herramienta} style={styles.section2}>
            <Text style={styles.paragraph}>
              {item.herramienta + " - " + item.nivel}
            </Text>
          </View>
        ))}
      </>
    );
  };

  const modelosTrabajoPdf = () => {
    return (
      <>
        <Text style={styles.subtitle}>Modelos de Trabajo</Text>
        {preview.modelosTrabajo.map((item: MODELOTRABAJO) => (
          <View key={item.modeloTrabajo} style={styles.section2}>
            <Text style={styles.paragraph}>{item.modeloTrabajo}</Text>
          </View>
        ))}
      </>
    );
  };
  const habilidadesDesarrolladasPdf = () => {
    return (
      <>
        <Text style={styles.subtitle}>Habilidades Desarrolladas</Text>
        {preview.habilidadesDesarrolladas.map((item: HABILIDADDESARROLLADA) => (
          <View key={item.habilidad} style={styles.section2}>
            <Text style={styles.paragraph}>{item.habilidad}</Text>
          </View>
        ))}
      </>
    );
  };

  const habilidadesSoftwarePdf = () => {
    return (
      <>
        <Text style={styles.subtitle}>Habilidades de Software</Text>
        {preview.habilidadesSoftware.map((item: HABILIDADSOFTWARE) => (
          <View key={item.habilidad} style={styles.section2}>
            <Text style={styles.paragraph}>
              {item.habilidad + " - " + item.nivel}
            </Text>
          </View>
        ))}
      </>
    );
  };

  const PdfDocument = () => {
    return (
      <Document title="Documento nuevo">
        <Page size="A4" style={styles.page}>
          {/* <View>
            <Text style={styles.title}>Hoja de vida</Text>
          </View> */}
          <View style={styles.section}>
            <Text style={styles.subtitle}>Andres Mauricio Beltrán</Text>
            <Text style={styles.paragraph}>andresbeltran@gmail.com</Text>
            <Text style={styles.paragraph}>+57 300 455 2070</Text>
            <Text style={styles.paragraph}>Soacha, Colombia</Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.subtitle}>Perfil</Text>
            <Text style={styles.paragraph}>{preview.perfil}</Text>
          </View>
          <View style={styles.section2}>{formacionesPdf()}</View>
          <View style={styles.section2}>{experienciaPdf()}</View>
          <View style={styles.section2}>{actividadesPdf()}</View>
          <View style={styles.section2}>{complementariaPdf()}</View>
          <View style={styles.section2}>{idiomasPdf()}</View>
          <View style={styles.section2}>{herramientasOfimaticasPdf()}</View>
          <View style={styles.section2}>{modelosTrabajoPdf()}</View>
          <View style={styles.section2}>{habilidadesDesarrolladasPdf()}</View>
          <View style={styles.section2}>{habilidadesSoftwarePdf()}</View>
        </Page>
      </Document>
    );
  };

  return (
    <button onClick={() => generatePdf()} className="containerButtomModal">
      <span
        style={{
          fontSize: "25px",
          color: "#E0A21E",
          fontFamily: " Montserrat-Bold",
        }}
      >
        Descargar PDF
      </span>
    </button>
  );
};
export default DocumentoPDF;
