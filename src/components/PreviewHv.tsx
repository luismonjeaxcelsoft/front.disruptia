import { Sidebar } from "./Sidebar";
import "../styles/PreviewHv.css";
import { EditOutlined } from "@ant-design/icons";
const PreviewHv = ({setActiveTab}:any) => {
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
              <EditOutlined onClick={()=>setActiveTab("6")} className="iconEdit"/>
            </div>
            <span className="itemSpan">Ingles - Intermedio</span>
            <span className="itemSpan">Frances - Intermedio</span>
          </div>
          <div className="containerItems">
          <div className="containerEdit">
              <span className="titleItem">Herramientas ofimáticas</span>
              <EditOutlined onClick={()=>setActiveTab("7")} className="iconEdit"/>
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
              <EditOutlined onClick={()=>setActiveTab("8")} className="iconEdit"/>
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
              <span className="titleItem">Habilidades en Desarrollo de Software</span>
              <EditOutlined onClick={()=>setActiveTab("9")} className="iconEdit"/>
            </div>
            <span className="itemSpan">JAVA (competente)</span>
            <span className="itemSpan">Rest (competente)</span>
            <span className="itemSpan">Angular (competente)</span>
          </div>
          <div className="containerItems">
          <div className="containerEdit">
              <span className="titleItem">Perfil</span>
              <EditOutlined onClick={()=>setActiveTab("11")} className="iconEdit"/>
            </div>
            <span className="itemSpan">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu,
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewHv;
