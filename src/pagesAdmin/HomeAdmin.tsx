import { Sidebar } from "../components/Sidebar";
import logo from "../assets/images/disruptialogo.png";

const HomeAdmin = () => {
  const infoDivs = [
    {
      id: 1,
      label: "Crear una vacante",
    },
    {
      id: 2,
      label: "Diagnóstico y formación",
    },
    {
      id: 3,
      label: "Revisar perfiles de vacantes",
    },
  ];
  return (
    <>
      <Sidebar
        smallTitle=""
        title="Hola Nombre"
        subTitle=""
        subText="Para saber cómo funcionamos, a este lado vas a ver las instrucciones del paso a paso, te acompañamos con instrucciones. Unas veces tendrás instrucciones predeterminadas y otras con inteligencia artificial, personalizando tu experiencia"
        titleTwo="Te damos la bienvenida a Disruptia"
        backColor={true}
        img={false}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "30px",
            padding: "100px 47px 0px 192px",
          }}
        >
          {infoDivs.map((item: any) => (
            <div
              style={{
                border: "solid 1px green",
                background: "rgb(110,76,143)",
                borderRadius: "40px",
                height: "600px",
                width: "350px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div>
                <span
                  style={{
                    color: "white",
                    fontFamily: "Montserrat-Bold",
                    fontSize: "40px",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}  
         </div>         
      </div>
      <div  style={{display:"flex",justifyContent: "center",marginTop:"20px",marginLeft:"140px"}}>
          <img style={{ width: "153px", height: "41px" }} alt="" src={logo} />
        </div>
    </>
  );
};

export default HomeAdmin;
