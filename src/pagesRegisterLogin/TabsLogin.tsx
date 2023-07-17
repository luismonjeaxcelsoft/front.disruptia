import { useState } from "react";
import { Tabs } from "antd";
import "../styles/TabsLogin.css";
import RegisterForm from "./RegisterForm";
import LoginUser from "./LoginUser";
const TabsLogin = () => {
  const { TabPane } = Tabs;
  const [keyTab, setKeyTab] = useState<string>("");
  const [stlyeLogin, setStlyeLogin] = useState<any>(false)
  return (
    <>
      <div>
        <Tabs
          defaultActiveKey={keyTab}
          className="tabs-login"
          onChange={(e) => {setKeyTab(e)}}
          tabBarStyle={{ marginTop: "30px" }}
        >
          <TabPane
            tab={[
              <div onClick={() =>setStlyeLogin(true)}>
                <span
                  style={{
                    color: !stlyeLogin ? "white" : "#DBB549",
                    fontSize: "25px",
                    
                  }}
                >
                  Iniciar Sesión
                </span>
              </div>,
            ]}
            key="1"
          >
            <LoginUser stlyeLogin={stlyeLogin} />
          </TabPane>
          <TabPane
            style={{ width: "50px" }}
            tab={[
              <div onClick={() =>setStlyeLogin(false)} style={{width:"20px"}}>
                <span
                  style={{
                    color: keyTab === "1" ? "white" : keyTab === "" ? "white" : "#DBB549",
                    fontSize: "25px",
                    marginLeft: keyTab === "1" ? "120px" :keyTab === "" ? "120px" : "23px",
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
