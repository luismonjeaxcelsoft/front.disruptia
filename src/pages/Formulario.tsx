import { Tabs } from "antd";
import { Home } from "../components/Home";
import { UpOutlined } from "@ant-design/icons";
import { Sidebar } from "../components/Sidebar";

import "../styles/formulario.css";
import { SeleccionPerfiles } from "../components/SeleccionPerfiles";

export const Formulario = () => {
  return (
    <div className="formulario">
      <Sidebar />
      <div className="tabs">
        <Tabs
          className="tabs-2"
          defaultActiveKey="1"
          centered
          items={[
            {
              label: "perfiles",
              key: "1",
              children: <SeleccionPerfiles />,
            },
            {
              label: "Tab 2",
              key: "2",
              children: "Tab 2",
            },
            {
              label: "Tab 3",
              key: "3",
              children: "Tab 3",
            },
          ]}
        />
      </div>
    </div>
  );
};
