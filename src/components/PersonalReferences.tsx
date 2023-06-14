import { useState } from "react";
import { Sidebar } from "./Sidebar";
import "../styles/PersonalReferences.css";
import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const PersonalReferences = ({
    setValidateImgs,
    validateImgs
}:any) => {
  const [typeReference, setTypeReference] = useState<boolean>(false);
  const [optionReference, setOptionReference] = useState<number>(0);
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Sidebar
          subTitle=""
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      <div style={{ width: "66rem" }}>
        <div>
          <span className="textTitleReference">Referencias Personales</span>
        </div>
        <div>
          <div
            onClick={() => {
              setTypeReference(!typeReference);
              setValidateContinue(false);
            }}
            className="optionsReferencesContainer"
          >
            <span className="typeReference">
              {optionReference === 1
                ? "Familiar"
                : optionReference === 2
                ? "Personal"
                : "Tipo de Referencia"}
            </span>
            <DownOutlined
              onClick={() => {
                setTypeReference(!typeReference);
              }}
              style={{
                scale: "0.4",
                color: "#F7C947",
                marginTop: "8px",
                zIndex: "9",
              }}
            />
          </div>
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
                    setOptionReference(1);
                    setTypeReference(false);
                  }}
                  className={
                    optionReference === 1 ? "containerTextReference" : ""
                  }
                >
                  <span
                    className={
                      optionReference === 1
                        ? "typeReferenceOption"
                        : "referenceNoSelect"
                    }
                  >
                    Familiar
                  </span>
                </div>
                <div
                  onClick={() => {
                    setOptionReference(2);
                    setTypeReference(false);
                  }}
                  className={
                    optionReference === 2 ? "containerTextReferenceOne" : ""
                  }
                >
                  <span
                    className={
                      optionReference === 2
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
        {(optionReference === 1 || optionReference === 2) && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label className="labelRefenrences">
                Nombre de la Referencia
              </label>
              <Input
                type="text"
                style={{
                  width: "783px",
                  height: "44px",
                  borderRadius: "25px",
                  background: "#633F87",
                  border: "none",
                  color: "white",
                }}
                placeholder="Nombre Completo"
              />
            </div>
            <div
              style={
                optionReference === 1
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
                <label className="labelRefenrences">
                  {optionReference === 1 ? "Parentezco" : "Relación"}
                </label>
                <Input
                  type="text"
                  style={{
                    width: "354px",
                    height: "44px",
                    borderRadius: "25px",
                    background: "#633F87",
                    border: "none",
                    color: "white",
                  }}
                  placeholder={optionReference === 1 ? "Mamá" : "Amigo"}
                />
              </div>
              {optionReference === 1 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "30px",
                    marginLeft: optionReference === 1 ? "85px" : "",
                  }}
                >
                  <label className="labelRefenrences">Correo</label>
                  <Input
                    type="text"
                    style={{
                      width: "347px",
                      height: "44px",
                      borderRadius: "25px",
                      background: "#633F87",
                      border: "none",
                      color: "white",
                    }}
                    placeholder="vivi19@gmail.com"
                  />
                </div>
              )}
            </div>
            <div style={optionReference === 2 ? {display:"flex"}: {}}>
              {optionReference === 2 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "30px",
                    marginRight:"50px"
                  }}
                >
                  <label className="labelRefenrences">Empresa</label>
                  <Input
                    type="text"
                    style={{
                      width: "354px",
                      height: "44px",
                      borderRadius: "25px",
                      background: "#633F87",
                      border: "none",
                      color: "white",
                    }}
                    placeholder="Disruptia"
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
                <label className="labelRefenrences">
                  {optionReference === 1 ? "Número Celular" : "Cargo"}
                </label>
                <Input
                  type="text"
                  style={{
                    width: optionReference === 1 ? "214px" : "380px",
                    height: "44px",
                    borderRadius: "25px",
                    background: "#633F87",
                    border: "none",
                    color: "white",
                  }}
                  placeholder={optionReference === 1 ? "+57 300 2456738" : "Director/a General"}
                />
              </div>
            </div>
          </div>
        )}
         {
           !validateContinue &&  <div style={{ marginTop: "35px" }} className="containerSaveAction">
            <button
               onClick={() => {
                setValidateContinue(true);
              }}
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              // disabled={valuesRadioSelect !== 0 ? false : true}
              className="SaveInfo btn btn-primary"
            >
              Guardar
            </button>
          </div>
         }
          <div className="containerSelect">
          <button
            className={
              validateContinue ? "buttonContinueSelect" : "ContainerDisabled"
            }
            onClick={() => {
                setValidateImgs([...validateImgs, "13"]);
                navigate("/perfiles/13");
              }}
            disabled={!validateContinue ? true : false}
          >
            <p
              className={
                !validateContinue ? "textDisabled" : "textSiguienteSelect"
              }
            >
              Siguiente
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalReferences;
