import "../styles/PerfilLogin.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, Modal, Radio } from "antd";
import { SidebarEmployees } from "../PagesEmployees/SidebarEmployees";
import CustomSelect from "./CustomSelect";
import { GetDiscapacidad } from "../services/PreguntasRegistroService";
import ArrowBack from "../assets/images/LogIn_Arrow-50.png";
import { ConfirmarRegistro } from "../services/RegisterService";

const FinishRegister = ({
  setRequest,
  request,
  pasoRegistro,
  setPasoRegistro,
  onRegister,
}: any) => {
  const navigate = useNavigate();
  const [discapacidad, setDiscapacidad] = useState<any[]>([]);
  const [nivelEconomico, setNivelEconomico] = useState<number>(
    request.preguntasRegistro.nivelSocioEconomico
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [sesion, setSesion] = useState<boolean>(false);

  const getDiscapacidad = async () => {
    const res = await GetDiscapacidad();
    if (typeof res !== "string") {
      const info = res.map((item: string) => ({
        label: item,
        value: item,
      }));

      setDiscapacidad(info);
    }
  };

  const handleRadioChange = (e: any) => {
    const newRequest = { ...request };
    newRequest.preguntasRegistro.idiomaDialecto = e.target.value;
    newRequest.preguntasRegistro.idiomaDialectoTexto =
      e.target.value === "No"
        ? ""
        : newRequest.preguntasRegistro.idiomaDialectoTexto;

    setRequest(newRequest);
  };

  const handleRadioChangeArea = (e: any) => {
    const newRequest = { ...request };
    newRequest.preguntasRegistro.area = e.target.value;
    setRequest(newRequest);
  };

  const handleRadioChangeCabezaHogar = (e: any) => {
    const newRequest = { ...request };
    newRequest.preguntasRegistro.cabezaHogar = e.target.value;
    setRequest(newRequest);
  };

  const handleButtonClick = (value: number) => {
    setNivelEconomico(value);
    const newRequest = { ...request };
    newRequest.preguntasRegistro.nivelSocioEconomico = value;
    setRequest(newRequest);
  };

  const handleChange = (e: any) => {
    const newRequest = { ...request };
    newRequest.preguntasRegistro.idiomaDialectoTexto = e.target.value;
    setRequest(newRequest);
  };

  const handleChangeCode = (e: any) => {
    setCode(e.target.value);
  };

  const onRegistrar = () => {
    onRegister();
    setIsModalOpen(true);
  };

  const onComprobar = async (code: string) => {
    const payload = {
      email: request.infoPersonal.email,
      codeConfirmation: code,
    };

    const res = await ConfirmarRegistro(payload);

    if (res === "Correo Confirmado") {
      setSesion(true);
    }
  };

  const onBack = () => {
    setPasoRegistro(2);
  };

  useEffect(() => {
    getDiscapacidad();
  }, [pasoRegistro]);
  return (
    <>
      {/* <SidebarEmployees/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "650px",
          width: "600px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿Hablas algún idioma o dialecto regional además del español?
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Radio.Group
            onChange={handleRadioChange}
            value={request.preguntasRegistro.idiomaDialecto}
          >
            <div style={{ marginTop: "10px", display: "flex" }}>
              <div>
                <Radio value={"Sí"}></Radio>
                <span className="text-pregunta">Sí</span>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Radio value={"No"}></Radio>
                <span className="text-pregunta">No</span>
              </div>
            </div>
          </Radio.Group>
        </div>
        {request.preguntasRegistro.idiomaDialecto === "Sí" && (
          <div style={{ marginTop: "10px" }}>
            <span className="text-pregunta-bold">
              ¿Cuál(es)?{"   "}
              <Input
                className="input-cual"
                style={{
                  borderBottom: "2px solid white",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
                onChange={handleChange}
                value={request.preguntasRegistro.idiomaDialectoTexto}
              />
            </span>
          </div>
        )}
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿En qué tipo de área has pasado la mayor parte de tu vida?
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Radio.Group
            onChange={handleRadioChangeArea}
            value={request.preguntasRegistro.area}
          >
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <Radio value={"Área Urbana"}></Radio>
                <span className="text-pregunta">Área Urbana</span>
              </div>
              <div>
                <Radio value={"Área Rural"}></Radio>
                <span className="text-pregunta">Área Rural</span>
              </div>
              <div>
                <Radio value={"Ambas"}></Radio>
                <span className="text-pregunta">Ambas</span>
              </div>
            </div>
          </Radio.Group>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">¿Eres cabeza de hogar?</span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Radio.Group
            value={request.preguntasRegistro.cabezaHogar}
            onChange={handleRadioChangeCabezaHogar}
          >
            <div style={{ marginTop: "10px", display: "flex" }}>
              <div>
                <Radio value={"Sí"}></Radio>
                <span className="text-pregunta">Sí</span>
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Radio value={"No"}></Radio>
                <span className="text-pregunta">No</span>
              </div>
            </div>
          </Radio.Group>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿Tienes algún tipo de discapacidad?
          </span>
        </div>
        <div style={{ justifyContent: "center" }}>
          <div style={{ marginTop: "0px", display: "flex", marginLeft: "0px" }}>
            <CustomSelect
              options={discapacidad}
              placeHolder="Indigena"
              name="discapacidad"
              styleLabel="label-register-nacionalidad"
              info="preguntasRegistro"
              request={request}
              setRequest={setRequest}
            />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="text-pregunta">
            ¿Cuál es tu nivel socio-económico?
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={() => handleButtonClick(1)}
            className={
              nivelEconomico === 1 ? "button-item-click" : "button-item"
            }
          >
            {" "}
            1{" "}
          </button>
          <button
            style={{ marginLeft: "16.3px" }}
            className={
              nivelEconomico === 2 ? "button-item-click" : "button-item"
            }
            onClick={() => handleButtonClick(2)}
          >
            {" "}
            2{" "}
          </button>
          <button
            style={{ marginLeft: "16.3px" }}
            className={
              nivelEconomico === 3 ? "button-item-click" : "button-item"
            }
            onClick={() => handleButtonClick(3)}
          >
            {" "}
            3{" "}
          </button>
          <button
            style={{ marginLeft: "16.3px" }}
            className={
              nivelEconomico === 4 ? "button-item-click" : "button-item"
            }
            onClick={() => handleButtonClick(4)}
          >
            {" "}
            4{" "}
          </button>
          <button
            style={{ marginLeft: "16.3px" }}
            className={
              nivelEconomico === 5 ? "button-item-click" : "button-item"
            }
            onClick={() => handleButtonClick(5)}
          >
            {" "}
            5{" "}
          </button>
          <button
            style={{ marginLeft: "16.3px" }}
            className={
              nivelEconomico === 6 ? "button-item-click" : "button-item"
            }
            onClick={() => handleButtonClick(6)}
          >
            {" "}
            6{" "}
          </button>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            // onClick={() => navigate("/")}
            onClick={() => onRegistrar()}
            className="button-perfile-finish"
          >
            <span
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: "15px",
                color: "#4D1AE8",
              }}
            >
              Registrarme
            </span>
          </button>
          <img
            onClick={() => onBack()}
            src={ArrowBack}
            style={{ marginTop: "10px", width: "22px", cursor: "pointer", marginBottom:"20px"}}
          ></img>
        </div>
      </div>
      <div>
        <Modal
          centered
          open={isModalOpen}
          width="800px"
          bodyStyle={{ padding: "40px", height: "200px" }}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {!sesion ? (
              <>
                <span className="text-pregunta">
                  Se acaba de enviar un codigo de confirmación al siguiente
                  correo{" "}
                  <span className="text-pregunta-bold">
                    {request.infoPersonal.email}
                  </span>
                </span>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Input
                    style={{ width: "200px" }}
                    onChange={handleChangeCode}
                  ></Input>
                  <button
                    onClick={() => onComprobar(code)}
                    style={{ marginLeft: "10px" }}
                  >
                    Comprobar
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="text-pregunta">
                  Correo Confirmado
                </span>
                <button
                    onClick={() => navigate("/")}
                    style={{ marginLeft: "10px"  }}
                  >
                    Iniciar Sesion
                  </button>
              </>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default FinishRegister;
