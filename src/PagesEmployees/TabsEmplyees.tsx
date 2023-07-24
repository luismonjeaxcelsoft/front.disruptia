import { useState } from "react";
import { Tabs } from "antd";
import "../styles/TabsLogin.css";
import { SidebarAdmin } from "../pagesRegisterLogin/SideBarAdmin";
import LoginImgEmployees from "./LoginImgEmployees";



const TabsEmployees = () => {
  const { TabPane } = Tabs;
  const [keyTab, setKeyTab] = useState<string>("");
 
  const [stlyeLogin, setStlyeLogin] = useState<any>(1)
  
  return (
    <>
    <SidebarAdmin type="admin" />
      <div style={{background:"white"}} >
        <Tabs
          defaultActiveKey={keyTab}
          className="tabs-login"
          onChange={(e) => {setKeyTab(e)}}
          tabBarStyle={{ marginTop: "60px",zIndex:"1" }}
        >
          <TabPane
            tab={[
              <div onClick={() =>setStlyeLogin(1)}>
                <span
                  style={{
                    color: stlyeLogin === 0 ? "#6002BD" : "#6002BD",
                    fontSize: "25px",
                    opacity: stlyeLogin === 0 ? "0.6" : "1",
                  }}
                >
                  Iniciar Sesión
                </span>
              </div>,
            ]}
            key="1"
          >
            <LoginImgEmployees/>
          </TabPane>
          <TabPane
            style={{ width: "50px" }}
            tab={[
              <div onClick={() =>setStlyeLogin(0)} style={{width:"20px"}}>
                <span
                  style={{
                    color: keyTab === "1" ? "#6002BD" : keyTab === "" ? "#6002BD" : "#6002BD",
                    fontSize: "25px",
                    marginLeft: keyTab === "1" ? "120px" :keyTab === "" ? "120px" : "23px",
                    opacity: keyTab === "1" ? "1" : keyTab === "" ? "0.6" : "1",
                  }}
                >
                  Registrarme
                </span>
              </div>,
            ]}
            key="2"
          >
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default TabsEmployees;
