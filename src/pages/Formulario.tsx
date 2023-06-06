import { useState } from "react";
import { Tabs } from "antd";
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
import FormInfoExperience from "../components/FormInfoExperience";
import ValidateExpFather from "../components/ValidateExpFather";
import { useParams } from "react-router-dom";
import ComunityFather from "../components/ComunityFather";
import FormValidateExp from "../components/FormValidateExp";

export const Formulario = () => {
  const { tab } = useParams();
  
  const [validateImgs, setValidateImgs] = useState<any>([]);
  return (
    <div>
      <div className="formulario">
        <div className="tabs">
          <Tabs
            activeKey={tab}
            className="tabs-2"
            defaultActiveKey="1"
            centered
            tabBarStyle={{ width: "934px" }}
            items={[
              {
                label: (
                  <div>
                    <img
                      style={{ width: "53px" }}
                      alt="agenda"
                      src={iconotab1}
                    />
                  </div>
                ),
                key: "1",
                children: (
                  <div>
                    <SeleccionPerfiles
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[0] === "2" && (
                      <img alt="toga" style={{ width: "53px" }} src={toga} />
                    )}
                  </div>
                ),
                key: "2",
                children: (
                  <div>
                    <FormInfoExperience
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[1] === "3" && (
                      <img
                        alt="maletin"
                        style={{ width: "53px" }}
                        src={maletin}
                      />
                    )}
                  </div>
                ),
                key: "3",
                children: (
                  <div>
                    <ValidateExpFather
                     setValidateImgs={setValidateImgs}
                     validateImgs={validateImgs}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[2] === "4" && (
                      <img
                        alt="mano"
                        style={{ width: "53px" }}
                        src={manoGris}
                      />
                    )}
                  </div>
                ),
                key: "4",
                children: (
                  <div>
                    <ComunityFather
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[3] === "5" && (
                      <img alt="rueda" style={{ width: "53px" }} src={rueda} />
                    )}
                  </div>
                ),
                key: "5",
                children: (<div>
                  <FormValidateExp type={"additionalCurse"}/>
                </div>),
              },
              {
                label: (
                  <div>
                    {tab === "6" && (
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
                    {tab === "7" && (
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
                    {tab === "8" && (
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
                    {tab === "9" && (
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
                    {tab === "10" && (
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
                    {tab === "11" && (
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
