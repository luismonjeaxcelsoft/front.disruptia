import { Card, Checkbox, Form, Input, Select } from "antd";
import { FC, useEffect, useState } from "react";
import ".././styles/InfoWordExp.css";
import caneca from "../assets/images/canecasinFondo.png";
import CardPlegada from "./CardPlegada";
import years from "../components/yearsData";
import {
  CreateStudy,
  FormationAcademy,
  GetCountries,
  GetMunicipality,
} from "../services/EstudiesService";
interface InfoWordExperienceProps {
  setValues: any;
  values: any;
  id: number;
  valuesFilter: Array<object>;
  setValidateViewB: React.Dispatch<boolean>;
}
type VALUESCOUNTRIES = {
  codigoPais: number;
  nombrePais: string;
};
type MUNICIPALITYINFO = {
  municipioDepartamento: string;
  municipioId: number;
  departamentoId: number;
  codigoPais: number;
  nombrePais: string;
};

const InfoWordExperience: FC<InfoWordExperienceProps> = ({
  setValues,
  values,
  id,
  valuesFilter,
  setValidateViewB,
}) => {
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [valuesAcademy, setValuesAcademy] = useState<any>([]);
  const [countries, setCountries] = useState<Array<VALUESCOUNTRIES>>([]);
  const [municipality, setMunicipality] = useState<Array<MUNICIPALITYINFO>>([]);
  const [valueCheck, setValueCheck] = useState<boolean>(false);
  const maxWords = 20;
  const onChangeValues = (e: any) => {
    const palabras = e.target.value.trim().split(/\s+/);
    if (palabras.length > maxWords) {
      window.alert(
        "Se ha superado el límite de palabras permitidas... El campo no puede contener mas de 20 palabras"
      );
      return;
    }
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

  const createStudies = async () => {
    delete values.dateInit, delete values.dateEnd;
    values["estudioId"] = id + 1;
    values["cursando"] = valueCheck;

    const res = await CreateStudy(values);
    if (res === "Estudio guardado") {
      setValidateViewB(true);
    }
  };
  const getInfoAcademy = async () => {
    const res = await FormationAcademy();
    const resCountries = await GetCountries();
    const getMunicipalities = await GetMunicipality();
    setValuesAcademy(res);
    setCountries(resCountries);
    setMunicipality(getMunicipalities);
  };
  useEffect(() => {
    getInfoAcademy();
  }, []);

  return (
    <div>
      <div>
        <p className="spanFormationAcademy">
          {id === 0 && "Formación Académica"}
        </p>
      </div>
      <div style={{ width: "58rem" }}>
        {cardValidate ? (
          <CardPlegada
            setCardValidate={setCardValidate}
            valuesFilter={values}
            type={"estudios"}
          />
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
                        name="nombreCurso"
                        autoComplete="off"
                        placeholder="Ej: Técnico en servicio al cliente y ventas"
                        onChange={onChangeValues}
                        value={values.nombreCurso}
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
                              width: "155px",
                              marginRight: "10px",
                            }}
                            options={[
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
                            ]}
                            onChange={(e) => changeValuesForm("dateInit", e)}
                            id="dateInit"
                            value={
                              values.fechaInicio !== ""
                                ? values.fechaInicio.split("-")[0]
                                : values.dateInit
                            }
                          />
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                              width: "75px",
                            }}
                            options={years.map((item: any) => ({
                              label: item.label,
                              value: item.value,
                            }))}
                            id="fechaInicio"
                            onChange={(e) =>
                              changeValuesForm(
                                "fechaInicio",
                                `${values.dateInit}-${e}`
                              )
                            }
                            value={values.fechaInicio.split("-")[1]}
                          />
                        </div>
                      </div>
                      {!valueCheck && (
                        <div style={{ marginBottom: "15px" }}>
                          <label className="labelsInsputs" htmlFor="dateEnd">
                            Fecha de finalización
                          </label>
                          <div>
                            <Select
                              style={{
                                background: "#4F2678",
                                color: "white",
                                width: "154px",
                                marginRight: "10px",
                              }}
                              options={[
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
                              ]}
                              id="dateEnd"
                              onChange={(e) => changeValuesForm("dateEnd", e)}
                              value={
                                values.fechaFin !== ""
                                  ? values?.fechaFin?.split("-")[0]
                                  : values?.dateEnd
                              }
                            />
                            <Select
                              style={{
                                background: "#4F2678",
                                color: "white",
                                width: "75px",
                              }}
                              options={years.map((item: any) => ({
                                label: item.label,
                                value: item.value,
                              }))}
                              id="fechaFin"
                              onChange={(e) =>
                                changeValuesForm(
                                  "fechaFin",
                                  `${values.dateEnd}-${e}`
                                )
                              }
                              value={
                                values.fechaFin !== ""
                                  ? values?.fechaFin?.split("-")[1]
                                  : values.dateEnd
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <Checkbox
                        onChange={(e) => setValueCheck(e.target.checked)}
                      />
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
                      <label
                        className="labelsInsputs"
                        htmlFor="nombreInstitucion"
                      >
                        Institución Educativa
                      </label>
                      <Input
                        type="text"
                        className="inputBorderNone"
                        id="user_id"
                        name="nombreInstitucion"
                        autoComplete="off"
                        placeholder="Ej: Sena"
                        onChange={onChangeValues}
                        value={values.nombreInstitucion}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label
                            className="labelsInsputs"
                            htmlFor="tipoEstudio"
                          >
                            Tipo de estudio
                          </label>
                          <Select
                            id="tipoEstudio"
                            options={valuesAcademy.map((item: any) => ({
                              label: item,
                              value: item,
                            }))}
                            onChange={(e) => changeValuesForm("tipoEstudio", e)}
                            value={values.tipoEstudio}
                            style={{ width: "215px" }}
                          />
                        </div>
                        <div className="containerStudies">
                          <label className="labelsInsputs" htmlFor="modalidad">
                            Modalidad
                          </label>
                          <Select
                            id="modalidad"
                            options={[
                              {
                                value: "1",
                                label: "virtual",
                              },
                              {
                                value: "2",
                                label: "Presencial",
                              },
                            ]}
                            onChange={(e) => changeValuesForm("modalidad", e)}
                            style={{ width: "215px" }}
                          />
                        </div>
                      </div>
                      {values.modalidad === "2" && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "50% 50%",
                            gap: "13px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "15px",
                            }}
                          >
                            <label className="labelsInsputs" htmlFor="paisId">
                              País y Ciudad donde curso
                            </label>

                            <Select
                              style={{
                                background: "#4F2678",
                                color: "white",
                                width: "250px",
                              }}
                              id="ciudadId"
                              options={countries.map((item: any) => ({
                                label: item.nombrePais,
                                value: item.codigoPais,
                              }))}
                              onChange={(e) => {
                                changeValuesForm("paisId", e);
                              }}
                              value={values.paisId}
                            />
                          </div>
                          <div>
                            {values.paisId === 169 && (
                              <Select
                                style={{
                                  background: "#4F2678",
                                  color: "white",
                                  width: "250px",
                                  marginTop: "42px",
                                }}
                                id="ciudadId"
                                options={municipality.map((item: any) => ({
                                  label: item.municipioDepartamento,
                                  value: item.municipioId,
                                }))}
                                onChange={(e) =>
                                  changeValuesForm("ciudadId", e)
                                }
                                value={values.ciudadId}
                              />
                            )}
                          </div>
                        </div>
                      )}
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
              onClick={() => {
                activeCard();
                createStudies();
              }}
              className="SaveInfo btn btn-primary"
            >
              Guardar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoWordExperience;
