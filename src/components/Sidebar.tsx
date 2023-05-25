import "../styles/Sidebar.css";
import { FC, useState } from "react";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import anotacion from "../assets/images/anotacion.svg";
interface Sidebar {
  smallTitle?: string;
  title?: string;
  subTitle?: string;
  subText?: string;
  titleTwo?: string;
  backColor: boolean;
  img:boolean;
}

export const Sidebar: FC<Sidebar> = ({
  smallTitle,
  title,
  subTitle,
  subText,
  titleTwo,
  backColor,
  img
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "sidebar-open" : "sidebar"}>
      <div>
        {!isOpen && (
          <button className="buttonside" onClick={() => setIsOpen(!isOpen)}>
            <ArrowRightOutlined />
          </button>
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
               {img &&  <img style={{width:"20%",backgroundColor:"#F3CF46"}} src={anotacion} />}
                <p className="titulo3">{subTitle}</p>
                <p className="titulo4">{subText}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
