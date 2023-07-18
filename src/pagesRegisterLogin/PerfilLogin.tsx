import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Sidebar } from "../components/Sidebar";
import CustomSelect from "./CustomSelect";
import "../styles/PerfilLogin.css";
import { Input, Switch } from "antd";
import { useNavigate } from "react-router-dom";

const PerfilLogin = () => {
  const navigate = useNavigate();
  const [levelEco, setLevelEco] = useState<any>([]);
  const EconomicLevel = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
  ];
  const Nacionalidad = [
    {
      label: "Extranjero",
      value: "1",
    },
    {
      label: "Colombiano",
      value: "2",
    },
  ];
  const selectLevelPosition = (level: any) => {
    let infoLevel = {
      label: level.label,
      value: level.value,
      selected: true,
    };
    const updatedLevels = levelEco.map((item: any) => ({
      ...item,
      selected: item.value === level.value,
    }));

    setLevelEco([...updatedLevels, infoLevel]);
  };

  return (
    <>
      <Sidebar
        subTitle="Construcción Cultural"
        smallTitle=""
        backColor={false}
        img={false}
        video={false}
        subText="Instrucciones para diligenciar los campos de la derecha"
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
        <div style={{ justifyContent: "center" }}>
          <div
            style={{ marginTop: "20px", display: "flex", marginLeft: "41%" }}
          >
            <CustomSelect
              options={Nacionalidad}
              labelName="Selecciona tu origen cultural o étnico"
              placeHolder="Extranjero"
              name="etnia"
              classStyle="select-prlofile-page"
              styleImg="imgCustom-register-nacio"
              styleLabel="label-register-nacionalidad"
            />
            <div className="input-container-nacionalidad">
              <label className="label-register-nacionalidad">
                Nacionalidad
              </label>
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
          <div
            style={{
              display: "flex",
              marginLeft: "60px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <div className="container-seleccion-perfil-zona-vivienda">
              <span className="text-select-idioma-perfil-zona">zona rural</span>
            </div>
            <div className="container-seleccion-perfil-zona-vivienda-left">
              <span className="text-select-idioma-perfil-zona">
                zona Urbana
              </span>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "1%" }}
        >
          <div className="line-perfil-separador"></div>
        </div>
        <div className="container-pregunta-idioma">
          <span className="text-pregunta-socioE">
            ¿Hablas algún idioma o dialecto regional además del español?
          </span>
          <div
            style={{
              marginLeft: "15%",
              marginTop: "2%",
              display: "flex",
              marginBottom: "5%",
            }}
          >
            {EconomicLevel.map((level: any) => (
              <div
                style={{
                  marginLeft: level.label !== "1" ? "2%" : "",
                  backgroundColor: levelEco.find(
                    (item: any) => item.value === level.value && item.selected
                  )
                    ? "#D5BF22"
                    : "#310161",
                  cursor:"pointer",
                }}
                className="container-level-socioE"
                onClick={() => selectLevelPosition(level)}
              >
                {level.label}
              </div>
            ))}
          </div>
        </div>
        <div
              style={{
                display: "flex",
                marginLeft:"42%",
                marginTop: "10px",
              }}
            >
              <button
                onClick={() => navigate("/registro")}
                className="button-perfile-finish"
              >
                <span
                  style={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: "20px",
                    color: "#4D1AE8",
                  }}
                >
                  Inicio de sesión
                </span>
              </button>
            </div>
      </div>
    </>
  );
};

export default PerfilLogin;
