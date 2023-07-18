import { useState, useEffect } from "react";
import "../styles/hojadevidahome.css";
import { Link } from "react-router-dom";
import HomeP from "../assets/images/Home.png";
import Home_man_sinFondo from "../assets/images/Home_man_sinFondo.png";
import { GetPasos } from "../services/PasosService";
export const Home = () => {

  const [defaultActiveKey, setDefaultActiveKey] = useState<string>("1");

  const getPasos = async () => {

    const res = await GetPasos(1);
    if (typeof res !== "string") {
      setDefaultActiveKey((res[res.length - 1] + 1).toString());
    }
  };

  useEffect(() => {
    getPasos();
  }, []);

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
            <h1 style={{margin:"0",fontFamily:"Montserrat-Bold"}}>Vamos a crear una</h1>
            <h1 style={{width:"450px",fontFamily:"Montserrat-Bold",marginTop: "0"}}>hoja de vida Disruptiva</h1>
          </div>
          <Link to={`/perfiles/${defaultActiveKey}`}>
            <button className="button2">¡Empecemos!</button>
          </Link>
        </div>
      </div>
      <div className="containerGirlImages">
        <img style={{ width: "800px", height: "500px" }} src={HomeP} />
      </div>
    </div>
  );
};
