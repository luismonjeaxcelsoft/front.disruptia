import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import "../styles/Perfil.css";
import { Input, Spin } from "antd";
import logo from "../assets/images/disruptialogo.png";
import { useNavigate } from "react-router-dom";
import {
  GetPerfilDisrupterId,
  SavePerfilRedactado,
  ValidarPerfilRedactado,
} from "../services/PerfilRedactadoService";
import { LoadingOutlined } from "@ant-design/icons";

const Perfil = ({ setValidateImgs, validateImgs }: any) => {
  const disrupterId = 1;
  const maxWords = 150;
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [validationGpt, setValidationGpt] = useState(false);
  const [countPalabras, setCountPalabras] = useState<string[]>([]);
  const [perfil, setPerfil] = useState<string>("");
  const [idPerfil, setIdPerfil] = useState<number>(0);
  const [perfilAjustado, setPerfilAjustado] = useState<string>("");
  const [editarPerfilAjustado, setEditarPerfilAjustado] =
    useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onchangeValue = (e: any) => {
    const palabras = e.target.value.trim().split(/\s+/);
    setCountPalabras(palabras);
    if (palabras.length > maxWords) {
      window.alert(
        `Se ha superado el límite de palabras permitidas... El campo no puede contener mas de ${maxWords} palabras`
      );
      return;
    }

    const { name, value } = e.target;
    if (value !== "") {
      setValidateContinue(false);
    }
    if (name === "textoOriginal") {
      setPerfil(value);
    } else {
      setPerfilAjustado(value);
    }
  };

  const onClickEditar = () => {
    setEditarPerfilAjustado(!editarPerfilAjustado);
  };

  const dejarTexto = () => {
    setPerfil(perfilAjustado);
    setValidationGpt(false);
    setValidateContinue(false);
    const palabras = perfilAjustado.trim().split(/\s+/);
    setCountPalabras(palabras);
  };

  const savePerfil = async () => {
    const payload = {
      id: idPerfil,
      disrupterId: disrupterId,
      perfil: perfil,
      paso: 11,
    };
    const res = await SavePerfilRedactado(payload);
    if (res === "Perfil guardado") {
      setValidateContinue(true);
      getPerfil();
    }
  };

  const validarChatGPT = async () => {
    setLoading(true);
    const payload = {
      disrupterId: disrupterId,
      mensaje: perfil,
      paso: 11,
    };
    const res = await ValidarPerfilRedactado(payload);

    if (res !== "Has excedido los intentos") {
      console.log(res);
      setPerfilAjustado(res.choices[0].text);
      setValidationGpt(true);
      setLoading(false);
      setValidateContinue(false);
    } else {
      alert(res);
      setLoading(false);
    }
  };

  const getPerfil = async () => {
    const res = await GetPerfilDisrupterId(disrupterId);
    console.log(res);
    if (typeof res !== "string") {
      setPerfil(res.perfil);
      const palabras = res.perfil.trim().split(/\s+/);
      setCountPalabras(palabras);
      setIdPerfil(res.id);
    }
  };

  useEffect(() => {
    getPerfil();
  }, []);

  return (
    <>
      <div>
        <Sidebar
          title=""
          smallTitle="Crear Hoja de vida"
          subTitle=""
          backColor={false}
          img={false}
          video={true}
        />
      </div>
      <div style={{ marginBottom: "15px", marginTop: "40px" }}>
        <span className="titlePerfil">Cuéntanos ¿Cuál es tu perfil?</span>
      </div>
      <div>
        <Spin
          spinning={loading}
          size="large"
          tip={<span style={{ color: "#f7c947" }}>Validando con ChatGPT</span>}
          indicator={<LoadingOutlined style={{ color: "#f7c947" }} />}
        >
          <div className="containerTextPerfil">
            <Input.TextArea
              style={{
                background: "#613C86",
                color: "white",
                opacity: "0.75",
                fontSize: "20px",
                fontFamily: "Montserrat, Medium",
                borderRadius: "25px",
                border: "none",
              }}
              name="textoOriginal"
              onChange={onchangeValue}
              value={perfil}
            />
            <span className="countInput" style={{ top: "180px" }}>
              {countPalabras.length}/{maxWords}
            </span>
          </div>
        </Spin>
        <div
          style={{ display: "flex", marginTop: "15px", justifyContent: "end" }}
        >
          <button
            onClick={() => validarChatGPT()}
            className="buttonGpt"
            disabled={perfil.length < 1}
          >
            <span className="textButtonGpt">Validar con ChatGPT</span>
          </button>
        </div>
        {validationGpt && (
          <>
            <div style={{ marginBottom: "15px" }}>
              <span className="titlePerfil">Perfil ajustado con ChatGPT</span>
            </div>
            <div className="containerTextPerfil">
              <Input.TextArea
                style={{
                  background: "#613C86",
                  color: "white",
                  opacity: "0.75",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Light",
                  borderRadius: "25px",
                  border: "none",
                }}
                name="textoAjustado"
                onChange={onchangeValue}
                disabled={editarPerfilAjustado}
                value={perfilAjustado}
              ></Input.TextArea>
            </div>
            <div
              style={{
                display: "grid",
                marginTop: "15px",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              <button
                className="buttonGptValidation"
                onClick={() => dejarTexto()}
              >
                <span className="textButtonGptValidation">
                  Dejar texto de ChatGPT
                </span>
              </button>
              <button
                className="buttonGptValidation"
                onClick={() => onClickEditar()}
              >
                <span className="textButtonGptValidation">
                  Editar texto de ChatGPT
                </span>
              </button>
              <button
                onClick={() => setValidationGpt(false)}
                className="buttonGptValidation"
              >
                <span className="textButtonGptValidation">
                  Omitir perfil ChatGPT
                </span>
              </button>
            </div>
          </>
        )}
        {!validateContinue && (
          <div style={{ marginTop: "35px" }} className="containerSaveAction">
            <button
              onClick={() => {
                savePerfil();
              }}
              style={{
                width: "165px",
                height: "47px",
                fontSize: "18px",
                fontFamily: "Montserrat-Bold",
              }}
              className="SaveInfo btn btn-primary"
              disabled={perfil.length < 1 || validationGpt}
            >
              Guardar
            </button>
          </div>
        )}
        <div className="containerSelect">
          <button
            className={
              validateContinue ? "buttonContinueSelect" : "ContainerDisabled"
            }
            onClick={() => {
              setValidateImgs([...validateImgs, "12"]);
              navigate("/perfiles/12");
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

        <div style={{ marginTop: "30px" }} className="containerExpContinue">
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
      </div>
    </>
  );
};

export default Perfil;
