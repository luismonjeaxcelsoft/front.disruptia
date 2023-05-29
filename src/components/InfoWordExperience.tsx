import { Card, Checkbox, Form, Input, Select } from "antd";
import React, { FC } from "react";
import ".././styles/InfoWordExp.css";

interface InfoWordExperienceProps {
  setNextTab: React.Dispatch<string>;
  setActiviKey: any;
  activiKey: any;
}

const InfoWordExperience: FC<InfoWordExperienceProps> = ({
  setNextTab,
  setActiviKey,
  activiKey,
}) => {
  return (
    <div>
      <div>
        <span className="spanFormationAcademy">Formación Académica</span>
      </div>
      <div style={{ width: "80rem" }}>
        <Card style={{ background: "#310161" }}>
          <div>
            <div>
              <span className="spanStudy">Estudio 1</span>
            </div>
            <div>
              <Form>
                <div>
                  <div style={{ marginBottom: "15px" }}>
                    <label className="labelsInsputs" htmlFor="nameCurse">
                      Nombre del Curso
                    </label>
                    <Input
                      type="text"
                      className="inputBorderNone"
                      id="user_id"
                      name="nameCurse"
                      autoComplete="off"
                      placeholder="Ej: Técnico en servicio al cliente y ventas"
                      maxLength={20}
                      showCount
                    />
                  </div>
                  <div className="containerDate">
                    <div
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label className="labelsInsputs" htmlFor="dateInit">
                        Fecha de inicio
                      </label>
                      <div>
                        <Select
                          style={{
                            background: "#4F2678",
                            color: "white",
                            border: "1px solid #FFFFFF",
                            width:"211px"
                          }}
                          options={[
                            { value: "1", label: "Enero" },
                            { value: "2", label: "Febrero" },
                            { value: "3", label: "Marzo" },
                            { value: "4", label: "Abril" },
                            { value: "5", label: "Mayo" },
                            { value: "6", label: "Junio" },
                            { value: "7", label: "Julio" },
                            { value: "8", label: "Agosto" },
                            { value: "9", label: "Septiembre" },
                            { value: "10", label: "Octubre" },
                            { value: "11", label: "Noviembre" },
                            { value: "12", label: "Diciembre" },
                          ]}
                          id="user_id"
                        />
                        <Select
                          style={{
                            background: "#4F2678",
                            color: "white",
                            border: "1px solid #FFFFFF",
                            width:"121px"
                          }}
                          options={[
                            { value: "1", label: "2000" },
                            { value: "2", label: "2001" },
                            { value: "3", label: "2002" },
                            { value: "4", label: "2003" },
                            { value: "5", label: "2004" },
                            { value: "6", label: "2005" },
                            { value: "7", label: "2006" },
                            { value: "8", label: "2007" },
                            { value: "9", label: "2008" },
                            { value: "10", label: "2009" },
                            { value: "11", label: "2010" },
                            { value: "12", label: "2011" },
                          ]}
                          id="user_id"
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <label className="labelsInsputs" htmlFor="dateEnd">
                        Fecha de finalización
                      </label>
                  <div>
                  <Select
                        style={{
                          background: "#4F2678",
                          color: "white",
                          border: "1px solid #FFFFFF",
                          width:"211px"
                        }}
                        options={[
                          { value: "1", label: "Enero" },
                          { value: "2", label: "Febrero" },
                          { value: "3", label: "Marzo" },
                          { value: "4", label: "Abril" },
                          { value: "5", label: "Mayo" },
                          { value: "6", label: "Junio" },
                          { value: "7", label: "Julio" },
                          { value: "8", label: "Agosto" },
                          { value: "9", label: "Septiembre" },
                          { value: "10", label: "Octubre" },
                          { value: "11", label: "Noviembre" },
                          { value: "12", label: "Diciembre" },
                        ]}
                        id="user_id"
                      />
                      <Select
                        style={{
                          background: "#4F2678",
                          color: "white",
                          border: "1px solid #FFFFFF",
                          width:"121px"
                        }}
                        options={[
                          { value: "1", label: "2000" },
                          { value: "2", label: "2001" },
                          { value: "3", label: "2002" },
                          { value: "4", label: "2003" },
                          { value: "5", label: "2004" },
                          { value: "6", label: "2005" },
                          { value: "7", label: "2006" },
                          { value: "8", label: "2007" },
                          { value: "9", label: "2008" },
                          { value: "10", label: "2009" },
                          { value: "11", label: "2010" },
                          { value: "12", label: "2011" },
                        ]}
                        id="user_id"
                      />
                  </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <Checkbox />
                    <label
                      style={{
                        color: "#FFFFFF",
                        opacity: "0.6",
                        marginLeft: "10px",
                        fontFamily: "Montserrat, Medium",
                      }}
                    >
                      Cursando Actualmente
                    </label>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label className="labelsInsputs" htmlFor="institution">
                      Institución Educativa
                    </label>
                    <Input
                      type="text"
                      className="inputBorderNone"
                      id="user_id"
                      name="institution"
                      autoComplete="off"
                      showCount
                      maxLength={20}
                      placeholder="Ej: Sena"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "87%",
                    }}
                  >
                    <div className="containerStudies">
                      <label className="labelsInsputs" htmlFor="studies">
                        Tipo de estudio
                      </label>
                      <Select
                        id="user_id"
                        options={[
                          { value: "jack", label: "Jack" },
                          { value: "lucy", label: "Lucy" },
                          { value: "Yiminghe", label: "yiminghe" },
                        ]}
                      />
                    </div>
                    <div>
                      <label className="labelsInsputs" htmlFor="studies">
                        País y Ciudad donde curso
                      </label>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "211px 71px",
                          gap: "5px",
                        }}
                        className="containerStudies"
                      >
                        <Select
                          style={{
                            background: "#4F2678",
                            color: "white",
                          }}
                          id="user_id"
                          options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" },
                          ]}
                        />
                        <Select
                          style={{
                            background: "#4F2678",
                            color: "white",
                          }}
                          id="user_id"
                          options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Card>
        <div className="containerButtonContinue">
          <button
            className="btn btn-primary"
            style={{
              background: "transparent",
              border: "1px solid #F7C947",
              borderRadius: "20px",
              color: "#F7C947",
              width: "100px",
            }}
          >
            Guardar
          </button>
        </div>
      </div>
      <div>
        <div className="containerButtomSelect">
          <button
            className="buttonContinueSelect"
            onClick={() => {
              setNextTab("3");
              setActiviKey([...activiKey, { tabThree: true }]);
            }}
          >
            <p className="textButtomSelect">Siguiente</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoWordExperience;
