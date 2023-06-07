import { useState } from "react";
import "../styles/SkillsDeveloping.css";
import { SendOutlined } from "@ant-design/icons";

const SkillsDeveloping = () => {
  const skillInformation = [
    {
      id: 0,
      label: "Python",
      back: false,
    },
    {
      id: 1,
      label: "JAVA",
      back: true,
    },
    {
      id: 2,
      label: "Go",
      back: false,
    },
    {
      id: 3,
      label: "Rest",
      back: true,
    },
    {
      id: 4,
      label: "JavaScript",
      back: false,
    },
    {
      id: 5,
      label: "Angular",
      back: true,
    },
  ];
  const [skills, setSkills] = useState(skillInformation);

  const handleClick = (id: any) => {
    setSkills((prevSkills) => {
      return prevSkills.map((skill) => {
        if (skill.id === id) {
          return { ...skill, back: !skill.back };
        }
        return skill;
      });
    });
  };

  return (
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
          {skills.map((item) => {
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
        <div className="containerAgregate">
          <span className="spanAgregate">
            Añadir una nueva +{" "}
          </span>
          <div style={{marginLeft: "25px"}}>
          <SendOutlined className="iconFlecha" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDeveloping;
