import { Card, Checkbox, Form, Input, Select } from "antd";
import { FC, useEffect, useState } from "react";
import ".././styles/InfoWordExp.css";
import CardPlegada from "./CardPlegada";
import years from "../components/yearsData";
import {
  CreateStudy,
  FormationAcademy,
  GetCountries,
  GetModalidad,
  GetMunicipality,
} from "../services/EstudiesService";
import { Sidebar } from "./Sidebar";
import Delete from "../assets/images/Delete.png";
interface InfoWordExperienceProps {
  setValues: any;
  values: any;
  id: number;
  valuesFilter: Array<object>;
  setValidateViewB: React.Dispatch<boolean>;
  valuesRes: any;
  valuesInputsPerfiles: any;
  valuesIdPerfiles: any;
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
  valuesRes,
  valuesIdPerfiles,
  valuesInputsPerfiles,
}) => {
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [valuesAcademy, setValuesAcademy] = useState<string[]>([]);
  const [modalidades, setModalidades] = useState<string[]>([]);
  const [countries, setCountries] = useState<Array<VALUESCOUNTRIES>>([]);
  const [municipality, setMunicipality] = useState<Array<MUNICIPALITYINFO>>([]);
  const [valueCheck, setValueCheck] = useState<boolean>(values.cursando);
  const [countPalabras, setCountPalabras] = useState<string>("");
  const [countKeysIns, setCountKeysIns] = useState<string>("");
  const maxWords = 20;

  const onChangeValues = (e: any) => {
    const palabras = e.target.value.trim().split(/\s+/);
    if (e.target?.id === "nombreCurso") {
      setCountPalabras(palabras);
    } else if (e.target?.id === "nombreInstitucion") {
      setCountKeysIns(palabras);
    }
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
    setValidateViewB(true);
    const value = valuesFilter.some((_data: any, i: any) => i === id);
    if (value) {
      setCardValidate(true);
      return;
    }
  };

  const activeCardInit = () => {
    setValidateViewB(true);
    if (valuesRes) {
      setCardValidate(true);
      return;
    }
    setValidateViewB(false);
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
    const getModalidades = await GetModalidad();
    const resCountries = await GetCountries();
    const getMunicipalities = await GetMunicipality();
    setValuesAcademy(res);
    setModalidades(getModalidades);
    setCountries(resCountries);
    setMunicipality(getMunicipalities);
  };
  const validateForm = () => {
    const {
      nombreCurso,
      fechaInicio,
      nombreInstitucion,
      modalidad,
      tipoEstudio,
    } = values;

    if (
      nombreCurso !== "" &&
      fechaInicio !== "" &&
      nombreInstitucion !== "" &&
      modalidad !== "" &&
      tipoEstudio !== ""
    ) {
      createStudies();
      activeCard();
    } else {
      window.alert("Por favor diligencie todos los campos");
    }
  };

  useEffect(() => {
    getInfoAcademy();
    activeCardInit();
  }, [valuesRes]);

  return (
    <div>
      <div>
        <Sidebar
          subTitle="En esta sección registra tu educación formal, relacionado con:"
          backColor={false}
          img={true}
          data={valuesInputsPerfiles}
          sendData={valuesIdPerfiles}
        />
      </div>
      <div className="containerTitle">
        <p className="spanFormationAcademy">
          {id === 0 && "Formación Académica"}
        </p>
      </div>
      <div style={{ width: "750px" }}>
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
                    width: "50px",
                    cursor: "pointer",
                    display: valuesFilter.length === 1 ? "none" : "",
                    color: "white",
                    opacity: "0.75",
                  }}
                  src={Delete}
                  onClick={EliminateForm}
                />
              </div>
              <div>
                <Form>
                  <div>
                    <div style={{ marginBottom: "15px" }}>
                      <label className="labelsInsputs " htmlFor="nombreCurso">
                        Nombre del Curso
                      </label>
                      <div>
                        <Input.TextArea
                          className="inputBorderNone"
                          id="nombreCurso"
                          name="nombreCurso"
                          autoComplete="off"
                          placeholder="Ej: Técnico en servicio al cliente y ventas"
                          onChange={onChangeValues}
                          value={values.nombreCurso}
                        />
                        <span className="countInput">
                          {countPalabras.length}/20
                        </span>
                      </div>
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
                              width: "210px",
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
                              width: "102px",
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
                                width: "210px",
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
                                width: "102px",
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
                        defaultChecked={valueCheck}
                      />
                      <label
                        style={{
                          color: "#FFFFFF",
                          opacity: "0.6",
                          marginLeft: "10px",
                          fontFamily: "Montserrat-Light",
                          fontSize: "18px",
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
                      <div>
                        <Input.TextArea
                          className="inputBorderNone"
                          id="nombreInstitucion"
                          name="nombreInstitucion"
                          autoComplete="off"
                          placeholder="Ej: Sena"
                          onChange={onChangeValues}
                          value={values.nombreInstitucion}
                        />
                        <span className="countInputIns">
                          {countKeysIns.length}/20
                        </span>
                      </div>
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
                              label: decodeURIComponent(escape(item)),
                              value: decodeURIComponent(escape(item)),
                            }))}
                            onChange={(e) => changeValuesForm("tipoEstudio", e)}
                            value={values.tipoEstudio}
                            style={{ width: "325px" }}
                          />
                        </div>
                        <div className="containerStudies">
                          <label className="labelsInsputs" htmlFor="modalidad">
                            Modalidad
                          </label>
                          <Select
                            id="modalidad"
                            options={modalidades.map((item: string) => ({
                              label: item,
                              value: item,
                            }))}
                            onChange={(e) => changeValuesForm("modalidad", e)}
                            value={values.modalidad}
                            style={{ width: "325px" }}
                          />
                        </div>
                      </div>
                      {values.modalidad === "2" && (
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
                                width: "324px",
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
                                  width: "325px",
                                  marginTop: "48px",
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
              style={{ width: "165px", height: "47px" }}
              onClick={() => {
                validateForm();
              }}
              className="SaveInfo btn btn-primary"
            >
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat-Bold",
                  color: "#F7C947",
                }}
              >
                Guardar
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoWordExperience;
