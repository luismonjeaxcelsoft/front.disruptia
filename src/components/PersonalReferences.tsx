import { useState, useEffect, useContext } from "react";
import { Sidebar } from "./Sidebar";
import "../styles/PersonalReferences.css";
import { useNavigate } from "react-router-dom";
import { GetReferencesDisrupterId } from "../services/ReferencesService";
import PersonalReference from "./PersonalReference";
import MyContext from "../context/MyContext";

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

type INITIAL_VALUES_FORM = {
  id: number;
  disrupterId: number;
  tipoReferencia: string;
  nombreCompleto: string;
  relacion: string;
  correo: string;
  celular: string;
  empresa: string;
  cargo: string;
};

const PersonalReferences = () => {
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [validateSiguiente, setValidateSiguiente] = useState<boolean>(false);
  const [values, setValues] = useState<INITIAL_VALUES_FORM[]>([
    INITIAL_VALUES_REFERENCE,
  ]);
  const navigate = useNavigate();

  const disrupterId = 1;

  const getReferences = async () => {
    const res = await GetReferencesDisrupterId(disrupterId);
    if (typeof res !== "string") {
      setValues(res);
      setValidateContinue(true);
      setValidateSiguiente(true);
    } else {
      setValues([INITIAL_VALUES_REFERENCE]);
      setValidateContinue(false);
      setValidateSiguiente(true);
    }
  };

  useEffect(() => {
    getReferences();
  }, []);
  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { myMethod, setActualizarPreview } = context;

  return (
    <>
      <div>
        <Sidebar
          subTitle="En esta sección te recomendamos incluir de dos a cuatro referencias personales o familiares. Llena los espacios a continuación. 
          Si no tienes estas referencias puedes pasar siguiente, ya que no es un campo obligatorio."
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
          open={false}
        />
      </div>
      <div>
        <span className="textTitleReference">Referencias</span>
      </div>
      {values.map((value) => {
        return (
          <PersonalReference
            key={value.id}
            value={value}
            getReferences={getReferences}
            setValidateContinue={setValidateContinue}
            setValues={setValues}
            values={values}
            setValidateSiguiente={setValidateSiguiente}
          />
        );
      })}

      {(validateContinue && values.length < 4) && (
        <div className="containerButtonContinue">
          <button
            onClick={() => {
              setValues([...values, INITIAL_VALUES_REFERENCE]);
              setValidateContinue(false);
            }}
            className="btn btn-primary hoverAgregar"
          >
            <span
              style={{
                fontSize: "20px",
                fontFamily: "Montserrat-Light",
                opacity: "0.7",
              }}
            >
              {" "}
              Agregar Referencia +
            </span>
          </button>
        </div>
      )}

      <div className="containerSelect">
        <button
          className={
            validateSiguiente ? "buttonContinueSelect" : "ContainerDisabled"
          }
          onClick={() => {
            myMethod();
            setActualizarPreview((prev: boolean) => !prev);
            navigate("/perfiles/13");
          }}
          disabled={!validateSiguiente ? true : false}
        >
          <p
            className={
              !validateSiguiente ? "textDisabled" : "textSiguienteSelect"
            }
          >
            Siguiente
          </p>
        </button>
      </div>
    </>
  );
};

export default PersonalReferences;
