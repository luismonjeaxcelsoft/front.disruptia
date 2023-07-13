import { Checkbox, Form, Input } from "antd";
import { Sidebar } from "../components/Sidebar";
import "../styles/RegisterPage.css";
const RegisterPage = () => {
  return (
    <>
      <Sidebar
        subTitle=""
        smallTitle=""
        backColor={false}
        img={false}
        video={false}
      />
      <div style={{ marginLeft: "-660px", marginTop: "50px" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "140%" }}
        >
          <span className="title-register">Registro</span>
          <span className="sub-title-register">
            Crea tu perfil y consigue una oportunidad laboral
          </span>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Form>
            <div
            className="container-register-user"
            >
              <div>
                <div className="container-label-register">
                  <label className="label-register-form">Nombre</label>
                  <Input placeholder="Andres" className="input-text-register" />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Correo electrónico
                  </label>
                  <Input
                    placeholder="andres@gmail.com"
                    className="input-text-register"
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Tipo de Documento
                  </label>
                  <Input
                    placeholder="Cédula de ciudadania"
                    className="input-text-register"
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Fecha de nacimiento
                  </label>
                  <Input
                    placeholder="11/marzo/1998"
                    className="input-text-register"
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Pais de residencia
                  </label>
                  <Input
                    placeholder="Colombia"
                    className="input-text-register"
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">Contraseña</label>
                  <Input
                    placeholder="Colombia"
                    className="input-text-register"
                  />
                </div>
                <div
                  style={{ width: "140%", marginLeft: "15px" }}
                  className="container-label-register"
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
                      Aceptar politicas y tratamiento de datos
                    </span>
                  </Checkbox>
                </div>
              </div>
              <div>
                <div className="container-label-register">
                  <label className="label-register-form">Apellido</label>
                  <Input
                    placeholder="Beltrán"
                    className="input-text-register"
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4%",
                  }}
                >
                  <div className="container-label-register">
                    <label className="label-register-form">Celular</label>
                    <Input
                      placeholder="3284556790"
                      className="input-text-register"
                    />
                  </div>
                  <div className="container-label-register">
                    <label className="label-register-form">Telefono fijo</label>
                    <Input
                      placeholder="601345609"
                      className="input-text-register"
                    />
                  </div>
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Número de Documento
                  </label>
                  <Input
                    placeholder="1016784335"
                    className="input-text-register"
                  />
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">Edad</label>
                  <Input placeholder="25" className="input-text-register-ege" />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4%",
                  }}
                >
                  <div className="container-label-register">
                    <label className="label-register-form">Departamento</label>
                    <Input
                      placeholder="Antioquia"
                      className="input-text-register"
                    />
                  </div>
                  <div className="container-label-register">
                    <label className="label-register-form">Ciudad</label>
                    <Input
                      placeholder="Medellin"
                      className="input-text-register"
                    />
                  </div>
                </div>
                <div className="container-label-register">
                  <label className="label-register-form">
                    Confirmar Contraseña
                  </label>
                  <Input
                    placeholder="Antioquia"
                    className="input-text-register"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button
               className="button-register-submit"
              >
                <span
                  style={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: "20px",
                    color: "#4D1AE8",
                  }}
                >
                  Registrarme
                </span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
