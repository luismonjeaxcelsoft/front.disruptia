import { useState, useEffect } from "react";
import { Radio } from "antd";
import { useNavigate } from "react-router-dom";

const LevelCompetition = ({ skills,setValidateImgs,
  validateImgs }: any) => {
  const navigate = useNavigate();
  const [_valueRadio, setValueRadio] = useState<number>(0);
  const [filterValues, setFilterValues] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  let radioInfo = [
    { id: 1, label: "Máster" },
    { id: 2, label: "Experto" },
    { id: 3, label: "Competente" },
    { id: 4, label: "Principiante" },
  ];
  const filterSkills = () => {
    let filter = skills.filter((item: any) => item.back === true);
    setFilterValues(filter);
    validateValuesFilter();
  };
  const validateValuesFilter = () => {
    if (currentIndex < filterValues.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === filterValues.length - 1){
        navigate("/perfiles/11");
        setValidateImgs([...validateImgs, "11"]);
    }
  };
  useEffect(() => {
    filterSkills();
  }, []);

  return (
    <div>
      <div className="containerComponent">
        <div style={{ marginLeft: "95px", marginTop: "50px" }}>
          <span
            style={{ color: "white", fontSize: "20px", fontFamily: "Montserrat-Light" }}
          >
            Tu nivel de competencia en {filterValues[currentIndex]?.label} es:
          </span>
        </div>
        <div>
          <Radio.Group
            onChange={(e) => setValueRadio(e.target.value)}
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "115px",
            }}
          >
            {radioInfo.map((item: any) => (
              <Radio value={item.id}>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Montserrat-Light",
                  }}
                >
                  {item.label}
                </span>
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
      <div className="containerSelect">
        <button
          onClick={() => {
            validateValuesFilter();
          }}
          className="buttonContinueSelect"
        >
          <p className="textSiguienteSelect">Siguiente</p>
        </button>
      </div>
    </div>
  );
};

export default LevelCompetition;
