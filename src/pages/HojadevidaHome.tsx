import { Home } from "../components/Home";
import { Sidebar } from "../components/Sidebar";
export const HojadevidaHome = () => {
  return (
    <div className="app">
      <Sidebar
        smallTitle="Crear mi Hoja de Vida"
        title="Hola Andrea"
        subTitle="Disruptia y Chat GPT, te ayudan a crear tu hoja de vida a un clic"
        subText=""
        titleTwo="¡Es tu oportunidad!"
        backColor={true}
        img={false}
        
      />
      <Home />
    </div>
  );
};
