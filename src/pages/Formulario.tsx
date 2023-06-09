import { useState } from "react";
import { Tabs } from "antd";
import iconotab1 from "../assets/images/Iconos.png";
import "../styles/formulario.css";
import { SeleccionPerfiles } from "../components/SeleccionPerfiles";
import toga from "../assets/images/togasinFondo.png";
import maletin from "../assets/images/maletinsinFondo.png";
import rueda from "../assets/images/ruedasinFondo.png";
import idiomas from "../assets/images/idiomasSinFono.png";
import word from "../assets/images/wordsinFondo.png";
import manoGris from "../assets/images/manosinFondo.png";
import computador from "../assets/images/portatilsinFondo.png";
import cubo from "../assets/images/cubosinFondo.png";
import doctor from "../assets/images/doctorsinFondo.png";
import credencial from "../assets/images/tablasinFondo.png";
import bombilla from "../assets/images/bombillasinFondo.png"
import FormInfoExperience from "../components/FormInfoExperience";
import ValidateExpFather from "../components/ValidateExpFather";
import { useParams } from "react-router-dom";
import ComunityFather from "../components/ComunityFather";
import FormValidateExp from "../components/FormValidateExp";
import InformationLenguajes from "../components/InformationLenguajes";
import OfficeTools from "../components/OfficeTools";
import WorkingModality from "../components/WorkingModality";
import DevelopedSkills from "../components/DevelopedSkills";
import SkillsDeveloping from "../components/SkillsDeveloping";
import Perfil from "../components/Perfil";
import PreviewHv from "../components/PreviewHv";

export const Formulario = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState<any>(tab);
  const [validateImgs, setValidateImgs] = useState<any>([]);
  const handleTabClick = (tabKey:any) => {
    setActiveTab(tabKey);
  };
  return (
    <div>
      <div className="formulario">
        <div className="tabs">
          <Tabs
          onTabClick={handleTabClick}
            activeKey={activeTab}
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
                      setActiveTab={setActiveTab}
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
                      setActiveTab={setActiveTab}
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
                     setActiveTab={setActiveTab}
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
                   setActiveTab={setActiveTab}

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
                  <FormValidateExp
                   setValidateImgs={setValidateImgs}
                   validateImgs={validateImgs}
                  type={"additionalCurse"}
                  setActiveTab={setActiveTab}
                  
                  />
                </div>),
              },
              {
                label: (
                  <div>
                    {validateImgs[4] === "6" && (
                      <img
                        alt="idiomas"
                        style={{ width: "53px" }}
                        src={idiomas}
                      />
                    )}
                  </div>
                ),
                key: "6",
                children: (
                  <div>
                    <InformationLenguajes
                    setValidateImgs={setValidateImgs}
                    validateImgs={validateImgs}
                    setActiveTab={setActiveTab}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[5] === "7" && (
                      <img alt="word" style={{ width: "53px" }} src={word} />
                    )}
                  </div>
                ),
                key: "7",
                children: (
                  <div>
                    <OfficeTools
                     setValidateImgs={setValidateImgs}
                     validateImgs={validateImgs}
                     setActiveTab={setActiveTab}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[6] === "8" && (
                      <img
                        alt="computador"
                        style={{ width: "53px" }}
                        src={computador}
                      />
                    )}
                  </div>
                ),
                key: "8",
                children: (
                  <div>
                    <WorkingModality
                     setValidateImgs={setValidateImgs}
                     validateImgs={validateImgs}
                     setActiveTab={setActiveTab}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[7] === "9" && (
                      <img alt="bombilla" style={{ width: "53px" }} src={bombilla} />
                    )}
                  </div>
                ),
                key: "9",
                children: (
                  <div>
                    <DevelopedSkills
                       setValidateImgs={setValidateImgs}
                       validateImgs={validateImgs}
                       setActiveTab={setActiveTab}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[8] === "10" && (
                      <img alt="cubo" style={{ width: "53px" }} src={cubo} />
                    )}
                  </div>
                ),
                key: "10",
                children: (
                  <div>
                    <SkillsDeveloping
                     setValidateImgs={setValidateImgs}
                     validateImgs={validateImgs}
                     setActiveTab={setActiveTab}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[9] === "11" && (
                      <img alt="doctor" style={{ width: "53px" }} src={doctor} />
                    )}
                  </div>
                ),
                key: "11",
                children: ( <div>
                <Perfil
                  setValidateImgs={setValidateImgs}
                  validateImgs={validateImgs}
                  setActiveTab={setActiveTab}
                />
              </div>),
              },
              {
                label: (
                  <div>
                    {validateImgs[10] === "12" && (
                      <img
                        alt="credencial"
                        style={{ width: "53px" }}
                        src={credencial}
                      />
                    )}
                  </div>
                ),
                key: "12",
                children: (
                  <div>
                    <PreviewHv
                    setActiveTab={setActiveTab}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
