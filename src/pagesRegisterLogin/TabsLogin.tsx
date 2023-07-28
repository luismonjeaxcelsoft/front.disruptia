import { useState } from "react";
import { Tabs } from "antd";
import "../styles/TabsLogin.css";
import RegisterForm from "./RegisterForm";
import LoginUser from "./LoginUser";


const TabsLogin = ({setKeyTab,keyTab}:any) => {
  const { TabPane } = Tabs;
 
  const [stlyeLogin, setStlyeLogin] = useState<any>(1)
  return (
    <>
      <div >
        <Tabs
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
                    fontSize: "25px",
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
