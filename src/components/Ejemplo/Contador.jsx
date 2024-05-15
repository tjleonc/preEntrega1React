import React from 'react'

const contador = ({contador, aumentar, restar}) => {
    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={aumentar}>+</button>
            <button onClick={restar}>-</button>
        </div>
        )
    
}

export default contador