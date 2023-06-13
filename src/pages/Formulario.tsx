import { useState } from "react";
import { Tabs } from "antd";
import iconotab1 from "../assets/images/Iconos.png";
import "../styles/formulario.css";
import { SeleccionPerfiles } from "../components/SeleccionPerfiles";
import toga from "../assets/images/togasinFondo.png";
import togaGris from "../assets/images/togaSinFondoGris.png";
import maletin from "../assets/images/maletinsinFondo.png";
import maletinGris from "../assets/images/maletinGris.png";
import rueda from "../assets/images/ruedasinFondo.png";
import ruedGris from "../assets/images/ruedGris.png";
import referenciaGris from "../assets/images/referenciaGris.png";
import referenciaNaranja from "../assets/images/referenciaNaranja.png";
import idiomas from "../assets/images/idiomasSinFono.png";
import idiomasGris from "../assets/images/idiomasGris.png";
import word from "../assets/images/wordsinFondo.png";
import wordGris from "../assets/images/wordGris.png";
import manoGris from "../assets/images/manosinFondo.png";
import manoGrisFondo from "../assets/images/manoGrisFondo.png";
import computador from "../assets/images/portatilsinFondo.png";
import compuGris from "../assets/images/compuGris.png";
import cubo from "../assets/images/cubosinFondo.png";
import cuboGris from "../assets/images/cuboGris.png";
import doctor from "../assets/images/doctorsinFondo.png";
import docGris from "../assets/images/docGris.png";
import credencial from "../assets/images/tablasinFondo.png";
import credeGris from "../assets/images/credeGris.png";
import bombilla from "../assets/images/bombillasinFondo.png";
import bombillaGris from "../assets/images/bombillaGris.png";
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
import { useNavigate } from "react-router-dom";
import PersonalReferences from "../components/PersonalReferences";


export const Formulario = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [validateImgs, setValidateImgs] = useState<any>(["1"]);

  const handleTabClick = (tabKey: any) => {
    let value = validateImgs.some((item: any) => item === tabKey);
    if (value) {
      navigate(`/perfiles/${tabKey}`)
    }
  };
  return (
    <div>
      <div className="formulario">
        <div className="tabs">
          <Tabs
            onTabClick={handleTabClick}
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
                    {validateImgs[1] === "2" ? (
                      <img alt="toga" style={{ width: "53px" }} src={toga} />
                    ) : (
                      <img
                        alt="toga"
                        style={{ width: "53px" }}
                        src={togaGris}
                      />
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
                    {validateImgs[2] === "3" ? (
                      <img
                        alt="maletin"
                        style={{ width: "53px" }}
                        src={maletin}
                      />
                    ) : (
                      <img
                        alt="maletin"
                        style={{ width: "53px" }}
                        src={maletinGris}
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
                    {validateImgs[3] === "4" ? (
                      <img
                        alt="mano"
                        style={{ width: "53px" }}
                        src={manoGris}
                      />
                    ) : (
                      <img
                        alt="mano"
                        style={{ width: "53px" }}
                        src={manoGrisFondo}
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
                    {validateImgs[4] === "5" ? (
                      <img alt="rueda" style={{ width: "53px" }} src={rueda} />
                    ) : (
                      <img
                        alt="rueda"
                        style={{ width: "53px" }}
                        src={ruedGris}
                      />
                    )}
                  </div>
                ),
                key: "5",
                children: (
                  <div>
                    <FormValidateExp
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                      type={"additionalCurse"}
                      
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[5] === "6" ? (
                      <img
                        alt="idiomas"
                        style={{ width: "53px" }}
                        src={idiomas}
                      />
                    ) : (
                      <img
                        alt="idiomas"
                        style={{ width: "53px" }}
                        src={idiomasGris}
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
                      
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[6] === "7" ? (
                      <img alt="word" style={{ width: "53px" }} src={word} />
                    ) : (
                      <img
                        alt="word"
                        style={{ width: "53px" }}
                        src={wordGris}
                      />
                    )}
                  </div>
                ),
                key: "7",
                children: (
                  <div>
                    <OfficeTools
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[7] === "8" ? (
                      <img
                        alt="computador"
                        style={{ width: "53px" }}
                        src={computador}
                      />
                    ) : (
                      <img
                        alt="computador"
                        style={{ width: "53px" }}
                        src={compuGris}
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
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[8] === "9" ? (
                      <img
                        alt="bombilla"
                        style={{ width: "53px" }}
                        src={bombilla}
                      />
                    ) : (
                      <img
                        alt="bombilla"
                        style={{ width: "53px" }}
                        src={bombillaGris}
                      />
                    )}
                  </div>
                ),
                key: "9",
                children: (
                  <div>
                    <DevelopedSkills
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                     
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[9] === "10" ? (
                      <img alt="cubo" style={{ width: "53px" }} src={cubo} />
                    ) : (
                      <img
                        alt="cubo"
                        style={{ width: "53px" }}
                        src={cuboGris}
                      />
                    )}
                  </div>
                ),
                key: "10",
                children: (
                  <div>
                    <SkillsDeveloping
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                     
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[10] === "11" ? (
                      <img
                        alt="doctor"
                        style={{ width: "53px" }}
                        src={doctor}
                      />
                    ) : (
                      <img
                        alt="doctor"
                        style={{ width: "53px" }}
                        src={docGris}
                      />
                    )}
                  </div>
                ),
                key: "11",
                children: (
                  <div>
                    <Perfil
                      setValidateImgs={setValidateImgs}
                      validateImgs={validateImgs}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[11] === "12" ? (
                      <img
                        alt="credencial"
                        style={{ width: "53px" }}
                        src={referenciaNaranja}
                      />
                    ) : (
                      <img
                        alt="credencial"
                        style={{ width: "53px" }}
                        src={referenciaGris}
                      />
                    )}
                  </div>
                ),
                key: "12",
                children: (
                  <div>
                    <PersonalReferences 
                     setValidateImgs={setValidateImgs}
                     validateImgs={validateImgs}
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    {validateImgs[12] === "13" ? (
                      <img
                        alt="credencial"
                        style={{ width: "53px" }}
                        src={credencial}
                      />
                    ) : (
                      <img
                        alt="credencial"
                        style={{ width: "53px" }}
                        src={credeGris}
                      />
                    )}
                  </div>
                ),
                key: "13",
                children: (
                  <div>
                    <PreviewHv />
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
