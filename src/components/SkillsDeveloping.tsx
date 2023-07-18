import { useState, useEffect } from "react";
import "../styles/SkillsDeveloping.css";
import { SendOutlined } from "@ant-design/icons";
import logo from "../assets/images/disruptialogo.png";
import { Input } from "antd";
import LevelCompetition from "./LevelCompetition";
import { Sidebar } from "./Sidebar";
import {
  GetHabilidadesSoftware,
  SaveHabilidadSoftware,
} from "../services/HabilidadSoftwareService";

const SkillsDeveloping = ({ habilidadesDisrupter }: any) => {
  type SKILL = {
    skill: string;
    back: boolean;
  };

  const disrupterId = 1;

  const [skills, setSkills] = useState<SKILL[]>([]);
  const [habilidades, setHabilidadesSave] = useState<any>([]);
  const [valueInput, setValueInput] = useState<string>("");
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [validateComponent, setValidateComponent] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const handleClick = (item: any) => {
    setDisableButton(false);
    setValidateContinue(false);
    setSkills((prevSkills: any) => {
      return prevSkills.map((skill: any) => {
        if (skill.skill === item) {
          return { ...skill, back: !skill.back };
        }
        return skill;
      });
    });
  };
  const agregateHability = () => {
    setDisableButton(false);
    if (valueInput !== "") {
      const exist = skills.some((item) => item.skill === valueInput);

      if (!exist) {
        if (skills.length < 10) {
          setSkills([
            ...skills,
            {
              skill: valueInput,
              back: true,
            },
          ]);
        } else {
          window.alert(
            "No se puede agregar mas de 10 habilidades en desarrollo"
          );
        }
      } else {
        window.alert("Ya has agregado esta habilidad");
      }
    }
    setValueInput("");
  };

  const saveHabilidadesSeleccionadas = async () => {
    const values = skills.filter((item) => item.back == true);

    const habilidades = [];

    for (const value of values) {
      habilidades.push({
        habilidad: value.skill,
        nivel:
          habilidadesDisrupter.find(
            (item: any) => item.habilidad === value.skill
          )?.nivel || "",
      });
    }
    setHabilidadesSave(habilidades);

    const payload = {
      disrupterId: disrupterId,
      habilidades: habilidades,
    };

    const res = await SaveHabilidadSoftware(payload);

    if (res === "Habilidades de software guardadas") {
      setValidateContinue(true);
    }
  };

  const getHabilidadesSofware = async () => {
    const res = await GetHabilidadesSoftware();
    setHabilidadesSave(habilidadesDisrupter);

    if (habilidadesDisrupter.length === 0) {
      const skillsDefault = res.map((item: string) => ({
        skill: item,
        back: false,
      }));
      setSkills(skillsDefault);
    } else {
      setValidateContinue(true);
      const skillsDefault = res.map((item: string) => {
        return {
          skill: item,
          back: habilidadesDisrupter.some(
            (item2: any) => item2.habilidad === item
          ),
        };
      });

      const nuevo = habilidadesDisrupter.filter(
        (item: any) => !res.includes(item.habilidad)
      );

      const skillsDef = nuevo.map((item: any) => ({
        skill: item.habilidad,
        back: true,
      }));

      const updatedSkillsDefault = [...skillsDefault, ...skillsDef];

      setSkills(updatedSkillsDefault);
    }
  };

  useEffect(() => {
    getHabilidadesSofware();
  }, []);

  return (
    <>
      <div>
        <Sidebar
          subTitle="Para esta sección ten en cuenta los proyectos y productos tecnológicos que hayas desarrollado, ya sea en experiencia laboral, estudiando y personales."
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      {validateComponent ? (
        <LevelCompetition
          setValidateComponent={setValidateComponent}
          skills={habilidades}
        />
      ) : (
        <div>
          <span className="titleSpan">
            Selecciona las habilidades en desarrollo de Software que tengas
          </span>
          <div className="containerComponent">
            <div className="containerGridPosition">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "10px",
                  marginTop: "85px",
                }}
              >
                {skills.map((item: any) => {
                  return (
                    <div
                      key={item.skill}
                      className="containerSkillsDevelop"
                      style={{ background: item.back ? "#591FFA" : "#310161" }}
                      onClick={() => {
                        handleClick(item.skill);
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Montserrat-Bold",
                          fontSize: "20px",
                        }}
                        className="perfilName"
                      >
                        {item.skill}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={() => {
                    agregateHability();
                    setValueInput("");
                  }}
                >
                  <SendOutlined className="iconFlecha" />
                </div>
                <Input
                  className="containerAgregate"
                  type="text"
                  placeholder="Añadir una nueva +"
                  onPressEnter={(e: any) => {
                    setValueInput(e.target.value);
                    setValidateContinue(false);
                    agregateHability();
                  }}
                  onChange={(e) => {
                    setValueInput(e.target.value);
                    setValidateContinue(false);
                  }}
                  value={valueInput}
                />
              </div>
            </div>
          </div>
          {!validateContinue && (
            <div style={{ marginTop: "40px" }} className="containerSaveAction">
              <button
                style={{
                  width: "165px",
                  height: "47px",
                  fontSize: "18px",
                  fontFamily: "Montserrat-Bold",
                }}
                className="SaveInfo btn btn-primary"
                onClick={() => {
                  saveHabilidadesSeleccionadas();
                }}
                disabled={
                  disableButton || !skills.some((item) => item.back === true)
                }
              >
                Guardar
              </button>
            </div>
          )}
          <div className="containerSelect">
            <button
              className={
                validateContinue ? "buttonContinueSelect" : "ContainerDisabled"
              }
              onClick={() => {
                setValidateComponent(true);
              }}
              disabled={!validateContinue ? true : false}
            >
              <p
                className={
                  !validateContinue ? "textDisabled" : "textSiguienteSelect"
                }
              >
                Siguiente
              </p>
            </button>
          </div>
          <div style={{ marginTop: "30px" }} className="containerExpContinue">
            <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsDeveloping;
