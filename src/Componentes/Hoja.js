import React from 'react';
import '../stylessheets.css/Hoja.css'

export function Hoja(props) {

    return (
        <div className='hoja-vida'>
            <img 
                className='imagen-hoja'
                src={require(`../Imegenes/nombre-${props.empresa}.jpg`)}
                alt='Foto Michael'/>
            <div className='Contenedor-descrip'>
                <p className='descrip1'>Experience</p>
                <p className='Trabajo1'>{props.cargo} for {props.empresa} in {props.contry}</p>
                <p className='estudio'>{props.funciones}</p>
                <p className='estudio'>{props.logros}</p>
            </div>

        </div>
    );
}
