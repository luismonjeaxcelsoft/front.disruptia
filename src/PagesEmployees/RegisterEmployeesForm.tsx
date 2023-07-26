import { Form, Input } from "antd"
import "../styles/RegisterEmployees.css"
import {useState} from 'react'
import { SidebarEmployees } from "./SidebarEmployees"

const RegisterEmployeesForm = () => {
    const [continueRegister, setContinueRegister] = useState(false)
  return (
    <>
    <SidebarEmployees type="register"/>
     <div style={{background:"white",width:"100vw",height:"100vh"}}>
     <div style={{marginLeft:"-200px",marginTop:"30px"}} >
        <Form>
        <div className="container-inputs-fomr-register" >
            <label className="span-register-emplyees">{!continueRegister ? "Nombres" :"Empresa"}</label>
            <Input
            placeholder="Andrés"
            className="input-register-employees"
            />
        </div>
        <div className="container-inputs-fomr-register" >
            <label className="span-register-emplyees">{!continueRegister ? "Apellidos" : "Cargo"}</label>
            <Input
            placeholder="Raga"
            className="input-register-employees"
            />
        </div>
        <div className="container-inputs-fomr-register" >
            <label className="span-register-emplyees">{!continueRegister ? "Código de Países" : "¿Cómo te enteraste de nosotros?"}</label>
            <Input
            placeholder="+57 (Colombia)"
            className="input-register-employees"
            />
        </div>
        <div className="container-inputs-fomr-register" >
            <label className="span-register-emplyees">{!continueRegister ? "Telefono" : "¿Por cuál medio?"}</label>
            <Input
            placeholder="321 488 7569"
            className="input-register-employees"
            />
        </div>
     {
        !continueRegister &&    <div className="container-inputs-fomr-register" >
        <label className="span-register-emplyees">Contraseña</label>
        <Input
        type="password"
        className="input-register-employees"
        />
    </div>
     }
        <div
          style={{
            display: "flex",
            width:"34%",
            marginTop: "10px",
          }}
        >
          <button
            onClick={() => setContinueRegister(true)}
            className="button-perfile-finish"
          >
            <span
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: "20px",
                color: "#4D1AE8",
              }}
            >
              Continuar
            </span>
          </button>
        </div>
        </Form>
     </div>
    </div>
    </>
   
  )
}

export default RegisterEmployeesForm
