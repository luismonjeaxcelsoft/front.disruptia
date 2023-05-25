import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { HojadevidaHome } from "./pages/HojadevidaHome";
import { Formulario } from './pages/Formulario';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HojadevidaHome />
  },
  {
    path: "/perfiles",
    element: <Formulario />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
