import "../styles/Sidebar.css";
import { FC, useState } from "react";
import Deslizar from "../assets/images/Deslizar.png";
import logo from "../assets/images/disruptialogo.png";
import "../styles/SideBarAdmin.css";
import Loghuin_Empresa from "../assets/images/Loghuin_Empresa.png";
interface SidebarAdmin {
  type?: string;
}

export const SidebarEmployees: FC<SidebarAdmin> = ({ type }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
              <div>
                <div className="container-subt-sidebar">
                  <img
                    style={{ width: "120px", height: "50px" }}
                    alt=""
                    src={logo}
                  />
                </div>
                {type === "register" && (
                  <div style={{marginLeft:"-100px"}}>
                    <img style={{width:"700px",height:"660px"}} alt="registro" src={Loghuin_Empresa} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
