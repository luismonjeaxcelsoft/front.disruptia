import "../styles/hojadevidahome.css";
import { Link } from "react-router-dom";
import HomeP from "../assets/images/Home.png";
import Home_man_sinFondo from "../assets/images/Home_man_sinFondo.png";
export const Home = () => {
  return (
    <div style={{ display: "flex", width: "60%" }}>
      <div className="containerImagesOne">
        <img
          style={{ width: "800px", height: "500px" }}
          src={Home_man_sinFondo}
        />
      </div>
      <div>
        <div className="home">
          <img style={{marginBottom:"30px"}} src="/src/assets/images/disruptialogo.png" alt="" />
          <div style={{ color: "white" }}>
            <h1 style={{margin:"0"}}>Vamos a crear una</h1>
            <h1 style={{width:"300px"}}>hoja de vida Disruptiva</h1>
          </div>
          <Link to={"/perfiles/1"}>
            <button className="button2">¡EMPECEMOS!</button>
          </Link>
        </div>
      </div>
      <div className="containerGirlImages">
        <img style={{ width: "800px", height: "500px" }} src={HomeP} />
      </div>
    </div>
  );
};
