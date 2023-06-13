import { useState, useEffect } from "react";
import "../styles/SkillsDeveloping.css";
import { SendOutlined } from "@ant-design/icons";
import logo from "../assets/images/disruptialogo.png";
import { Input } from "antd";
import LevelCompetition from "./LevelCompetition";
import { Sidebar } from "./Sidebar";

const SkillsDeveloping = ({ setValidateImgs,
  validateImgs}:any) => {
  let skillInformation = [
    {
      id: 0,
      label: "Python",
      back: false,
    },
    {
      id: 1,
      label: "JAVA",
      back: false,
    },
    {
      id: 2,
      label: "Go",
      back: true,
    },
    {
      id: 3,
      label: "Rest",
      back: false,
    },
    {
      id: 4,
      label: "JavaScript",
      back: false,
    },
    {
      id: 5,
      label: "Angular",
      back: false,
    },
  ];
  const [skills, setSkills] = useState<any>(skillInformation);
  const [valueInput, setValueInput] = useState<string>("");
  const [idValue, setIdValue] = useState(5);
  const [validateContinue, setValidateContinue] = useState<boolean>(false);
  const [validateComponent, setValidateComponent] = useState<boolean>(false);
  const handleClick = (id: any) => {
    setValidateContinue(false);
    setSkills((prevSkills: any) => {
      return prevSkills.map((skill: any) => {
        if (skill.id === id) {
          return { ...skill, back: !skill.back };
        }
        return skill;
      });
    });
  };
  const agregateHability = () => {
    if (skills.length < 10) {
      setSkills([
        ...skills,
        {
          id: idValue,
          label: valueInput,
          back: true,
        },
      ]);
    } else {
      window.alert("No se puede agregar mas de 10 habilidades en desarrollo");
    }
  };

  useEffect(() => {
    const hasBackTrue = skills.some((skill: any) => skill.back === true);
    setValidateContinue(hasBackTrue);
  }, []);

  return (
    <>
      <div>
        <Sidebar
          subTitle=""
          smallTitle="Crear Hoja de vida"
          backColor={false}
          img={false}
          video={false}
        />
      </div>
      {validateComponent ? (
        <LevelCompetition 
        setValidateImgs={setValidateImgs}
        validateImgs={validateImgs}
        skills={skills} 
        />
      ) : (
        <div>
          <div className="containerComponent">
            <div className="containerGridPosition">
              <span className="titleSpan">
                Selecciona las habilidades en desarrollo de Software que tengas
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "10px",
                  marginTop: "30px",
                }}
              >
                {skills.map((item: any) => {
                  return (
                    <div
                      className="containerSkillsDevelop"
                      style={{ background: item.back ? "#591FFA" : "#310161" }}
                      onClick={() => {
                        handleClick(item.id);
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Montserrat-Bold;",
                        }}
                        className="perfilName"
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{ position: "relative" }}
                  onClick={() => {
                    agregateHability();
                    setIdValue(idValue + 1);
                    setValueInput("");
                  }}
                >
                  <SendOutlined className="iconFlecha" />
                </div>
                <Input
                  className="containerAgregate"
                  type="text"
                  placeholder="Añadir una nueva +"
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
                  setValidateContinue(true);
                }}
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
            <img style={{ width: "100px" }} alt="" src={logo} />
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsDeveloping;
