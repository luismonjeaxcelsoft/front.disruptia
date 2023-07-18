import { useState, useEffect } from "react";
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
import Perfil from "../components/Perfil";
import PreviewHv from "../components/PreviewHv";
import { useNavigate } from "react-router-dom";
import PersonalReferences from "../components/PersonalReferences";
import ValidationSkillsDeveloped from "../components/ValidationSkillsDeveloped";
import { GetPasos } from "../services/PasosService";
import MyContext, { MyContextType } from "../context/MyContext";

export const Formulario = () => {
  const disrupterId = 1;
  const { tab } = useParams();
  const navigate = useNavigate();
  const [validatePaso, setValidatePaso] = useState<number[]>([]);
  const [defaultActiveKey, setDefaultActiveKey] = useState<string>("1");
  const [valuesInputsPerfiles, setvaluesInputsPerfiles] = useState<any>([]);
  const [valuesIdPerfiles, setValuesIdPerfiles] = useState<any>([]);
  const [actualizarPreview, setActualizarPreview] = useState<boolean>(false);
  const handleTabClick = (tabKey: string) => {
    const value = validatePaso.some(
      (item: number) =>
        item === parseInt(tabKey) || parseInt(tabKey) - 1 === item
    );
    if (value) {
      navigate(`/perfiles/${tabKey}`);
    }
  };

  const getPasos = async () => {
    const res = await GetPasos(disrupterId);
    if (typeof res !== "string") {
      setValidatePaso(res);
      setDefaultActiveKey(res[res.length - 1].toString());
    }
  };

  const contextValue: MyContextType = {
    myMethod: getPasos,
    pasos: validatePaso,
    setActualizarPreview: setActualizarPreview,
  };

  useEffect(() => {
    getPasos();
  }, []);

  return (
    <div>
      <MyContext.Provider value={contextValue}>
        <div className="formulario">
          <div className="tabs">
            <Tabs
              onTabClick={handleTabClick}
              activeKey={tab}
              className="tabs-2"
              defaultActiveKey={defaultActiveKey}
              centered
              tabBarStyle={{ width: "820px" }}
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
                        setvaluesInputsPerfiles={setvaluesInputsPerfiles}
                        setValuesIdPerfiles={setValuesIdPerfiles}
                      />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 1 ? (
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
                        valuesInputsPerfiles={valuesInputsPerfiles}
                        valuesIdPerfiles={valuesIdPerfiles}
                      />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 2 ? (
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
                      <ValidateExpFather />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 3 ? (
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
                      <ComunityFather />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 4 ? (
                        <img
                          alt="rueda"
                          style={{ width: "53px" }}
                          src={rueda}
                        />
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
                      <FormValidateExp type={"additionalCurse"} />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 5 ? (
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
                      <InformationLenguajes />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 6 ? (
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
                      <OfficeTools />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 7 ? (
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
                      <WorkingModality />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 8 ? (
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
                      <DevelopedSkills />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 9 ? (
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
                      <ValidationSkillsDeveloped />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 10 ? (
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
                      <Perfil />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 11 ? (
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
                      <PersonalReferences />
                    </div>
                  ),
                },
                {
                  label: (
                    <div>
                      {validatePaso[validatePaso.length - 1] >= 12 ? (
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
                      <PreviewHv actualizarPreview={actualizarPreview} />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </MyContext.Provider>
    </div>
  );
};
