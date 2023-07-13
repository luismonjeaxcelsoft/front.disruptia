import { useEffect, useState } from "react";
import {
  PerfilesSelect,
  PerfilesService,
  getPerfilesService,
  saveSelectPerfiles,
} from "../services/PerfilesService";
import "../../src/styles/SeleccionPerfiles.css";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";

interface Perfiles {
  id: number;
  name: string;
}

const PerfilesSelect_initialValue = {
  id: 0,
  disrupterId: 1,
  perfiles: [],
  paso: 1,
};

export const SeleccionPerfiles = ({
  setValidateImgs,
  validateImgs,
  setValuesIdPerfiles,
  setvaluesInputsPerfiles,
}: any) => {
  const navigate = useNavigate();
  const [data, setData] = useState<Perfiles[]>([]);
  const [sendData, setSendData] = useState<any[]>([]);
  const [resGetPerfiles, setResGetPerfiles] = useState<PerfilesSelect>(
    PerfilesSelect_initialValue
  );
  const [validateResGet, setValidateResGet] = useState<boolean>(false);

  const filterButtoms = (perfil: Perfiles) => {
    const value = sendData.some((data: number) => data === perfil.id);
    if (value) {
      setSendData(sendData.filter((item: number) => item !== perfil.id));
      return;
    }
    setSendData([...sendData, perfil.id]);
  };
  const idPerfilSelect = async () => {
    const payload = {
      id: resGetPerfiles.id,
      disrupterId: resGetPerfiles.disrupterId,
      perfiles: sendData,
    };
    await saveSelectPerfiles(payload);
    setValuesIdPerfiles(sendData);
  };

  const getPerfiles = async () => {
    const res = await getPerfilesService(1);
    setResGetPerfiles(res);
    setValidateResGet(true);
    if (res.perfiles.length > 0) {
      const infoValidatePer = resGetPerfiles.perfiles;
      setSendData(infoValidatePer);
      setValidateResGet(true);
    }
  };
  useEffect(() => {
    const fetchPerfiles = async () => {
      try {
        const apiData = await PerfilesService();
        setData(apiData);
        setvaluesInputsPerfiles(apiData);
      } catch (error) {
        // Maneja el error de alguna manera apropiada (por ejemplo, mostrando un mensaje de error)
        console.error(error);
      }
    };
    fetchPerfiles();
  }, []);
  useEffect(() => {
    getPerfiles();
  }, [validateResGet]);

  return (
    <>
      <div>
        <Sidebar
          subTitle="Andrea, en este campo deberás seleccionar a qué tipo de cargos quieres postularte con tu hoja de vida"
          backColor={false}
          img={true}
        />
      </div>
      <div>
        <div className="titleTabOne">
          <h1
            style={{
              fontSize: "40px",
              color: "white",
              fontFamily: "Montserrat-Bold",
            }}
          >
            ¿En qué te gustaría trabajar?
          </h1>
          <span
            style={{
              fontSize: "20px",
              color: "white",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Puedes seleccionar mas de uno.
          </span>
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
                      // fontFamily:"Montserrat-Bold;",
                      fontWeight: validate ? "bold" : "",
                      opacity: validate ? "" : "0.5",
                    }}
                    className="perfilName"
                  >
                    {perfil.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="containerSelect">
          <button
            className="buttonContinueSelect"
            onClick={() => {
              idPerfilSelect();
              setValidateImgs([...validateImgs, "2"]);
              navigate("/perfiles/2");
            }}
          >
            <p className="textSiguienteSelect">Continuar</p>
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
    </>
  );
};
