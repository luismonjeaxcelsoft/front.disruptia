import { Tabs } from "antd";
import { Sidebar } from "../components/Sidebar";
import iconotab1 from "../assets/images/Iconos.png";
import "../styles/formulario.css";
import { SeleccionPerfiles } from "../components/SeleccionPerfiles";
import toga from "../assets/images/toga-removebg-preview.png";
import maletin from "../assets/images/maletin-removebg-preview.png";
import rueda from "../assets/images/rueda.png";
import bombilla from "../assets/images/bombilla.png";
import word from "../assets/images/word.png";
import manoGris from "../assets/images/p1h1ccfkk3m7bdken7a1fbi12vn4_page_16-removebg-preview.png"
import computador from "../assets/images/computador.png"
import cubo from "../assets/images/cubo.png"
import doctor from "../assets/images/doctor.png"
import credencial from "../assets/images/credencial.png"

export const Formulario = () => {
  
  return (
    <div>
      <div>
        <Sidebar
          subTitle="Andrea, en este campo deberás seleccionar a qué tipo de cargos quieres postularte con tu hoja de vida"
          backColor={false}
          img={true}
        />
      </div>
      <div className="formulario">
        <div className="tabs">
          <Tabs
            className="tabs-2"
            defaultActiveKey="1"
            centered
            size="middle"
            items={[
              {
                label: <img style={{width:"100%"}} alt="agenda" src={iconotab1} />,
                key: "1",
                children: (
                  <div>
                    <SeleccionPerfiles />
                  </div>
                ),
              },
              {
                label: (
                  <div>
                    <img alt="toga" style={{width:"50%"}} src={toga} />
                  </div>
                ),
                key: "2",
                children: "Tab 2",
              },
              {
                label: (
                  <div>
                    <img alt="maletin" style={{width:"50%"}} src={maletin} />
                  </div>
                ),
                key: "3",
                children: "Tab 3",
              },
              {
                label: (
                  <div>
                    <img alt="mano" style={{width:"50%"}} src={manoGris} />
                  </div>
                ),
                key: "4",
                children: "Tab 4",
              },
              {
                label: (
                  <div>
                    <img alt="rueda" style={{width:"50%"}} src={rueda} />
                  </div>
                ),
                key: "5",
                children: "Tab 5",
              },
              {
                label: (
                  <div>
                    <img alt="bombilla" style={{width:"50%"}} src={bombilla} />
                  </div>
                ),
                key: "6",
                children: "Tab 6",
              },
              {
                label: (
                  <div>
                    <img alt="word" style={{width:"50%"}} src={word} />
                  </div>
                ),
                key: "7",
                children: "Tab 7",
              },
              {
                label: (
                  <div>
                    <img alt="computador" style={{width:"50%"}} src={computador} />
                  </div>
                ),
                key: "8",
                children: "Tab 8",
              },
              {
                label: (
                  <div>
                    <img alt="cubo" style={{width:"50%"}} src={cubo} />
                  </div>
                ),
                key: "9",
                children: "Tab 9",
              },
              {
                label: (
                  <div>
                    <img alt="doctor" style={{width:"50%"}} src={doctor} />
                  </div>
                ),
                key: "10",
                children: "Tab 10",
              },
              {
                label: (
                  <div>
                    <img alt="credencial" style={{width:"50%"}} src={credencial} />
                  </div>
                ),
                key: "11",
                children: "Tab 11",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
