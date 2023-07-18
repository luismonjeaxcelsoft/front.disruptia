import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { HojadevidaHome } from "./pages/HojadevidaHome";
import { Formulario } from './pages/Formulario';
import 'bootstrap/dist/css/bootstrap.css'
import HomeAdmin from './pagesAdmin/HomeAdmin';
import TabsLogin from './pagesRegisterLogin/TabsLogin';
import PerfilLogin from './pagesRegisterLogin/PerfilLogin';
import ValidatePass from './pagesRegisterLogin/ValidatePass';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HojadevidaHome />
  },
  {
    path: "/perfiles/:tab",
    element: <Formulario  />
  },
  {
    path: "/empresa",
    element: <HomeAdmin />
  },
  {
    path: "/registro",
    element: <TabsLogin />
  },
  {
    path: "/profileUser",
    element: <PerfilLogin />
  },
  {
    path: "/validatepass",
    element: <ValidatePass />
  }
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
