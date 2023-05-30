import { Tabs } from "antd";
import { Sidebar } from "../components/Sidebar";
import iconotab1 from "../assets/images/Iconos.png";
import "../styles/formulario.css";
import { SeleccionPerfiles } from "../components/SeleccionPerfiles";
import toga from "../assets/images/togasinFondo.png";
import maletin from "../assets/images/maletinsinFondo.png";
import rueda from "../assets/images/ruedasinFondo.png";
import bombilla from "../assets/images/bombillasinFondo.png";
import word from "../assets/images/wordsinFondo.png";
import manoGris from "../assets/images/manosinFondo.png";
import computador from "../assets/images/portatilsinFondo.png";
import cubo from "../assets/images/cubosinFondo.png";
import doctor from "../assets/images/doctorsinFondo.png";
import credencial from "../assets/images/tablasinFondo.png";
import { useState } from "react";
import InfoWordExperience from "../components/InfoWordExperience";

export const Formulario = () => {
  const [nextTab, setNextTab] = useState<string>("1");
  const [activiKey, setActiviKey] = useState<any>([
    {
      tabOne: true,
    },
  ]);
  return (
    <div>
      <div>
        <Sidebar
          subTitle="Andrea, en este campo deberás seleccionar a qué tipo de cargos quieres postularte con tu hoja de vida"
          backColor={false}
          img={true}
        />
      </div>
      <div className="formulario">
        <div className="tabs">
          <Tabs
            activeKey={nextTab}
            className="tabs-2"
            defaultActiveKey="1"
            centered
            size="small"
            items={[
              {
                label: (
                  <div>
                    <img
                      style={{ width: "30%" }}
                      alt="agenda"
                      src={iconotab1}
                    />
                  </div>
                ),
                key: "1",
                children: (
                  <div>
                    <SeleccionPerfiles
                      setNextTab={setNextTab}
                      setActiviKey={setActiviKey}
                      activiKey={activiKey}
                      nextTab={nextTab}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {activiKey[1]?.tabTwo && (
                      <img alt="toga" style={{ width: "30%" }} src={toga} />
                    )}
                  </div>
                ),
                key: "2",
                children: (
                  <div>
                    <InfoWordExperience
                      setActiviKey={setActiviKey}
                      activiKey={activiKey}
                      setNextTab={setNextTab}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {activiKey[2]?.tabThree && (
                      <img
                        alt="maletin"
                        style={{ width: "50%" }}
                        src={maletin}
                      />
                    )}
                  </div>
                ),
                key: "3",
                children: "Tab 3",
              },
              {
                label: (
                  <div>
                    {nextTab === "4" && (
                      <img alt="mano" style={{ width: "50%" }} src={manoGris} />
                    )}
                  </div>
                ),
                key: "4",
                children: "Tab 4",
              },
              {
                label: (
                  <div>
                    {nextTab === "5" && (
                      <img alt="rueda" style={{ width: "50%" }} src={rueda} />
                    )}
                  </div>
                ),
                key: "5",
                children: "Tab 5",
              },
              {
                label: (
                  <div>
                    {nextTab === "6" && (
                      <img
                        alt="bombilla"
                        style={{ width: "50%" }}
                        src={bombilla}
                      />
                    )}
                  </div>
                ),
                key: "6",
                children: "Tab 6",
              },
              {
                label: (
                  <div>
                    {nextTab === "7" && (
                      <img alt="word" style={{ width: "50%" }} src={word} />
                    )}
                  </div>
                ),
                key: "7",
                children: "Tab 7",
              },
              {
                label: (
                  <div>
                    {nextTab === "8" && (
                      <img
                        alt="computador"
                        style={{ width: "50%" }}
                        src={computador}
                      />
                    )}
                  </div>
                ),
                key: "8",
                children: "Tab 8",
              },
              {
                label: (
                  <div>
                    {nextTab === "9" && (
                      <img alt="cubo" style={{ width: "50%" }} src={cubo} />
                    )}
                  </div>
                ),
                key: "9",
                children: "Tab 9",
              },
              {
                label: (
                  <div>
                    {nextTab === "10" && (
                      <img alt="doctor" style={{ width: "50%" }} src={doctor} />
                    )}
                  </div>
                ),
                key: "10",
                children: "Tab 10",
              },
              {
                label: (
                  <div>
                    {nextTab === "11" && (
                      <img
                        alt="credencial"
                        style={{ width: "50%" }}
                        src={credencial}
                      />
                    )}
                  </div>
                ),
                key: "11",
                children: "Tab 11",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
