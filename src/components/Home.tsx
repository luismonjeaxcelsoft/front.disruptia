import "../styles/hojadevidahome.css";
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className="home">
      <img src="/src/assets/images/disruptialogo.png" alt="" />
      <div>
        <h1>Creemos una hoja</h1>
        <h1>de vida Disruptiva</h1>
      </div>
      <Link to={"/perfiles"}>
      <button className="button2">¡EMPECEMOS!</button>
      </Link>
    </div>
  );
};