import { Card, Checkbox, Input, Select, Switch, Radio } from "antd";
import { FC, useEffect, useState } from "react";
import caneca from "../assets/images/canecasinFondo.png";
import { Form } from "react-router-dom";
import years from "../components/yearsData";
import CardPlegada from "./CardPlegada";
import { Sidebar } from "./Sidebar";
import {
  DeleteExperience,
  SaveExperience,
} from "../services/ExperienceService";
import { CreateActivity, DeleteActivity } from "../services/ActivityService";
import {
  DeleteComplemento,
  SaveComplemento,
} from "../services/ComplementService";
type InfoValidateExperienceProps = {
  id: number;
  valuesFilter: any;
  setValues: any;
  values: any;
  setValidateViewB: any;
  type: string;
  valuesRes: any;
  getForms: any;
};

const InfoValidateExperience: FC<InfoValidateExperienceProps> = ({
  id,
  valuesFilter,
  setValues,
  values,
  setValidateViewB,
  type,
  valuesRes,
  getForms,
}) => {
  const maxWords = 20;
  const maxWordsIns = 50;
  const [valueCheck, setValueCheck] = useState<boolean>(values.cursando);
  const [countPalabras, setCountPalabras] = useState<string>("");
  const [countKeysIns, setCountKeysIns] = useState<string>("");
  const [tipoActividadState, setTipoActividadState] = useState<string>("");
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [countKeysLogrosObtenidos, setCountKeysLogrosObtenidos] =
    useState<string>("");
  const [valueSwitch, setValueSwitch] = useState<boolean>(
    values.certificacion || false
  );

  const EliminateForm = async () => {
    setValues((prevValues: any) => {
      const newValues = prevValues.filter((_form: any, i: number) => i !== id);
      return newValues;
    });
    console.log(values.id);
    const deleteDto = {
      disrupterId: values.disrupterId,
      itemId: values.id,
    };
    if (values.id !== undefined) {
      if (type === "experience") {
        await DeleteExperience(deleteDto);
      } else if (type === "additionalActivity") {
        await DeleteActivity(deleteDto);
      } else {
        await DeleteComplemento(deleteDto);
      }
    }
  };
  const changeValuesForm = (name: string, value: string) => {
    setValues((prevValues: any) => {
      let newValues = [...prevValues];
      newValues[id] = { ...values, [name]: value };
      return newValues;
    });
  };
  const onChangeValues = (e: any) => {
    const palabras = e.target.value.trim().split(/\s+/);
    if (
      e.target?.id === "nombreCurso" ||
      e.target?.id === "nombreEmpresa" ||
      e.target?.id === "nombreActividad"
    ) {
      setCountPalabras(palabras);
    } else if (e.target?.id === "cargo" || e.target?.id === "organizacion") {
      setCountKeysIns(palabras);
    }
    if (e.target?.id !== "nombreInstitucion" && palabras.length > maxWords) {
      window.alert(
        "Se ha superado el límite de palabras permitidas... El campo no puede contener mas de 20 palabras"
      );
      return;
    } else if (
      e.target?.id === "nombreInstitucion" ||
      e.target?.id === "logros"
    ) {
      setCountKeysLogrosObtenidos(palabras);
      if (palabras.length > maxWordsIns) {
        window.alert(
          "Se ha superado el límite de palabras permitidas... El campo no puede contener mas de 50 palabras"
        );
        return;
      }
    }
    const { name, value } = e.target;
    changeValuesForm(name, value);
  };
  const activeCard = () => {
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

  const validateFormExperience = () => {
    const { nombreEmpresa, cargo, fechaInicio, logros } = values;

    if (
      nombreEmpresa !== "" &&
      fechaInicio !== "" &&
      cargo !== "" &&
      logros !== ""
    ) {
      saveForm();
      activeCard();
      setValidateViewB(true);
    } else {
      window.alert("Por favor diligencie todos los campos");
    }
  };

  const validateFormExtracurricular = () => {
    values["tipoActividad"] = tipoActividadState;
    const { nombreActividad, organizacion, fechaInicio, tipoActividad } =
      values;
    console.log(values);

    if (
      nombreActividad !== "" &&
      fechaInicio !== "" &&
      organizacion !== "" &&
      tipoActividad !== ""
    ) {
      saveForm();
      activeCard();
      setValidateViewB(true);
    } else {
      window.alert("Por favor diligencie todos los campos");
    }
  };

  const validateFormComplementaria = () => {
    const { nombreCurso, nombreInstitucion, fechaInicio } = values;

    values["certificacion"] = valueSwitch;
    console.log(values);
    if (nombreCurso !== "" && fechaInicio !== "" && nombreInstitucion !== "") {
      saveForm();
      activeCard();
      setValidateViewB(true);
    } else {
      window.alert("Por favor diligencie todos los campos");
    }
  };

  const saveForm = async () => {
    delete values.dateInit, delete values.dateEnd;
    if (values.id === "") {
      values["id"] = null;
    }
    values["cursando"] = valueCheck;
    console.log(values);

    if (type === "experience") {
      const res = await SaveExperience(values);
      if (res === "Experiencia guardada") {
        setValidateViewB(true);
      }
    } else if (type === "additionalActivity") {
      const res = await CreateActivity(values);
      if (res === "Actividad guardada") {
        setValidateViewB(true);
      }
    } else {
      const res = await SaveComplemento(values);
      if (res === "Informacion complementaria guardada") {
        setValidateViewB(true);
      }
    }

    getForms();
  };

  const handleRadioChange = (e) => {
    setTipoActividadState(e.target.value);
  };

  useEffect(() => {
    activeCardInit();
    setValueCheck(values.cursando);
    if (type === "additionalActivity") {
      setTipoActividadState(values.tipoActividad);
    }
    if (type === "additionalCurse") {
      setValueSwitch(values.certificacion);
    }
  }, [valuesRes]);

  return (
    <>
      <div>
        <Sidebar
          subTitle={
            type === "additionalCurse"
              ? "En esta sección registra tu formación complementaria como: talleres, seminarios, diplomados, cursos, entre otros."
              : ""
          }
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={
            type === "experience" || type === "additionalActivity"
              ? true
              : false
          }
        />
      </div>
      <div style={{ width: "75rem" }}>
        <div style={{ marginTop: "40px" }}>
          <p className="spanFormationAcademy">
            {id === 0 && type === "experience"
              ? "Experiencia Laboral"
              : id === 0 && type === "additionalCurse"
              ? "Información Complementaria"
              : id === 0 && type === "additionalActivity"
              ? ""
              : ""}
          </p>
        </div>
        <div>
          {cardValidate ? (
            <CardPlegada
              type={type}
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
                  <span className="spanStudy">
                    {type === "experience"
                      ? "Experiencia"
                      : type === "additionalCurse"
                      ? "Cursos Adicionales"
                      : "Actividad"}{" "}
                    {id + 1}
                  </span>
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
                          {type === "experience"
                            ? "Nombre de la empresa"
                            : type === "additionalCurse"
                            ? "Nombre del curso"
                            : "Nombre de la Actividad"}
                        </label>

                        <div>
                          <Input.TextArea
                            className="inputBorderNone"
                            id={
                              type === "experience"
                                ? "nombreEmpresa"
                                : type === "additionalCurse"
                                ? "nombreCurso"
                                : "nombreActividad"
                            }
                            name={
                              type === "experience"
                                ? "nombreEmpresa"
                                : type === "additionalCurse"
                                ? "nombreCurso"
                                : "nombreActividad"
                            }
                            autoComplete="off"
                            placeholder="Ej: Disruptia"
                            onChange={onChangeValues}
                            value={
                              type === "experience"
                                ? values.nombreEmpresa
                                : type === "additionalCurse"
                                ? values.nombreCurso
                                : values.nombreActividad
                            }
                            style={{ height: "57px" }}
                          />
                          <span className="countInput">
                            {countPalabras.length}/20
                          </span>
                        </div>
                      </div>
                      {type !== "additionalCurse" && (
                        <div style={{ marginBottom: "15px" }}>
                          <label className="labelsInsputs" htmlFor="nameCurse">
                            {type === "experience"
                              ? "Cargo que desempeñaba"
                              : "Organización"}
                          </label>

                          <div>
                            <Input.TextArea
                              className="inputBorderNone"
                              id={
                                type === "experience" ? "cargo" : "organizacion"
                              }
                              name={
                                type === "experience" ? "cargo" : "organizacion"
                              }
                              autoComplete="off"
                              placeholder="Ej: Project Manager"
                              onChange={onChangeValues}
                              value={
                                type === "experience"
                                  ? values.cargo
                                  : values.organizacion
                              }
                              style={{ height: "57px" }}
                            />
                            <span
                              className="countInputIns"
                              style={{ top: "262px" }}
                            >
                              {countKeysIns.length}/20
                            </span>
                          </div>
                        </div>
                      )}
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
                          <div style={{ display: "flex" }}>
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
                            fontFamily: "Montserrat-Medium",
                            fontSize: "18px",
                          }}
                        >
                          {type === "experience"
                            ? "Actualmente"
                            : "Cursando Actualmente"}
                        </label>
                      </div>
                      {type !== "additionalActivity" && (
                        <div style={{ marginBottom: "15px" }}>
                          <label
                            className="labelsInsputs"
                            htmlFor="nombreInstitucion"
                          >
                            {type === "experience"
                              ? "¿Cuáles fueron los logros obtenidos en esta experiencia?"
                              : "Institución"}
                          </label>
                          <div>
                            <Input.TextArea
                              className="inputBorderNone"
                              id={
                                type === "experience"
                                  ? "logros"
                                  : "nombreInstitucion"
                              }
                              name={
                                type === "experience"
                                  ? "logros"
                                  : "nombreInstitucion"
                              }
                              autoComplete="off"
                              onChange={onChangeValues}
                              value={
                                type === "experience"
                                  ? values.logros
                                  : values.nombreInstitucion
                              }
                              style={{ height: "120px" }}
                            />
                            <span
                              className="countInputIns"
                              style={{
                                top: type === "experience" ? "480px" : "460px",
                              }}
                            >
                              {countKeysLogrosObtenidos.length}/50
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    {type === "additionalCurse" && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label
                          style={{
                            color: "white",
                            fontSize: "18px",
                            fontFamily: "Montserrat-Medium",
                            opacity: "0.7",
                          }}
                        >
                          ¿Cuento con certificación del curso?
                        </label>
                        <div>
                          <Switch
                            onChange={setValueSwitch}
                            checkedChildren="SI"
                            unCheckedChildren="NO"
                            defaultChecked={valueSwitch}
                            style={{ width: "60px" }}
                          />
                        </div>
                      </div>
                    )}
                    {type === "additionalActivity" && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Radio.Group
                          onChange={handleRadioChange}
                          value={tipoActividadState}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Radio value="Voluntariado">
                              <span className="spanTypeVoluntary">
                                Voluntariado
                              </span>
                            </Radio>
                            <Radio value="Actividad extracurricular">
                              <span className="spanTypeVoluntary">
                                Actividad extracurricular
                              </span>
                            </Radio>
                            <Radio value="Actividad Comunitaria">
                              <span className="spanTypeVoluntary">
                                Actividad Comunitaria
                              </span>
                            </Radio>
                            <Radio value="Servicio Social">
                              <span className="spanTypeVoluntary">
                                Servicio Social
                              </span>
                            </Radio>
                            <Radio value="Emprendimiento">
                              <span className="spanTypeVoluntary">
                                Emprendimiento
                              </span>
                            </Radio>
                            <Radio value="Experiencia Informal">
                              <span className="spanTypeVoluntary">
                                Experiencia Informal
                              </span>
                            </Radio>
                            <Radio value="Otra">
                              <span className="spanTypeVoluntary">
                                Otra _______________________
                              </span>
                            </Radio>
                          </div>
                        </Radio.Group>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </Card>
          )}
        </div>

        {!cardValidate && (
          <div className="containerSaveAction">
            <button
              style={{ width: "165px", height: "47px" }}
              onClick={() => {
                if (type === "experience") {
                  validateFormExperience();
                } else if (type === "additionalActivity") {
                  validateFormExtracurricular();
                } else {
                  validateFormComplementaria();
                }
              }}
              className="SaveInfo btn btn-primary"
            >
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat-Bold",
                  color: "rgb(247, 201, 71)",
                }}
              >
                Guardar
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default InfoValidateExperience;
