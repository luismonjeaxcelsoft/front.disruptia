import { useState } from "react";
import { Sidebar } from "./Sidebar";
import "../styles/PreviewHv.css";
import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const PreviewHv = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <Sidebar
          title="Hola Andrea"
          smallTitle="Crear Hoja de vida"
          subTitle="Aqui puedes editar cada item de tu hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      <div>
        <div className="containerTitlePreview">
          <span className="textTtilePreview">Preview Hoja de vida</span>
        </div>
        <div className="containerInfoHv">
          <div className="containerItemOne">
            <div className="containerEdit">
              <span className="titleItem">Manejo de Idiomas</span>
              <EditOutlined
                onClick={() => {
                  navigate("/perfiles/6");
                }}
                className="iconEdit"
              />
            </div>
            <span className="itemSpan">Ingles - Intermedio</span>
            <span className="itemSpan">Frances - Intermedio</span>
          </div>
          <div className="containerItems">
            <div className="containerEdit">
              <span className="titleItem">Herramientas ofimáticas</span>
              <EditOutlined
                onClick={() => {
                  navigate("/perfiles/7");
                }}
                className="iconEdit"
              />
            </div>
            <span className="itemSpan">Word - Experto</span>
            <span className="itemSpan">Canva - Experto</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <div className="containerEdit">
              <span className="titleItem">Modelo de trabajo:</span>
              <EditOutlined
                onClick={() => {
                  navigate("/perfiles/8");
                }}
                className="iconEdit"
              />
            </div>
            <span
              style={{
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
                color: "#000000",
              }}
            >
              Virtual
            </span>
          </div>
          <div className="containerItems">
            <div className="containerEdit">
              <span className="titleItem">
                Habilidades en Desarrollo de Software
              </span>
              <EditOutlined
                onClick={() => {
                  navigate("/perfiles/9");
                }}
                className="iconEdit"
              />
            </div>
            <span className="itemSpan">JAVA (competente)</span>
            <span className="itemSpan">Rest (competente)</span>
            <span className="itemSpan">Angular (competente)</span>
          </div>
          <div className="containerItems">
            <div className="containerEdit">
              <span className="titleItem">Perfil</span>
              <EditOutlined
                onClick={() => {
                  navigate("/perfiles/11");
                }}
                className="iconEdit"
              />
            </div>
            <span className="itemSpan">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu,
            </span>
          </div>
        </div>
        <div style={{ marginTop: "35px" }} className="containerSaveAction">
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              width: "165px",
              height: "47px",
              fontSize: "18px",
              fontFamily: "Montserrat-Bold",
            }}
            className="SaveInfo btn btn-primary"
          >
            Finalizar
          </button>
        </div>
        <div>
          <Modal
            centered
            open={isModalOpen}
            width="1073px"
            bodyStyle={{ padding: "40px", height: "542px" }}
            footer={null}
            onCancel={handleCancel}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="textModal">Andrés, has finalizado</span>
                <span className="textModal">con éxito tu Hoja de vida.</span>
                <span className="textModal">
                  ¡Ahora estás listo para conectarte
                </span>
                <span className="textModal">con una oferta de empleo</span>
                <span className="textModal">Disruptiva!</span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="containerButtomModal"
                >
                  <span
                    style={{
                      fontSize: "25px",
                      color: "#E0A21E",
                      fontFamily: " Montserrat-Bold",
                    }}
                  >
                    Descargar PDF
                  </span>
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default PreviewHv;
