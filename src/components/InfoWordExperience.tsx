import { Card, Checkbox, Form, Input, Select } from "antd";
import { FC, useEffect, useState, useRef } from "react";
import ".././styles/InfoWordExp.css";
import CardPlegada from "./CardPlegada";
import years from "../components/yearsData";
import {
  CreateStudy,
  DeleteStudie,
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
  getFormStudies: any;
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
  getFormStudies,
}) => {
  const [form] = Form.useForm();
  const formRef: any = useRef(null);
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [valuesAcademy, setValuesAcademy] = useState<string[]>([]);
  const [modalidades, setModalidades] = useState<string[]>([]);
  const [countries, setCountries] = useState<Array<VALUESCOUNTRIES>>([]);
  const [municipality, setMunicipality] = useState<Array<MUNICIPALITYINFO>>([]);
  const [valueCheck, setValueCheck] = useState<boolean>(values.cursando);
  const [countPalabras, setCountPalabras] = useState<string>("");
  const [countKeysIns, setCountKeysIns] = useState<string>("");
  const [valueErrors, setValueErrors] = useState<any>([]);
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
      const newValues = [...prevValues];
      newValues[id] = { ...values, [name]: value };
      return newValues;
    });
  };
  const EliminateForm = async () => {
    setValues((prevValues: any) => {
      const newValues = prevValues.filter((_form: any, i: number) => i !== id);
      return newValues;
    });
    await DeleteStudie(values.id);
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
    if (values.id === "") {
      values["id"] = null;
    }
    values["cursando"] = valueCheck;

    const res = await CreateStudy(values);
    if (res === "Estudio guardado") {
      setValidateViewB(true);
      getFormStudies();
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
  const validateForm = async () => {
    try {
      form.setFieldsValue({ nombreCurso: values.nombreCurso });
      form.setFieldsValue({ fechaInicio: values.fechaInicio });
      form.setFieldsValue({ fechaFin: values.fechaFin });
      form.setFieldsValue({ nombreInstitucion: values.nombreInstitucion });
      form.setFieldsValue({ tipoEstudio: values.tipoEstudio });
      form.setFieldsValue({ modalidad: values.modalidad });
      form.setFieldsValue({ pais: values.pais });
      await form.validateFields();
      await createStudies();
      activeCard();
    } catch (error: any) {
      const errores = error?.errorFields.flatMap((item: any) => item.name);
      setValueErrors(errores);
    }
  };

  useEffect(() => {
    getInfoAcademy();
    activeCardInit();
    setValueCheck(values.cursando);
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
          open={false}          
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
            setValidateViewB={setValidateViewB}
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
                <Form form={form} ref={formRef}>
                  <div>
                    <div style={{ marginBottom: "15px" }}>
                      <label
                        className="labelsInsputs "
                        htmlFor="nombreCurso"
                        style={
                          valueErrors.includes("nombreCurso")
                            ? { color: "#f7c947", opacity: "1" }
                            : {}
                        }
                      >
                        Titulo academico
                      </label>
                      <div>
                        <Form.Item
                          name="nombreCurso"
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                        >
                          <Input.TextArea
                            className="inputBorderNone"
                            id="nombreCurso"
                            name="nombreCurso"
                            autoComplete="off"
                            placeholder="Ej: Técnico en servicio al cliente y ventas"
                            onChange={onChangeValues}
                            defaultValue={values.nombreCurso}
                          />
                        </Form.Item>
                        <span style={{top:"160px"}} className="countInputTitulo">
                          {countPalabras.length}/20
                        </span>
                      </div>
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
                    <div className="containerDate">
                      <div
                        style={{
                          marginBottom: "15px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <label
                          className="labelsInsputs"
                          htmlFor="dateInit"
                          style={
                            valueErrors.includes("fechaInicio")
                              ? { color: "#f7c947", opacity: "1" }
                              : {}
                          }
                        >
                          Fecha de inicio
                        </label>
                        <div>
                          <Form.Item
                            name="fechaInicio"
                            rules={[
                              {
                                required: true,
                                message: "*Campo requerido",
                              },
                            ]}
                          >
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
                              defaultValue={
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
                              defaultValue={values.fechaInicio.split("-")[1]}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      {!valueCheck && (
                        <div style={{ marginBottom: "15px" }}>
                          <label
                            style={
                              valueErrors.includes("fechaFin")
                                ? { color: "#f7c947", opacity: "1" }
                                : {}
                            }
                            className="labelsInsputs"
                            htmlFor="dateEnd"
                          >
                            Fecha de finalización
                          </label>
                          <div>
                            <Form.Item
                              name="fechaFin"
                              rules={[
                                {
                                  required: !valueCheck ? true : false,
                                  message: "*Campo requerido",
                                },
                              ]}
                            >
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
                            </Form.Item>
                          </div>
                        </div>
                      )}
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label
                        className="labelsInsputs"
                        htmlFor="nombreInstitucion"
                        style={
                          valueErrors.includes("nombreInstitucion")
                            ? { color: "#f7c947", opacity: "1" }
                            : {}
                        }
                      >
                        Institución Educativa
                      </label>
                      <div>
                        <Form.Item
                          name="nombreInstitucion"
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                        >
                          <Input.TextArea
                            className="inputBorderNone"
                            id="nombreInstitucion"
                            name="nombreInstitucion"
                            autoComplete="off"
                            placeholder="Ej: Sena"
                            onChange={onChangeValues}
                            defaultValue={values.nombreInstitucion}
                          />
                        </Form.Item>

                        <span style={{top:"420px"}} className="countInputIns">
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
                            style={
                              valueErrors.includes("tipoEstudio")
                                ? { color: "#f7c947", opacity: "1" }
                                : {}
                            }
                          >
                            Tipo de estudio
                          </label>
                          <Form.Item
                            name="tipoEstudio"
                            rules={[
                              {
                                required: true,
                                message: "*Campo requerido",
                              },
                            ]}
                          >
                            <Select
                              id="tipoEstudio"
                              options={valuesAcademy.map((item: any) => ({
                                label: item,
                                value: item,
                              }))}
                              onChange={(e) =>
                                changeValuesForm("tipoEstudio", e)
                              }
                              defaultValue={values.tipoEstudio}
                              style={{ width: "325px" }}
                            />
                          </Form.Item>
                        </div>
                        <div className="containerStudies">
                          <label
                            style={
                              valueErrors.includes("modalidad")
                                ? { color: "#f7c947", opacity: "1" }
                                : {}
                            }
                            className="labelsInsputs"
                            htmlFor="modalidad"
                          >
                            Modalidad
                          </label>
                          <Form.Item
                            name="modalidad"
                            rules={[
                              {
                                required: true,
                                message: "*Campo requerido",
                              },
                            ]}
                          >
                            <Select
                              id="modalidad"
                              options={modalidades.map((item: string) => ({
                                label: item,
                                value: item,
                              }))}
                              onChange={(e) => changeValuesForm("modalidad", e)}
                              defaultValue={values.modalidad}
                              style={{ width: "325px" }}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      {values.modalidad === "Presencial" && (
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
                            <label
                              style={
                                valueErrors.includes("pais")
                                  ? { color: "#f7c947", opacity: "1" }
                                  : {}
                              }
                              className="labelsInsputs"
                              htmlFor="paisId"
                            >
                              País y Ciudad donde curso
                            </label>
                            <Form.Item
                              name="pais"
                              rules={[
                                {
                                  required: true,
                                  message: "*Campo requerido",
                                },
                              ]}
                            >
                              <Select
                                style={{
                                  background: "#4F2678",
                                  color: "white",
                                  width: "324px",
                                }}
                                id="pais"
                                options={countries.map((item: any) => ({
                                  label: item.nombrePais,
                                  value: item.nombrePais,
                                }))}
                                onChange={(e) => {
                                  changeValuesForm("pais", e);
                                }}
                                defaultValue={values.pais}
                              />
                            </Form.Item>
                          </div>
                          <div>
                            {values.pais === "Colombia" && (
                              <Form.Item
                                name="ciudad"
                                rules={[
                                  {
                                    required: true,
                                    message: "*Campo requerido",
                                  },
                                ]}
                              >
                                <Select
                                  style={{
                                    background: "#4F2678",
                                    color: "white",
                                    width: "325px",
                                    marginTop: "48px",
                                  }}
                                  id="ciudad"
                                  options={municipality.map((item: any) => ({
                                    label: item.municipioDepartamento,
                                    value: item.municipioDepartamento,
                                  }))}
                                  onChange={(e) =>
                                    changeValuesForm("ciudad", e)
                                  }
                                  defaultValue={values.ciudad}
                                />
                              </Form.Item>
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
