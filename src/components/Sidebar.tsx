import "../styles/Sidebar.css";
import { FC, useState, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";
import anotacion from "../assets/images/infoSinFondo.png";
import Deslizar from "../assets/images/Deslizar.png";
interface Sidebar {
  smallTitle?: string;
  title?: string;
  subTitle?: string;
  subText?: string;
  titleTwo?: string;
  backColor: boolean;
  img?: boolean;
  video?: boolean;
  data?: any;
  sendData?: any;
  open?: boolean; 
}

export const Sidebar: FC<Sidebar> = ({
  smallTitle,
  title,
  subTitle,
  subText,
  titleTwo,
  backColor,
  img,
  video,
  data,
  sendData,
  open,
}) => {

  const [isOpen, setIsOpen] = useState(open);
  const [matchingNames, setMatchingNames] = useState([]);
  useEffect(() => {
    if (data?.length > 0 && sendData?.length > 0) {
      const names = data
        ?.filter((option: any) => sendData?.includes(option.id))
        .map((option: any) => option.name);

      setMatchingNames(names);
    }
  }, [sendData]);
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
                <h3 className="subtitle_sidebar">{smallTitle}</h3>
                <button
                  className="buttonclose"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CloseOutlined style={{ fontSize: "30px" }} />
                </button>
              </div>
              <div className="sidebar-total">
                <div className="sidebar-menu"></div>
                <div style={{ margin: "9px 110px 0px 56px" }}>
                  <h1 className="titulo">{title}</h1>
                  {backColor && (
                    <div className="con-fondo">
                      <div className="container_title2_sidebar">
                        <h1 className="titulo2">{titleTwo}</h1>
                      </div>
                    </div>
                  )}
                  {img && <img style={{ width: "49px" }} src={anotacion} />}
                  <p className="titulo3">{subTitle}</p>
                  <p className="titulo4">{subText}</p>
                  {video && (
                    <div className="videoContainer">
                      <span
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "Montserrat-Light",
                        }}
                      >Sigue estas instrucciones en video</span>
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/SSyRzzuJpEs"
                        style={{ borderRadius: "10px", border: "none" }}
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                  {data?.length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {matchingNames.map((name, index) => (
                        <span
                          key={index}
                          style={{
                            fontSize: "20px",
                            fontFamily: "Montserrat-Light",
                            color: "white",
                          }}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
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
