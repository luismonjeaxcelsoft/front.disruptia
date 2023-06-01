import { Card, Checkbox, Input, Select } from "antd";
import { FC, useState } from "react";
import caneca from "../assets/images/canecasinFondo.png";
import { Form } from "react-router-dom";
import years from "../components/yearsData";
import CardPlegada from "./CardPlegada";

type InfoValidateExperienceProps = {
  id: number;
  valuesFilter: any;
  setValues: any;
  values: any;
  setValidateViewB: any;
};

const InfoValidateExperience: FC<InfoValidateExperienceProps> = ({
  id,
  valuesFilter,
  setValues,
  values,
  setValidateViewB,
}) => {
  const maxWords = 20;
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [valueCheck, setValueCheck] = useState<boolean>(false);
  const EliminateForm = () => {
    setValues((prevValues: any) => {
      const newValues = prevValues.filter((_form: any, i: number) => i !== id);
      return newValues;
    });
  };
  const changeValuesForm = (name: string, value: string) => {
    const palabras = value.trim().split(/\s+/);
    if (palabras.length > maxWords) {
      window.alert(
        "Se ha superado el límite de palabras permitidas... El campo no puede contener mas de 20 palabras"
      );
      return;
    }
    setValues((prevValues: any) => {
      let newValues = [...prevValues];
      newValues[id] = { ...values, [name]: value };
      return newValues;
    });
  };
  const onChangeValues = (e: any) => {
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
  return (
    <div style={{ width: "58rem" }}>
      <div>
        <p className="spanFormationAcademy">
          {id === 0 && "Experiencia Laboral"}
        </p>
      </div>
      {cardValidate ? (
        <CardPlegada
          type={"laboral"}
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
              <span className="spanStudy">Experiencia {id + 1}</span>
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
                      Nombre de la empresa
                    </label>

                    <Input
                      type="text"
                      className="inputBorderNone"
                      id="user_id"
                      name="nombreCurso"
                      autoComplete="off"
                      placeholder="Ej: Disruptia"
                      onChange={onChangeValues}
                      value={values.nombreCurso}
                      style={{ height: "57px" }}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label className="labelsInsputs" htmlFor="nameCurse">
                      Cargo que desempeñaba
                    </label>

                    <Input
                      type="text"
                      className="inputBorderNone"
                      id="user_id"
                      name="cargo"
                      autoComplete="off"
                      placeholder="Ej: Project Manager"
                      onChange={onChangeValues}
                      value={values.cargo}
                      style={{ height: "57px" }}
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
                      Actualmente
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
                      onChange={onChangeValues}
                      value={values.nombreInstitucion}
                      style={{ height: "120px" }}
                    />
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
              setValidateViewB(true);
              activeCard();
              // createStudies();
            }}
            className="SaveInfo btn btn-primary"
          >
            Guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoValidateExperience;
