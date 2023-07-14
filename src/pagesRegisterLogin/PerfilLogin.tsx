import { UserOutlined } from "@ant-design/icons";
import { Sidebar } from "../components/Sidebar";
import CustomSelect from "./CustomSelect";
import "../styles/PerfilLogin.css";
import { Input, Switch } from "antd";
const PerfilLogin = () => {
  return (
    <>
      <Sidebar
        subTitle=""
        smallTitle=""
        backColor={false}
        img={false}
        video={false}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="container-text-perfil">
          <span className="title-perfil-page">Mi perfil</span>
          <div style={{ marginLeft: "5%" }}>
            <UserOutlined style={{ scale: "5", color: "#FFFFFF" }} />
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginTop: "20px" }}>
            <CustomSelect
              labelName="Selecciona tu origen cultural o étnico"
              placeHolder="Extranjero"
              name="etnia"
              classStyle="select-prlofile-page"
              styleImg="imgCustom-register"
            />
            <div className="input-container-nacionalidad">
              <label className="label-register-form">Nacionalidad</label>
              <Input placeholder="Americano" className="input-text-profile" />
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="container-pregunta-idioma">
            <span className="text-pregunta-perfil">
              ¿Hablas algún idioma o dialecto regional además del español?
            </span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Switch
                checkedChildren="SI"
                unCheckedChildren="NO"
                style={{ width: "100px", marginLeft: "20%", marginTop: "20px" }}
              />
              <div style={{ marginTop: "20px" }}>
                <span className="text-select-idioma-perfil">Cuál</span>
                <Input
                  placeholder="Wuayunaiki"
                  className="input-text-profile-idioma"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "2%",
            flexDirection: "column",
          }}
        >
          <span className="text-pregunta-perfil-zona">
            La mayor parte de mi vida la he vivido en:
          </span>
          <div style={{ display: "flex",marginLeft:"60px",marginTop:"20px",marginBottom:"30px"}}>
            <div
             className="container-seleccion-perfil-zona-vivienda"
            >
              <span className="text-select-idioma-perfil-zona">zona rural</span>
            </div>
            <div
             className="container-seleccion-perfil-zona-vivienda-left"
            >
              <span className="text-select-idioma-perfil-zona">zona rural</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilLogin;
