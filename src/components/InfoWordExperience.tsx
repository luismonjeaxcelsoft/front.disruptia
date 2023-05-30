import { Card, Checkbox, Form, Input, Select } from "antd";
import { FC, useEffect, useState } from "react";
import ".././styles/InfoWordExp.css";
import caneca from "../assets/images/canecasinFondo.png";
import CardPlegada from "./CardPlegada";
interface InfoWordExperienceProps {
  setValues: any;
  values: any;
  id: number;
  valuesFilter: Array<object>;
}

const InfoWordExperience: FC<InfoWordExperienceProps> = ({
  setValues,
  values,
  id,
  valuesFilter,
}) => {
  console.log(
    "🚀 ~ file: InfoWordExperience.tsx:19 ~ valuesFilter:",
    valuesFilter
  );
  const [cardValidate, setCardValidate] = useState<boolean>(false);

  const onChangeValues = (e: any) => {
    const { name, value } = e.target;
    changeValuesForm(name, value);
  };
  const changeValuesForm = (name: string, value: string) => {
    setValues((prevValues: any) => {
      let newValues = [...prevValues];
      newValues[id] = { ...values, [name]: value };
      return newValues;
    });
  };
  const EliminateForm = () => {
    setValues((prevValues: any) => {
      const newValues = prevValues.filter((_form: any, i: number) => i !== id);
      return newValues;
    });
  };

  const activeCard = () => {
    const value = valuesFilter.some((_data: any, i: any) => i === id);
    if (value) {
      setCardValidate(true);
      return;
    }
  };

  return (
    <div>
      <div>
        <p className="spanFormationAcademy">
          {id === 0 && "Formación Académica"}
        </p>
      </div>
      <div style={{ width: "60rem" }}>
        {cardValidate ? (
          <CardPlegada setCardValidate={setCardValidate} valuesFilter={values} />
        ) : (
          <Card
            style={{
              background: "#310161",
              padding: "20px",
              borderRadius: "25px",
              marginTop: "10px",
            }}
          >
            <div>
              <div className="imgCaneca">
                <span className="spanStudy">Estudio {id + 1}</span>
                <img
                  style={{
                    width: "24px",
                    cursor: "pointer",
                    display: valuesFilter.length === 1 ? "none" : "",
                  }}
                  alt="eliminar"
                  src={caneca}
                  onClick={EliminateForm}
                />
              </div>
              <div>
                <Form>
                  <div>
                    <div style={{ marginBottom: "15px" }}>
                      <label className="labelsInsputs" htmlFor="nameCurse">
                        Nombre del Curso
                      </label>
                      <Input
                        type="text"
                        className="inputBorderNone"
                        id="user_id"
                        name="nameCurse"
                        autoComplete="off"
                        placeholder="Ej: Técnico en servicio al cliente y ventas"
                        maxLength={20}
                        showCount
                        onChange={onChangeValues}
                      />
                    </div>
                    <div className="containerDate">
                      <div
                        style={{
                          marginBottom: "15px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <label className="labelsInsputs" htmlFor="dateInit">
                          Fecha de inicio
                        </label>
                        <div>
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                              width: "161px",
                              marginRight: "10px",
                            }}
                            options={[
                              { value: "1", label: "Enero" },
                              { value: "2", label: "Febrero" },
                              { value: "3", label: "Marzo" },
                              { value: "4", label: "Abril" },
                              { value: "5", label: "Mayo" },
                              { value: "6", label: "Junio" },
                              { value: "7", label: "Julio" },
                              { value: "8", label: "Agosto" },
                              { value: "9", label: "Septiembre" },
                              { value: "10", label: "Octubre" },
                              { value: "11", label: "Noviembre" },
                              { value: "12", label: "Diciembre" },
                            ]}
                            onChange={(e) => changeValuesForm("dateInit", e)}
                            id="dateInit"
                          />
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                              width: "75px",
                            }}
                            options={[
                              { value: "1", label: "2000" },
                              { value: "2", label: "2001" },
                              { value: "3", label: "2002" },
                              { value: "4", label: "2003" },
                              { value: "5", label: "2004" },
                              { value: "6", label: "2005" },
                              { value: "7", label: "2006" },
                              { value: "8", label: "2007" },
                              { value: "9", label: "2008" },
                              { value: "10", label: "2009" },
                              { value: "11", label: "2010" },
                              { value: "12", label: "2011" },
                            ]}
                            id="dateInitOne"
                            onChange={(e) => changeValuesForm("dateInitOne", e)}
                          />
                        </div>
                      </div>
                      <div style={{ marginBottom: "15px" }}>
                        <label className="labelsInsputs" htmlFor="dateEnd">
                          Fecha de finalización
                        </label>
                        <div>
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                              width: "161px",
                              marginRight: "10px",
                            }}
                            options={[
                              { value: "1", label: "Enero" },
                              { value: "2", label: "Febrero" },
                              { value: "3", label: "Marzo" },
                              { value: "4", label: "Abril" },
                              { value: "5", label: "Mayo" },
                              { value: "6", label: "Junio" },
                              { value: "7", label: "Julio" },
                              { value: "8", label: "Agosto" },
                              { value: "9", label: "Septiembre" },
                              { value: "10", label: "Octubre" },
                              { value: "11", label: "Noviembre" },
                              { value: "12", label: "Diciembre" },
                            ]}
                            id="dateEnd"
                            onChange={(e) => changeValuesForm("dateEnd", e)}
                          />
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                              width: "75px",
                            }}
                            options={[
                              { value: "1", label: "2000" },
                              { value: "2", label: "2001" },
                              { value: "3", label: "2002" },
                              { value: "4", label: "2003" },
                              { value: "5", label: "2004" },
                              { value: "6", label: "2005" },
                              { value: "7", label: "2006" },
                              { value: "8", label: "2007" },
                              { value: "9", label: "2008" },
                              { value: "10", label: "2009" },
                              { value: "11", label: "2010" },
                              { value: "12", label: "2011" },
                            ]}
                            id="dateEndOne"
                            onChange={(e) => changeValuesForm("dateEndOne", e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <Checkbox />
                      <label
                        style={{
                          color: "#FFFFFF",
                          opacity: "0.6",
                          marginLeft: "10px",
                          fontFamily: "Montserrat, Medium",
                        }}
                      >
                        Cursando Actualmente
                      </label>
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label className="labelsInsputs" htmlFor="institution">
                        Institución Educativa
                      </label>
                      <Input
                        type="text"
                        className="inputBorderNone"
                        id="user_id"
                        name="institution"
                        autoComplete="off"
                        showCount
                        maxLength={20}
                        placeholder="Ej: Sena"
                        onChange={onChangeValues}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "87%",
                      }}
                    >
                      <div className="containerStudies">
                        <label className="labelsInsputs" htmlFor="studies">
                          Tipo de estudio
                        </label>
                        <Select
                          id="studies"
                          options={[
                            { value: "técnico", label: "técnico" },
                            { value: "tecnológico", label: "tecnológico" },
                            { value: "PostGrado", label: "PostGrado" },
                          ]}
                          onChange={(e) => changeValuesForm("studies", e)}
                        />
                      </div>
                      <div>
                        <label className="labelsInsputs" htmlFor="countries">
                          País y Ciudad donde curso
                        </label>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "211px 71px",
                            gap: "5px",
                          }}
                          className="containerStudies"
                        >
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                            }}
                            id="countries"
                            options={[
                              { value: "Colombia", label: "Colombia" },
                              { value: "Venezuela", label: "Venezuela" },
                              { value: "Ecuador", label: "Ecuador" },
                            ]}
                            onChange={(e) => changeValuesForm("countries", e)}
                          />
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                            }}
                            id="countriesOne"
                            options={[
                              { value: "Bogotá", label: "Bogotá" },
                              { value: "Medellin", label: "Medellin" },
                              { value: "Cali", label: "Cali" },
                            ]}
                            onChange={(e) =>
                              changeValuesForm("countriesOne", e)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </Card>
        )}
        {!cardValidate && (
          <div className="containerSaveAction">
            <button
              style={{ width: "168px" }}
              onClick={activeCard}
              className="SaveInfo btn btn-primary"
            >
              Guardar
            </button>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default InfoWordExperience;
