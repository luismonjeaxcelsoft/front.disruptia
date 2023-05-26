import React, { useEffect, useState } from "react";
import { PerfilesService } from "../services/PerfilesService";
import "../../src/styles/SeleccionPerfiles.css";

interface Perfiles {
  id: number;
  name: string;
}

export const SeleccionPerfiles = () => {
  const [data, setData] = useState<Perfiles[]>([]);

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
    <div>
      <div className="containerTitle_TabOne">
        <h1 style={{ fontSize: "40px" }}>¿En qué te gustaría trabajar?</h1>
      </div>
      <div style={{display: "grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
        {data.map((perfil) => (
         <div >
           <button className="button_tabOne">perfil</button>
         </div>
        ))}
      </div>
    </div>
  );
};
