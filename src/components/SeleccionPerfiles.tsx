import React, { useEffect, useState } from "react";
import { PerfilesService, perfilesSelect } from "../services/PerfilesService";
import "../../src/styles/SeleccionPerfiles.css";

interface Perfiles {
  id: number;
  name: string;
}

export const SeleccionPerfiles = () => {
  const [data, setData] = useState<Perfiles[]>([]);
  const [sendData, setSendData] = useState<number[]>([]);

  const filterButtoms = (perfil: Perfiles) => {
    const value = sendData.some((data: number) => data === perfil.id);
    if (value) {
      setSendData(sendData.filter((item: number) => item !== perfil.id));
      return;
    }
    setSendData([...sendData, perfil.id]);
  };
  const idPerfilSelect = async () => {
    await perfilesSelect(1, sendData);
  };
  useEffect(() => {
    const fetchPerfiles = async () => {
      try {
        const apiData = await PerfilesService();
        setData(apiData);
      } catch (error) {
        // Maneja el error de alguna manera apropiada (por ejemplo, mostrando un mensaje de error)
        console.error(error);
      }
    };

    fetchPerfiles();
  }, []);

  return (
    <div className="container">
      <div className="titleTabOne">
        <h1 style={{ fontSize: "40px" }}>¿En qué te gustaría trabajar?</h1>
      </div>
      <div className="gripPositionTab">
        {data.map((perfil, key) => {
          const validate = sendData.some((item: any) => item === perfil.id);
          return (
            <div
              key={key}
              onClick={() => {
                filterButtoms(perfil);
              }}
              className="row justify-content-md-center"
            >
              <div
                style={{
                  background: validate ? "#7102E0" : "#704F91",
                  borderRadius: "50px",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10%",
                  cursor: "pointer",
                  width: "387px",
                }}
                className="col col-lg-2"
              >
                <span
                  style={{
                    fontWeight: validate ? "bold" : "",
                    fontSize: "20px",
                    margin: "0%",
                    padding: "10px",
                    color: "white",
                    opacity: validate ? "" : "0.5",
                  }}
                >
                  {perfil.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
      >
        <button
          style={{
            borderRadius: "50px",
            border: "1px solid #F3CF46",
            background: "#310161",
            width: "227px",
            height: "49px",
          }}
          onClick={idPerfilSelect}
        >
          <p
            style={{
              color: "yellow",
              fontSize: "20px",
              margin: "0",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            Continuar
          </p>
        </button>
      </div>
      <div className="img_disruptiaTab_one">
        <img
          style={{ width: "10%" }}
          src="/src/assets/images/disruptialogo.png"
          alt=""
        />
      </div>
    </div>
  );
};
