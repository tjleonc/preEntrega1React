const EjemploProps = ({mensaje, image, saludar}) => {

    
    return (
    <div>
        <h1>
            {mensaje}
        </h1>
        <img src={image} style={{width:"100", height:"100"}} />
        <button onClick={saludar}>click me!</button>
    </div>
    )
}

export default EjemploProps