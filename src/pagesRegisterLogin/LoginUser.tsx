import "../styles/LoginUser.css";
import { SidebarAdmin } from "./SideBarAdmin";
const LoginUser = ({ stlyeLogin, setStlyeLogin }: any) => {
  console.log("🚀 ~ file: LoginUser.tsx:4 ~ LoginUser ~ stlyeLogin:", stlyeLogin)
  return (
    <>
      {stlyeLogin === 1 ? (
        <SidebarAdmin type="disrupter" />
      ) : stlyeLogin === 2 ? (
        <SidebarAdmin type="admin" />
      ) : (
        ""
      )}

      <div
        style={{
          marginLeft: "-110rem",
          marginTop: "20%",
          display: "flex",
          marginBottom: "50px",
        }}
      >
        <div style={{ width: "40%", marginTop: "110px" }}>
          <span className="title-login-user">Bienvenidos a la</span>
          <p />
          <span className="title-login-user">plataforma de Diversidad</span>
          <p />
          <span className="title-login-user">e inclusión para el trabajo</span>
          <p />
          <span className="sub-title-login-user">
            Las oportunidades para el talento de
          </span>
          <p />
          <span className="sub-title-login-user">impacto inician aquí</span>
        </div>

        <div
          style={{ background: stlyeLogin ? "#59327F" : "#9880B0" }}
          className="container-type-login"
          onClick={() => setStlyeLogin(1)}
        >
          <div className="container-text-card">
            <span
              style={{ opacity: stlyeLogin ? "0.5" : "1" }}
              className="text-card-type-login"
            >
              Estoy en
            </span>
            <p />
            <span
              style={{ opacity: stlyeLogin ? "0.5" : "1" }}
              className="text-card-type-login"
            >
              búsqueda de
            </span>
            <p />
            <span
              style={{ opacity: stlyeLogin ? "0.5" : "1" }}
              className="text-card-type-login"
            >
              empleo
            </span>
          </div>
        </div>
        <div
          style={{
            marginRight: "10%",
            background: stlyeLogin ? "#59327F" : "#9880B0",
          }}
          className="container-type-login"
          onClick={() => setStlyeLogin(2)}
        >
          <div  className="container-text-card">
            <span
              style={{ opacity: stlyeLogin ? "0.5" : "1" }}
              className="text-card-type-login"
            >
              Estoy en
            </span>
            <p />
            <span
              style={{ opacity: stlyeLogin ? "0.5" : "1" }}
              className="text-card-type-login"
            >
              búsqueda de
            </span>
            <p />
            <span
              style={{ opacity: stlyeLogin ? "0.5" : "1" }}
              className="text-card-type-login"
            >
              talento
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
