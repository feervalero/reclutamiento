import React from 'react'
import bullet from '../1x/Bullet.png'
import asset6 from '../1x/Asset6.png'

export default function ContentRequisitos() {
    return (
        <div className="row">
            <div className="col">
                Te queremos policia
            </div>
            <div className="col">
                <p>
                    <img src={bullet} alt="" />
                    <span>De 19 a 35 años</span>
                </p>
                <p>
                    <img src={bullet} alt="" />
                    <span>Estatura Mínima<br />
                        Mujeres 1.55 m<br />
                        Hombres 1.65 m</span>
                </p>
                <p>
                    <img src={bullet} alt="" />
                    <span>Escolaridad:<br />
                        Preparatoria terminada<br />
                        Carrera profesional Deseable</span>
                </p>
                <p>
                    <img src={bullet} alt="" />
                    <span>Cartilla militar (hombres)</span>
                </p>
            </div>
            <div className="col">
                <img src={asset6} alt="" />
            </div>
        </div>
    )
}
