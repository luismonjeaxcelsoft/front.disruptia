import { Card, Radio } from "antd";
import "../styles/InformationLenguajes.css";
const InformationLenguajes = () => {
  const infoRadioIdiomas = [
    {
      idioma: "Español",
      select: [
        {
          nivel: 1,
          label: "Basico",
        },
        {
          nivel: 1,
          label: "Intermedio",
        },
        {
          nivel: 1,
          label: "Avanzado",
        },
        {
          nivel: 1,
          label: "Nativo",
        },
      ],
    },
    {
      idioma: "Ingles",
      select: [1, 2, 3, 4],
      niveles: [],
    },
    {
      idioma: "Frances",
      select: [1, 2, 3, 4],
      niveles: [],
    },
    {
      idioma: "Portugués",
      select: [1, 2, 3, 4],
      niveles: [],
    },
    {
      idioma: "Italiano",
      select: [1, 2, 3, 4],
      niveles: [],
    },
  ];
  return (
    <div style={{ width: "79rem" }}>
      <div className="containerTextComponent">
        <span className="textTitleComponent">Manejo de Idiomas</span>
        <span className="textSubtitleComponent">
          Selecciona el nivel de Idiomas con el que cuentas
        </span>
      </div>
      <div>
        <Card bodyStyle={{ background: "#310161", padding: "20px 20px 20px 240px" }}>
          <div>
            {infoRadioIdiomas.map((idioma) => (
              <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "10%" }}>
                  <span>{idioma.idioma}</span>
                </div>
                <div>
                  <div style={{ marginLeft: "150px",display:"flex" }}>
                    {idioma.select.map((item: any) => (
                      <div style={{width:"50px"}}>
                        <Radio></Radio>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InformationLenguajes;
