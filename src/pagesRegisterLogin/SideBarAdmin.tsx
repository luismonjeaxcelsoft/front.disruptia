import "../styles/Sidebar.css";
import { FC, useState } from "react";
import {
  // CloseOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Deslizar from "../assets/images/Deslizar.png";
import logo from "../assets/images/disruptialogo.png";
import "../styles/SideBarAdmin.css";
import { Checkbox, Form, Input } from "antd";
import { LoginDisrupter } from "../services/LoginService";
interface SidebarAdmin {
  type?: string;
  setInLogin?: any;
}

const LOGIN_INITIAL = {
  email: "",
  password:""
}

export const SidebarAdmin: FC<SidebarAdmin> = ({ type, setInLogin }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [textPassword, setTextPassword] = useState<boolean>(false);
  const [valueCheck, setvalueCheck] = useState<number>(0);
  const [messagePassword, setMessagePassword] = useState(false);
  const [login, setLogin] = useState(LOGIN_INITIAL);

  const handleText = (e:any) => {
    const {name, value} = e.target;

    setLogin({...login, [name]: value })
    

  }

  const onLogin = async() => {
    const res = await LoginDisrupter(login);

    if(res.message === "Succesfully login") {
      console.log(res)
      setInLogin(true)
    } else {
      alert("Error al iniciar Sesión")
    }

  }

  return (
    <div>
      <div className={isOpen ? "sidebar-register" : "sidebar"}>
        <div>
          {!isOpen && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                onClick={() => setIsOpen(!isOpen)}
                style={{ width: "60px", cursor: "pointer" }}
                src={Deslizar}
              />
              <span
                style={{
                  fontSize: "10px",
                  color: "white",
                  fontFamily: "Montserrat-Bold",
                }}
              >
                Despliega aquí
              </span>
            </div>
          )}
          {isOpen && (
            <div>
              <div>
                <div className="container-subt-sidebar">
                  <img
                    style={{ width: "120px", height: "50px" }}
                    alt=""
                    src={logo}
                  />
                  {/* <button
                    className="buttonclose"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <CloseOutlined style={{ fontSize: "30px" }} />
                  </button> */}
                </div>
                <div
                  style={
                    messagePassword
                      ? { marginLeft: "20%" }
                      : { marginLeft: "20%" }
                  }
                  className="container-form-login"
                >
                  {!messagePassword ? (
                    <div style={{ marginBottom: "15px" }}>
                      <span
                        className={
                          type === "validate"
                            ? "text-inicio-recuperar-contraseña"
                            : valueCheck === 2
                            ? "text-inicio-recuperar-contraseña"
                            : "text-inicio-sesion"
                        }
                      >
                        {type === "validate"
                          ? "Recuperar Contraseña"
                          : valueCheck === 2
                          ? "¿Olvidaste tu contraseña?"
                          : "Iniciar Sesión"}
                      </span>
                    </div>
                  ) : (
                    <div style={{ marginBottom: "15px" }}>
                      <span className={"text-inicio-recuperar-contraseña"}>
                        Te enviamos un correo electrónico
                      </span>
                    </div>
                  )}
                  {!messagePassword && (
                    <div>
                      <Form>
                        <div
                          style={
                            type === "validate"
                              ? { display: "flex", flexDirection: "column" }
                              : {}
                          }
                        >
                          {type === "validate" && (
                            <label className="text-label-validate-pass">
                              Nueva contraseña
                            </label>
                          )}
                          <Input
                            placeholder={
                              type === "validate"
                                ? "Contraseña"
                                : "Correo electrónico"
                            }
                            className="input-login-form"
                            name="email"
                            onChange={handleText}
                            type={type === "validate" ? "password" : "email"}
                          />
                        </div>
                        {valueCheck !== 2 && (
                          <>
                            <div style={{ marginTop: "30px" }}>
                              {type === "validate" && (
                                <label className="text-label-validate-pass">
                                  Confirmar contraseña
                                </label>
                              )}
                              <Input
                                type={textPassword ? "text" : "password"}
                                placeholder="Contraseña"
                                name="password"
                                onChange={handleText}
                                className="input-login-form"
                              />
                              <div
                                onClick={() => setTextPassword(!textPassword)}
                                style={{
                                  position: "absolute",
                                  left: "70%",
                                  top: "256px",
                                  color: "white",
                                  cursor: "pointer",
                                  display: "flex",
                                }}
                              >
                                <span>Ver</span>
                              </div>
                            </div>
                            {type !== "validate" && (
                              <>
                                {/* <div
                                  style={{
                                    marginLeft: "20px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <Checkbox>
                                    <span
                                      style={{
                                        color: "white",
                                        opacity: "0.7",
                                        fontFamily: "Montserrat-Light",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Mantener mi sesión iniciada
                                    </span>
                                  </Checkbox>
                                </div> */}
                                <div
                                  style={{
                                    marginLeft: "20px",
                                    marginTop: "10px",
                                  }}
                                >
                                  {/* <Checkbox
                                    value={2}
                                    onChange={(e) =>
                                      setvalueCheck(e.target.value)
                                    }
                                  > */}
                                  <span
                                    style={{
                                      color: "white",
                                      opacity: "0.7",
                                      fontFamily: "Montserrat-Light",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Recuperar contraseña
                                  </span>
                                  {/* </Checkbox> */}
                                </div>
                              </>
                            )}
                          </>
                        )}
                        <div
                          onClick={() => onLogin()}
                          style={{ marginTop: "7%" }}
                        >
                          <button className="button-login-user">
                            <span className="text-login-user-bottom">
                              {type === "validate"
                                ? "Recuperar"
                                : valueCheck === 2
                                ? "Recuperar Contraseña"
                                : "Iniciar sesión"}
                            </span>
                          </button>
                        </div>
                        {type === "validate" ? (
                          <>
                            <div style={{ marginTop: "20px" }}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span className="text-required-pass">
                                  La contraseña debe tener:
                                </span>
                                <span className="text-required-pass-list">
                                  *Mínimo 8 caracteres
                                </span>
                                <span className="text-required-pass-list">
                                  *Mínimo una letra mayúscula
                                </span>
                                <span className="text-required-pass-list">
                                  *Mínimo un caracter alfanumérico
                                </span>
                              </div>
                            </div>
                          </>
                        ) : valueCheck !== 2 ? (
                          <>
                            {type === "disrupter" && (
                              <>
                                <div
                                  style={{
                                    marginTop: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "5px",
                                  }}
                                >
                                  <div
                                    style={{
                                      border: "1px solid white",
                                      width: "120px",
                                      height: "1px",
                                    }}
                                  ></div>
                                  <span className="separador-line-login">
                                    Ó
                                  </span>
                                  <div
                                    style={{
                                      border: "1px solid white",
                                      width: "120px",
                                      height: "1px",
                                    }}
                                  ></div>
                                </div>
                                <div
                                  style={{ marginTop: "7%", marginLeft: "5px" }}
                                >
                                  <button className="button-login-google">
                                    <GoogleOutlined
                                      style={{ color: "white" }}
                                    />
                                    <span className="text-bottom-google">
                                      Iniciar con Google
                                    </span>
                                  </button>
                                </div>
                                <div
                                  style={{ marginTop: "7%", marginLeft: "5px" }}
                                >
                                  <button className="button-login-google">
                                    <FacebookOutlined
                                      style={{ color: "white" }}
                                    />
                                    <span
                                      style={{ marginLeft: "15px" }}
                                      className="text-bottom-google"
                                    >
                                      Iniciar con Facebook
                                    </span>
                                  </button>
                                </div>
                              </>
                            )}
                          </>
                        ) : null}
                      </Form>
                    </div>
                  )}
                  {messagePassword && (
                    <>
                      <span className="text-recuperar-password">
                        Te enviamos un mail al correo andres@gmail.com
                      </span>
                      <p />
                      <span className="text-recuperar-password">
                        con un link para que puedas recuperar tu contraseña
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
