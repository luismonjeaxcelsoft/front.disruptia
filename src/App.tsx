import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { HojadevidaHome } from "./pages/HojadevidaHome";
import { Formulario } from './pages/Formulario';
import 'bootstrap/dist/css/bootstrap.css'
import HomeAdmin from './pagesAdmin/HomeAdmin';
import PerfilLogin from './pagesRegisterLogin/PerfilLogin';
import ValidatePass from './pagesRegisterLogin/ValidatePass';
import FinishRegister from './pagesRegisterLogin/FinishRegister';
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
    path: "/profileUser",
    element: <PerfilLogin />
  },
  {
    path: "/validatepass",
    element: <ValidatePass />
  },
  {
    path: "/finalizar-registro",
    element: <FinishRegister />
  }
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
