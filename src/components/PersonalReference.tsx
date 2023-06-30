import { Card, Input } from "antd";
import { FC, useState, useEffect } from "react";
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
  const [typeReference, setTypeReference] = useState<boolean>(false);
  const [optionReference, setOptionReference] = useState<string>("");
  const [cardValidate, setCardValidate] = useState<boolean>(false);
  const [reference, setReference] = useState<any>(value);

  const activeCardInit = () => {
    if (value.id !== 0) {
      setCardValidate(true);
      setOptionReference(value.tipoReferencia);
    }
  };

  const onChangeValues = (e: any) => {
    console.log(e.target.value);

    const { name, value } = e.target;

    const newValues = { ...reference, [name]: value };

    setReference(newValues);
  };

  const saveReference = async () => {
    if (reference.tipoReferencia === "Personal") {
      if (
        reference.nombreCompleto !== "" &&
        reference.relacion !== "" &&
        reference.empresa !== "" &&
        reference.cargo !== "" &&
        reference.correo !== "" &&
        reference.celular !== ""
      ) {
        const res = await SaveReference(reference);
        if (res === "Referencia guardada") {
          setCardValidate(true);
          getReferences();
        }
      } else {
        window.alert("Tienes que completar los campos");
      }
    } else if (reference.tipoReferencia === "Familiar") {
      if (
        reference.nombreCompleto !== "" &&
        reference.relacion !== "" &&
        reference.correo !== "" &&
        reference.celular !== ""
      ) {
        const res = await SaveReference(reference);
        if (res === "Referencia guardada") {
          setCardValidate(true);
          getReferences();
        }
      } else {
        window.alert("Tienes que completar los campos");
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "30px",
                  }}
                >
                  <label
                    className="labelRefenrences"
                    style={{ paddingLeft: "20px" }}
                  >
                    Nombre de la Referencia
                  </label>
                  <Input
                    type="text"
                    style={{
                      paddingLeft: "20px",
                      width: "783px",
                      height: "44px",
                      borderRadius: "25px",
                      background: "#633F87",
                      border: "none",
                      color: "white",
                    }}
                    placeholder="Nombre Completo"
                    name="nombreCompleto"
                    value={reference.nombreCompleto}
                    onChange={onChangeValues}
                  />
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
                      marginTop: "30px",
                    }}
                  >
                    <label
                      className="labelRefenrences"
                      style={{ paddingLeft: "20px" }}
                    >
                      {optionReference === "Familiar"
                        ? "Parentesco"
                        : "Relación"}
                    </label>
                    <Input
                      type="text"
                      style={{
                        paddingLeft: "20px",
                        width: "354px",
                        height: "44px",
                        borderRadius: "25px",
                        background: "#633F87",
                        border: "none",
                        color: "white",
                      }}
                      placeholder={
                        optionReference === "Familiar" ? "Mamá" : "Amigo"
                      }
                      name="relacion"
                      value={reference.relacion}
                      onChange={onChangeValues}
                    />
                  </div>
                  {optionReference === "Familiar" && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "30px",
                        marginLeft:
                          optionReference === "Familiar" ? "85px" : "",
                      }}
                    >
                      <label
                        className="labelRefenrences"
                        style={{ paddingLeft: "20px" }}
                      >
                        Correo
                      </label>
                      <Input
                        type="text"
                        style={{
                          paddingLeft: "20px",
                          width: "347px",
                          height: "44px",
                          borderRadius: "25px",
                          background: "#633F87",
                          border: "none",
                          color: "white",
                        }}
                        placeholder="vivi19@gmail.com"
                        name="correo"
                        value={reference.correo}
                        onChange={onChangeValues}
                      />
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
                        marginTop: "30px",
                        marginRight: "50px",
                      }}
                    >
                      <label
                        className="labelRefenrences"
                        style={{ paddingLeft: "20px" }}
                      >
                        Empresa
                      </label>
                      <Input
                        type="text"
                        style={{
                          paddingLeft: "20px",
                          width: "354px",
                          height: "44px",
                          borderRadius: "25px",
                          background: "#633F87",
                          border: "none",
                          color: "white",
                        }}
                        name="empresa"
                        placeholder="Disruptia"
                        value={reference.empresa}
                        onChange={onChangeValues}
                      />
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "30px",
                    }}
                  >
                    <label
                      className="labelRefenrences"
                      style={{ paddingLeft: "20px" }}
                    >
                      {optionReference === "Familiar"
                        ? "Número Celular"
                        : "Cargo"}
                    </label>
                    <Input
                      type="text"
                      style={{
                        paddingLeft: "20px",
                        width:
                          optionReference === "Familiar" ? "214px" : "380px",
                        height: "44px",
                        borderRadius: "25px",
                        background: "#633F87",
                        border: "none",
                        color: "white",
                      }}
                      placeholder={
                        optionReference === "Familiar"
                          ? "+57 300 2456738"
                          : "Director/a General"
                      }
                      value={
                        optionReference === "Familiar"
                          ? reference.celular
                          : reference.cargo
                      }
                      name={
                        optionReference === "Familiar" ? "celular" : "cargo"
                      }
                      onChange={onChangeValues}
                    />
                  </div>
                </div>
                {optionReference === "Personal" && (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "30px",
                      }}
                    >
                      <label
                        className="labelRefenrences"
                        style={{ paddingLeft: "20px" }}
                      >
                        Número Celular
                      </label>
                      <Input
                        type="text"
                        style={{
                          paddingLeft: "20px",
                          width: "214px",
                          height: "44px",
                          borderRadius: "25px",
                          background: "#633F87",
                          border: "none",
                          color: "white",
                        }}
                        placeholder={"+57 300 2456738"}
                        name="celular"
                        value={reference.celular}
                        onChange={onChangeValues}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "30px",
                        marginLeft: "190px",
                      }}
                    >
                      <label
                        className="labelRefenrences"
                        style={{ paddingLeft: "20px" }}
                      >
                        Correo
                      </label>
                      <Input
                        type="text"
                        style={{
                          paddingLeft: "20px",
                          width: "347px",
                          height: "44px",
                          borderRadius: "25px",
                          background: "#633F87",
                          border: "none",
                          color: "white",
                        }}
                        placeholder="vivi19@gmail.com"
                        name="correo"
                        value={reference.correo}
                        onChange={onChangeValues}
                      />
                    </div>
                  </div>
                )}
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
                setValidateContinue(true);
                setValidateSiguiente(true);
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
