import { Card, Checkbox, Form, Input, Select } from "antd";
import { FC, useEffect, useState } from "react";
import ".././styles/InfoWordExp.css";
import caneca from "../assets/images/canecasinFondo.png";
import CardPlegada from "./CardPlegada";
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
}) => {
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [valuesAcademy, setValuesAcademy] = useState<any>([]);
  const [countries, setCountries] = useState<Array<VALUESCOUNTRIES>>([]);
  const [municipality, setMunicipality] = useState<Array<MUNICIPALITYINFO>>([]);
  const [valueCheck, setValueCheck] = useState<boolean>(false);
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

  const createStudies = async () => {
    delete values.dateInit, delete values.dateEnd;
    values["estudioId"] = id + 1;
    values["cursando"] = valueCheck;
    await CreateStudy(values);
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
      <div style={{ width: "60rem" }}>
        {cardValidate ? (
          <CardPlegada
            setCardValidate={setCardValidate}
            valuesFilter={values}
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
                        maxLength={200}
                        showCount
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
                              width: "161px",
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
                          />
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                              width: "75px",
                            }}
                            options={[
                              { value: "2000", label: "2000" },
                              { value: "2001", label: "2001" },
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
                            id="fechaInicio"
                            onChange={(e) =>
                              changeValuesForm(
                                "fechaInicio",
                                `${values.dateInit}-${e}`
                              )
                            }
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
                          />
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                              width: "75px",
                            }}
                            options={[
                              { value: "2000", label: "2000" },
                              { value: "2001", label: "2001" },
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
                            id="fechaFin"
                            onChange={(e) =>
                              changeValuesForm(
                                "fechaFin",
                                `${values.dateEnd}-${e}`
                              )
                            }
                          />
                        </div>
                      </div>
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
                        showCount
                        maxLength={200}
                        placeholder="Ej: Sena"
                        onChange={onChangeValues}
                        value={values.nombreInstitucion}
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
                        <label className="labelsInsputs" htmlFor="tipoEstudio">
                          Tipo de estudio
                        </label>
                        <Select
                          id="tipoEstudio"
                          options={valuesAcademy.map((item: any) => ({
                            label: item,
                            value: item,
                          }))}
                          onChange={(e) => changeValuesForm("tipoEstudio", e)}
                        />
                      </div>
                      <div>
                        <label className="labelsInsputs" htmlFor="paisId">
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
                            id="ciudadId"
                            options={countries.map((item: any) => ({
                              label: item.nombrePais,
                              value: item.codigoPais,
                            }))}
                            onChange={(e) => changeValuesForm("paisId", e)}
                          />
                          <Select
                            style={{
                              background: "#4F2678",
                              color: "white",
                            }}
                            id="ciudadId"
                            options={municipality.map((item: any) => ({
                              label: item.municipioDepartamento,
                              value: item.municipioId,
                            }))}
                            onChange={(e) => changeValuesForm("ciudadId", e)}
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
      <div></div>
    </div>
  );
};

export default InfoWordExperience;
