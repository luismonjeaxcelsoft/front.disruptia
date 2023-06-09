import { useState, FC } from "react";
import logo from "../assets/images/disruptialogo.png";
import InfoValidateExperience from "./InfoValidateExperience";
import { useNavigate } from "react-router-dom";

const INITIAL_VALUES_FORM = {
  disrupterId: 1,
  estudioId: 1,
  nombreCurso: "",
  cargo: "",
  dateInit: "",
  fechaInicio: "",
  dateEnd: "",
  fechaFin: "",
  cursando: "",
  nombreInstitucion: "",
};

type FormValidateExpProps = {
  type: string;
  validateImgs?: any;
  setValidateImgs?: any;
  setActiveTab?:any
};

const FormValidateExp: FC<FormValidateExpProps> = ({
  type,
  setValidateImgs,
  validateImgs,
  setActiveTab
}) => {
  const navigate = useNavigate();
  const [valuesForm, setValuesForm] = useState<any>([INITIAL_VALUES_FORM]);
  const [validateViewB, setValidateViewB] = useState<boolean>(false);
  // const getFormStudies = async () => {
  //   const res = await GetStudiesId(1);
  //   if (res.length > 0) {
  //     let infoMap = res.map((item: any) => {
  //       return {
  //         disrupterId: 1,
  //         estudioId: item.estudioId,
  //         nombreCurso: item.nombreCurso,
  //         dateInit: item.dateInit,
  //         fechaInicio: item.fechaInicio,
  //         dateEnd: item.dateEnd,
  //         fechaFin: item.fechaFin,
  //         cursando: item.cursando,
  //         nombreInstitucion: item.nombreInstitucion,
  //         tipoEstudio: item.tipoEstudio,
  //         paisId: item.paisId,
  //         ciudadId: item.ciudadId,
  //       };
  //     });
  //     const nuevoArray = infoMap.reduce((accumulator: any, currentValue) => {
  //       return [...accumulator, currentValue];
  //     }, []);
  //     setValuesForm(nuevoArray);
  //   }
  // };

  // useEffect(() => {
  //   getFormStudies();
  // }, []);
  const validateNavigation = () => {
    if (type === "experience") {
      setValidateImgs([...validateImgs, "4"]);
      navigate("/perfiles/4");
      setActiveTab("4")
    } else if (type === "additionalActivity") {
      setValidateImgs([...validateImgs, "5"]);
      navigate("/perfiles/5");
      setActiveTab("5")
    } else if (type === "additionalCurse") {
      setValidateImgs([...validateImgs, "6"]);
      navigate("/perfiles/6");
      setActiveTab("6")

    }
  };
  return (
    <div>
      <div>
        {valuesForm.map((valueForm: any, i: any) => {
          return (
            <InfoValidateExperience
              valuesFilter={valuesForm}
              id={i}
              setValues={setValuesForm}
              values={valueForm}
              setValidateViewB={setValidateViewB}
              type={type}
            />
          );
        })}
      </div>

      {validateViewB && (
        <div className="containerButtonContinue">
          <button
            onClick={() => {
              setValuesForm([...valuesForm, INITIAL_VALUES_FORM]);
              setValidateViewB(false);
            }}
            className="btn btn-primary hoverAgregar"
          >
            {type === "experience"
              ? "Agregar Experiencia +"
              : type === "additionalActivity"
              ? "Agregar Actividad +"
              : type === "additionalCurse" ? "Agregar Curso +" : ""}
          </button>
        </div>
      )}

      {validateViewB && (
        <div className="containerSelect">
          <button
            onClick={() => {
              validateNavigation();
            }}
            className="buttonContinueSelect"
          >
            <p className="textSiguienteSelect">Siguiente</p>
          </button>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <img style={{ width: "100px" }} alt="" src={logo} />
      </div>
    </div>
  );
};

export default FormValidateExp;
