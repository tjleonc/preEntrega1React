import { useState } from 'react' 
import Contador from './Contador'

const EjemploContador = () => {


    const [contador, setContador] = useState(0)
    //let contador = 0

    const aumentar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

return (
    <div>
        <p>Contador: {contador}</p>
        <button onClick={aumentar}>+</button>
        <button onClick={restar}>-</button>
    </div>
)
}
export default EjemploContador