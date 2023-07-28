import { useState } from "react";
import { Home } from "../components/Home";
import { Sidebar } from "../components/Sidebar";
export const HojadevidaHome = () => {
  const [keyTab, setKeyTab] = useState<string>("");
  return (
    <div className="app">
      {keyTab !== "2" && (
        <Sidebar
          smallTitle="Crear mi Hoja de Vida"
          title="Hola Andrea"
          subTitle="Disruptia y Chat GPT, te ayudan a crear tu hoja de vida a un clic"
          subText=""
          titleTwo="¡Es tu oportunidad!"
          backColor={true}
          img={false}
        open={false}        />
      )}

      <Home keyTab={keyTab} setKeyTab={setKeyTab} />
    </div>
  );
};
