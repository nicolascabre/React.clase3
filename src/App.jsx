import { react } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () =>{
  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Registro</h2>
        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input type="text" placeholder="Ingresa tu apellido" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Correo electrónico" />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="Número de teléfono" />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input type="password" placeholder="Repite tu contraseña" />
          </div>

          <button type="submit" className="submit-button">Registrarse</button>
        </form>
      </div>
    </div>
    );
  };
  
export default App
