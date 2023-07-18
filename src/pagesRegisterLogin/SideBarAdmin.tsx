import "../styles/Sidebar.css";
import { FC, useState } from "react";
import {
  CloseOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Deslizar from "../assets/images/Deslizar.png";
import logo from "../assets/images/disruptialogo.png";
import "../styles/SideBarAdmin.css";
import { Checkbox, Form, Input } from "antd";
interface SidebarAdmin {
  type?: string;
}

export const SidebarAdmin: FC<SidebarAdmin> = ({ type }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [textPassword, setTextPassword] = useState<boolean>(false);
  const [valueCheck, setvalueCheck] = useState<number>(0);
  const [messagePassword, setMessagePassword] = useState(false);
  return (
    <div>
      <div className={isOpen ? "sidebar-open" : "sidebar"}>
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
              <div className="container-subt-sidebar">
                <img
                  style={{ width: "193px", height: "61px" }}
                  alt=""
                  src={logo}
                />
                <button
                  className="buttonclose"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CloseOutlined style={{ fontSize: "30px" }} />
                </button>
              </div>
              <div style={messagePassword ? {marginLeft:"20%"}: {marginLeft:"30%"}} className="container-form-login">
                {!messagePassword ? (
                  <div style={{ marginBottom: "15px" }}>
                    <span
                      className={
                        valueCheck === 2
                          ? "text-inicio-recuperar-contraseña"
                          : "text-inicio-sesion"
                      }
                    >
                      {valueCheck === 2
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
                      <Input
                        placeholder="Correo electrónico"
                        className="input-login-form"
                      />
                      {valueCheck !== 2 && (
                        <>
                          <div>
                            <Input
                              type={textPassword ? "text" : "password"}
                              placeholder="Contraseña"
                              style={{ marginTop: "30px" }}
                              className="input-login-form"
                            />

                            <span
                              onClick={() => setTextPassword(!textPassword)}
                              style={{
                                position: "absolute",
                                left: "68%",
                                top: "47.5%",
                                color: "white",
                                cursor: "pointer",
                                display: "flex",
                              }}
                            >
                              Ver
                            </span>
                          </div>
                          <div
                            style={{ marginLeft: "20px", marginTop: "10px" }}
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
                          </div>
                          <div
                            style={{ marginLeft: "20px", marginTop: "10px" }}
                          >
                            <Checkbox
                              value={2}
                              onChange={(e) => setvalueCheck(e.target.value)}
                            >
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
                            </Checkbox>
                          </div>
                        </>
                      )}
                      <div
                        onClick={() => setMessagePassword(true)}
                        style={{ marginTop: "7%" }}
                      >
                        <button className="button-login-user">
                          <span className="text-login-user-bottom">
                            {valueCheck === 2
                              ? "Recuperar Contraseña"
                              : "Iniciar sesión"}
                          </span>
                        </button>
                      </div>
                      {valueCheck !== 2 && (
                        <>
                          {type === "disrupter" && (
                            <>
                              <div
                                style={{
                                  marginTop: "40px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  style={{
                                    border: "1px solid white",
                                    width: "120px",
                                    height: "1px",
                                  }}
                                ></div>
                                <span className="separador-line-login">Ó</span>
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
                                  <GoogleOutlined style={{ color: "white" }} />
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
                      )}
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
          )}
        </div>
      </div>
    </div>
  );
};
