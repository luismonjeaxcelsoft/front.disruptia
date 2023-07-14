import { useState } from "react";
import { Tabs } from "antd";
import "../styles/TabsLogin.css";
import RegisterForm from "./RegisterForm";
const TabsLogin = () => {
  const { TabPane } = Tabs;
  const [keyTab, setKeyTab] = useState<string>("2");
  return (
    <>
      <div>
        <Tabs
          defaultActiveKey="2"
          className="tabs-login"
          onChange={(e) => setKeyTab(e)}
          tabBarStyle={{ marginTop: "30px" }}
        >
          <TabPane
            tab={[
              <div>
                <span
                  style={{
                    color: keyTab === "2" ? "white" : "#DBB549",
                    fontSize: "25px",
                  }}
                >
                  Iniciar Sesión
                </span>
              </div>,
            ]}
            key="1"
          >
            "hola"
          </TabPane>
          <TabPane
            style={{ width: "50px" }}
            tab={[
              <div>
                <span
                  style={{
                    color: keyTab === "1" ? "white" : "#DBB549",
                    fontSize: "25px",
                    marginLeft: keyTab === "1" ? "120px" : "23px",
                  }}
                >
                  Registrarme
                </span>
              </div>,
            ]}
            key="2"
          >
            <RegisterForm />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default TabsLogin;
