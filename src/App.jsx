import EjemploProps from './components/Ejemplo/EjemploProps'
import EjemploContador from './components/Ejemplo/EjemploContador'
import './App.css'


function App() {

  const saludar = () => {
    console.log('Hola desde app')
  }

  return (
    <div>
      <EjemploProps saludar={saludar} mensaje = "prop enviada desde el componente app" />
      <EjemploProps saludar={saludar} mensaje = "ola"/>
      <EjemploProps saludar={saludar} mensaje = "ola" image="https://www.maclucan.com/wp-content/uploads/2023/06/marketing-publicidad-roblox.jpg"/>
      <EjemploContador />
    </div>
    

  )
}

export default App

/* 1:32:18 */