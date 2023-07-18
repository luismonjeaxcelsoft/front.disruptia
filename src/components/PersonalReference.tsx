import { Card, Form, Input } from "antd";
import { FC, useState, useEffect, useRef } from "react";
import Aroow from "../assets/images/Aroow-46.png";
import Delete from "../assets/images/Delete.png";
import CardPlegada from "./CardPlegada";
import ".././styles/PersonalReference.css";
import { DeleteReference, SaveReference } from "../services/ReferencesService";

interface InfoReferences {
  value: any;
  getReferences: any;
  setValidateContinue: any;
  setValues: any;
  values: any;
  setValidateSiguiente: any;
}
const INITIAL_VALUES_REFERENCE = {
  id: 0,
  disrupterId: 1,
  tipoReferencia: "",
  nombreCompleto: "",
  relacion: "",
  correo: "",
  celular: "",
  empresa: "",
  cargo: "",
};

const PersonalReference: FC<InfoReferences> = ({
  value,
  getReferences,
  setValidateContinue,
  setValues,
  values,
  setValidateSiguiente,
}) => {
  const [form] = Form.useForm();
  const formRef: any = useRef(null);
  const [typeReference, setTypeReference] = useState<boolean>(false);
  const [optionReference, setOptionReference] = useState<string>("");
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [reference, setReference] = useState<any>(value);
  const [valueErrors, setValueErrors] = useState<any>([]);

  const activeCardInit = () => {
    if (value.id !== 0) {
      setCardValidate(true);
      setOptionReference(value.tipoReferencia);
    }
  };

  const onChangeValues = (e: any) => {
    const { name, value } = e.target;

    const newValues = { ...reference, [name]: value };

    setReference(newValues);
  };

  const saveReference = async () => {
    if (reference.tipoReferencia === "Personal") {
      try {
        form.setFieldsValue({ nombreCompleto: reference.nombreCompleto });
        form.setFieldsValue({ relacion: reference.relacion });
        form.setFieldsValue({ empresa: reference.empresa });
        form.setFieldsValue({ cargo: reference.cargo });
        form.setFieldsValue({ correo: reference.correo });
        form.setFieldsValue({ celular: reference.celular });
        await form.validateFields();
        const res = await SaveReference(reference);
        if (res === "Referencia guardada") {
          setCardValidate(true);
          setValidateContinue(true);
          setValidateSiguiente(true);
          getReferences();
        }
      } catch (error: any) {
        console.log(error);
        const errores = error?.errorFields.flatMap((item: any) => item.name);
        setValueErrors(errores);
      }
    } else if (reference.tipoReferencia === "Familiar") {
      try {
        form.setFieldsValue({ nombreCompleto: reference.nombreCompleto });
        form.setFieldsValue({ relacion: reference.relacion });
        form.setFieldsValue({ correo: reference.correo });
        form.setFieldsValue({ celular: reference.celular });
        await form.validateFields();
        const res = await SaveReference(reference);
        if (res === "Referencia guardada") {
          setCardValidate(true);
          setValidateContinue(true);
          setValidateSiguiente(true);
          getReferences();
        }
      } catch (error: any) {
        console.log(error);
        const errores = error?.errorFields.flatMap((item: any) => item.name);
        setValueErrors(errores);
      }
    }
  };

  const EliminateForm = async () => {
    if (reference.id === 0) {
      setValues((prevValues: any) => {
        return prevValues.filter((item: any) => item.id !== 0);
      });
      setValidateContinue(true);
      setValidateSiguiente(true);
    } else {
      const res = await DeleteReference(reference.id);
      if (res === "Se elimino la referencia") {
        setValidateContinue(true);
        setValidateSiguiente(true);
        getReferences();
      }
    }
  };

  useEffect(() => {
    activeCardInit();
  }, []);

  return (
    <div style={{ width: "82rem", marginTop: "30px" }}>
      {cardValidate ? (
        <CardPlegada
          setCardValidate={setCardValidate}
          valuesFilter={value}
          type={"reference"}
          setValidateContinue={setValidateContinue}
          setValidateSiguiente={setValidateSiguiente}
        ></CardPlegada>
      ) : (
        <>
          <Card
            style={{
              background: "#310161",
              padding: "20px",
              borderRadius: "25px",
              marginTop: "10px",
              width: "85rem",
            }}
          >
            <div>
              <div className="imgCaneca">
                <span className="textTitleReference">
                  Referencia {optionReference}
                </span>
                {!(reference.id === 0 && values.length <= 1) && (
                  <img
                    style={{
                      width: "50px",
                      cursor: "pointer",
                      display: value.length === 1 ? "none" : "",
                      color: "white",
                      opacity: "0.75",
                    }}
                    src={Delete}
                    onClick={EliminateForm}
                  />
                )}
              </div>
              {value.id === 0 ? (
                <div
                  onClick={() => {
                    setTypeReference(!typeReference);
                    setReference(INITIAL_VALUES_REFERENCE);
                    setValidateContinue(false);
                    setValidateSiguiente(false);
                    setValueErrors([]);
                    form.resetFields();
                  }}
                  className="optionsReferencesContainer"
                >
                  <span className="typeReference">
                    {optionReference === "Familiar"
                      ? "Familiar"
                      : optionReference === "Personal"
                      ? "Personal"
                      : "Tipo de Referencia"}
                  </span>
                  <img
                    style={{ width: "60px" }}
                    alt="flecha_abajo"
                    src={Aroow}
                  />
                </div>
              ) : (
                <div></div>
              )}

              {typeReference && (
                <>
                  <div
                    onClick={() => {
                      setTypeReference(!typeReference);
                    }}
                    className="referencesType"
                  >
                    <div
                      onClick={() => {
                        setOptionReference("Familiar");
                        setTypeReference(false);
                        setReference({
                          ...reference,
                          tipoReferencia: "Familiar",
                        });
                      }}
                      className={
                        optionReference === "Familiar"
                          ? "containerTextReference"
                          : ""
                      }
                    >
                      <span
                        className={
                          optionReference === "Familiar"
                            ? "typeReferenceOption"
                            : "referenceNoSelect"
                        }
                      >
                        Familiar
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setOptionReference("Personal");
                        setTypeReference(false);
                        setReference({
                          ...reference,
                          tipoReferencia: "Personal",
                        });
                      }}
                      className={
                        optionReference === "Personal"
                          ? "containerTextReferenceOne"
                          : ""
                      }
                    >
                      <span
                        className={
                          optionReference === "Personal"
                            ? "typeReferenceOption"
                            : "referenceNoSelectOne"
                        }
                      >
                        Personal
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
            {(optionReference === "Familiar" ||
              optionReference === "Personal") && (
              <div>
                <Form form={form} ref={formRef}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    <label
                      className="labelRefenrences"
                      htmlFor="nombreCompleto"
                      style={
                        valueErrors.includes("nombreCompleto")
                          ? {
                              color: "#f7c947",
                              opacity: "1",
                            }
                          : {}
                      }
                    >
                      Nombre de la Referencia
                    </label>
                    <Form.Item
                      name="nombreCompleto"
                      rules={[
                        {
                          required: true,
                          message: "*Campo requerido",
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        id="nombreCompleto"
                        autoComplete="off"
                        style={{
                          paddingLeft: "20px",
                          width: "783px",
                          height: "44px",
                          borderRadius: "25px",
                          background: "#633F87",
                          border:
                            reference.nombreCompleto === "" &&
                            valueErrors.includes("nombreCompleto")
                              ? ""
                              : reference.nombreCompleto === ""
                              ? "none"
                              : "none",
                          color: "white",
                        }}
                        placeholder="Nombre Completo"
                        name="nombreCompleto"
                        defaultValue={reference.nombreCompleto}
                        onChange={onChangeValues}
                      />
                    </Form.Item>
                  </div>
                  <div
                    style={
                      optionReference === "Familiar"
                        ? { display: "flex" }
                        : { display: "flex", flexDirection: "column" }
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10px",
                      }}
                    >
                      <label
                        className="labelRefenrences"
                        htmlFor="relacion"
                        style={
                          valueErrors.includes("relacion")
                            ? {
                                color: "#f7c947",
                                opacity: "1",
                              }
                            : {}
                        }
                      >
                        {optionReference === "Familiar"
                          ? "Parentesco"
                          : "Relación"}
                      </label>
                      <Form.Item
                        name="relacion"
                        rules={[
                          {
                            required: true,
                            message: "*Campo requerido",
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          autoComplete="off"
                          style={{
                            paddingLeft: "20px",
                            width: "354px",
                            height: "44px",
                            borderRadius: "25px",
                            background: "#633F87",
                            border:
                              reference.relacion === "" &&
                              valueErrors.includes("relacion")
                                ? ""
                                : reference.relacion === ""
                                ? "none"
                                : "none",
                            color: "white",
                          }}
                          placeholder={
                            optionReference === "Familiar" ? "Mamá" : "Amigo"
                          }
                          name="relacion"
                          id="relacion"
                          defaultValue={reference.relacion}
                          onChange={onChangeValues}
                        />
                      </Form.Item>
                    </div>
                    {optionReference === "Familiar" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                          marginLeft:
                            optionReference === "Familiar" ? "85px" : "",
                        }}
                      >
                        <label
                          className="labelRefenrences"
                          style={
                            valueErrors.includes("correo")
                              ? {
                                  color: "#f7c947",
                                  opacity: "1",
                                }
                              : {}
                          }
                        >
                          Correo
                        </label>
                        <Form.Item
                          name="correo"
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                        >
                          <Input
                            type="text"
                            autoComplete="off"
                            style={{
                              paddingLeft: "20px",
                              width: "347px",
                              height: "44px",
                              borderRadius: "25px",
                              background: "#633F87",
                              border:
                                reference.correo === "" &&
                                valueErrors.includes("correo")
                                  ? ""
                                  : reference.correo === ""
                                  ? "none"
                                  : "none",
                              color: "white",
                            }}
                            placeholder="vivi19@gmail.com"
                            id="correo"
                            name="correo"
                            defaultValue={reference.correo}
                            onChange={onChangeValues}
                          />
                        </Form.Item>
                      </div>
                    )}
                  </div>
                  <div
                    style={
                      optionReference === "Personal" ? { display: "flex" } : {}
                    }
                  >
                    {optionReference === "Personal" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                          marginRight: "50px",
                        }}
                      >
                        <label
                          className="labelRefenrences"
                          style={
                            valueErrors.includes("empresa")
                              ? {
                                  color: "#f7c947",
                                  opacity: "1",
                                }
                              : {}
                          }
                        >
                          Empresa
                        </label>
                        <Form.Item
                          name="empresa"
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                        >
                          <Input
                            type="text"
                            autoComplete="off"
                            style={{
                              paddingLeft: "20px",
                              width: "354px",
                              height: "44px",
                              borderRadius: "25px",
                              background: "#633F87",
                              border:
                                reference.empresa === "" &&
                                valueErrors.includes("empresa")
                                  ? ""
                                  : reference.empresa === ""
                                  ? "none"
                                  : "none",
                              color: "white",
                            }}
                            name="empresa"
                            id="empresa"
                            placeholder="Disruptia"
                            defaultValue={reference.empresa}
                            onChange={onChangeValues}
                          />
                        </Form.Item>
                      </div>
                    )}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10px",
                      }}
                    >
                      <label
                        className="labelRefenrences"
                        style={
                          optionReference === "Familiar"
                            ? valueErrors.includes("celular")
                              ? {
                                  color: "#f7c947",
                                  opacity: "1",
                                }
                              : {}
                            : valueErrors.includes("cargo")
                            ? {
                                color: "#f7c947",
                                opacity: "1",
                              }
                            : {}
                        }
                      >
                        {optionReference === "Familiar"
                          ? "Número Celular"
                          : "Cargo"}
                      </label>
                      <Form.Item
                        name={
                          optionReference === "Familiar" ? "celular" : "cargo"
                        }
                        rules={[
                          {
                            required: true,
                            message: "*Campo requerido",
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          autoComplete="off"
                          style={{
                            paddingLeft: "20px",
                            width:
                              optionReference === "Familiar"
                                ? "214px"
                                : "380px",
                            height: "44px",
                            borderRadius: "25px",
                            background: "#633F87",
                            border:
                              optionReference === "Familiar"
                                ? reference.celular === "" &&
                                  valueErrors.includes("celular")
                                  ? ""
                                  : reference.celular === ""
                                  ? "none"
                                  : "none"
                                : reference.cargo === "" &&
                                  valueErrors.includes("cargo")
                                ? ""
                                : reference.cargo === ""
                                ? "none"
                                : "none",
                            color: "white",
                          }}
                          placeholder={
                            optionReference === "Familiar"
                              ? "+57 300 2456738"
                              : "Director/a General"
                          }
                          defaultValue={
                            optionReference === "Familiar"
                              ? reference.celular
                              : reference.cargo
                          }
                          id={
                            optionReference === "Familiar" ? "celular" : "cargo"
                          }
                          name={
                            optionReference === "Familiar" ? "celular" : "cargo"
                          }
                          onChange={onChangeValues}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  {optionReference === "Personal" && (
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                        }}
                      >
                        <label
                          className="labelRefenrences"
                          style={
                            valueErrors.includes("celular")
                              ? {
                                  color: "#f7c947",
                                  opacity: "1",
                                }
                              : {}
                          }
                        >
                          Número Celular
                        </label>
                        <Form.Item
                          name="celular"
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                        >
                          <Input
                            type="text"
                            autoComplete="off"
                            style={{
                              paddingLeft: "20px",
                              width: "214px",
                              height: "44px",
                              borderRadius: "25px",
                              background: "#633F87",
                              border:
                                reference.celular === "" &&
                                valueErrors.includes("celular")
                                  ? ""
                                  : reference.celular === ""
                                  ? "none"
                                  : "none",
                              color: "white",
                            }}
                            placeholder={"+57 300 2456738"}
                            name="celular"
                            id="celular"
                            defaultValue={reference.celular}
                            onChange={onChangeValues}
                          />
                        </Form.Item>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "10px",
                          marginLeft: "190px",
                        }}
                      >
                        <label
                          className="labelRefenrences"
                          style={
                            valueErrors.includes("correo")
                              ? {
                                  color: "#f7c947",
                                  opacity: "1",
                                }
                              : {}
                          }
                        >
                          Correo
                        </label>
                        <Form.Item
                          name="correo"
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                        >
                          <Input
                            type="text"
                            autoComplete="off"
                            style={{
                              paddingLeft: "20px",
                              width: "347px",
                              height: "44px",
                              borderRadius: "25px",
                              background: "#633F87",
                              border:
                                reference.correo === "" &&
                                valueErrors.includes("correo")
                                  ? ""
                                  : reference.correo === ""
                                  ? "none"
                                  : "none",
                              color: "white",
                            }}
                            placeholder="vivi19@gmail.com"
                            name="correo"
                            id="correo"
                            defaultValue={reference.correo}
                            onChange={onChangeValues}
                          />
                        </Form.Item>
                      </div>
                    </div>
                  )}
                </Form>
              </div>
            )}
          </Card>

          <div
            style={{ marginTop: "35px", marginBottom: "35px" }}
            className="containerSaveAction"
          >
            <button
              onClick={() => {
                saveReference();
              }}
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              disabled={
                reference.tipoReferencia !== "Personal" &&
                reference.tipoReferencia !== "Familiar"
                  ? true
                  : false
              }
              className="SaveInfo btn btn-primary"
            >
              Guardar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalReference;
