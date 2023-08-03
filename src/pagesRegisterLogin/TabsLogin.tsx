import { useState } from "react";
import { Tabs } from "antd";
import "../styles/TabsLogin.css";
import LoginUser from "./LoginUser";
import Register from "./Register";
import { useNavigate } from "react-router-dom";

const TabsLogin = ({ setKeyTab, setInLogin }: any) => {
  const { TabPane } = Tabs;
  const navigate = useNavigate();

  const [stlyeLogin, setStlyeLogin] = useState<any>(1);
  return (
    <>
      <div>
        <LoginUser stlyeLogin={stlyeLogin} setInLogin={setInLogin} />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <span
            onClick={() => navigate("/disrupterSignUp")}
            style={{ cursor: "pointer" }}
            className="text-span-inicio-sesion"
          >
            Registrarme
          </span>
        </div>
        {/* <Tabs
          defaultActiveKey={keyTab}
          className="tabs-login"
          onChange={(e) => {setKeyTab(e)}}
          tabBarStyle={{ marginTop: "30px",zIndex:"1" }}
        >
          <TabPane
            tab={[
              <div onClick={() =>setStlyeLogin(1)}>
                <span
                  style={{
                    color: stlyeLogin === 0 ? "white" : "#DBB549",
                    fontSize: "17.70px",
                  }}
                >
                  Iniciar Sesión
                </span>
              </div>,
            ]}
            key="1"
          >
            <LoginUser  stlyeLogin={stlyeLogin} />
          </TabPane>
          <TabPane
            style={{ width: "50px" }}
            tab={[
              <div onClick={() =>setStlyeLogin(0)} style={{width:"20px"}}>
                <span
                  style={{
                    color: keyTab === "1" ? "white" : keyTab === "" ? "white" : "#DBB549",
                    fontSize: "17.70px",
                    marginLeft: keyTab === "1" ? "120px" :keyTab === "" ? "120px" : "23px",
                  }}
                >
                  Registrarme
                </span>
              </div>,
            ]}
            key="2"
          >
            <Register />
          </TabPane>
        </Tabs> */}
      </div>
    </>
  );
};

export default TabsLogin;
