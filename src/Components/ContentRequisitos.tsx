import React from 'react'
import bullet from '../1x/Bullet.png'
import asset6 from '../1x/Asset6.png'
import mujer from '../1x/Asset7.png'

export default function ContentRequisitos() {
    return (
        <div className="row m-5" id="REQUISITOS">
            <div className="col d-flex flex-column justify-content-between">
                <div style={{ textAlign: "left" }}><b style={{ fontSize: "45px", textAlign: "left" }}>Te<br />queremos<br />policía</b></div>
                <div><img src={mujer} alt="" /></div>
            </div>
            <div className="col d-flex flex-column justify-content-start">
                <div className="d-flex flex-row my-4" style={{ textAlign: "left" }}>
                    <img src={bullet} style={{ height: "22px" }} alt="" />
                    <div style={{ paddingLeft: "40px", fontSize: "25px" }}>De 19 a 35 años</div>
                </div>
                <div className="d-flex flex-row my-4" style={{ textAlign: "left" }}>
                    <img src={bullet} style={{ height: "22px" }} alt="" />
                    <div style={{ paddingLeft: "40px", fontSize: "25px" }}><b>Estatura Mínima</b><br />
                        Mujeres 1.55 m<br />
                        Hombres 1.65 m</div>
                </div>
                <div className="d-flex flex-row my-4" style={{ textAlign: "left" }}>
                    <img src={bullet} style={{ height: "22px" }} alt="" />
                    <div style={{ paddingLeft: "40px", fontSize: "25px" }}><b>Escolaridad:</b><br />
                        Preparatoria terminada<br />
                        Carrera profesional Deseable</div>
                </div>
                <div className="d-flex flex-row my-4" style={{ textAlign: "left" }}>
                    <img src={bullet} style={{ height: "22px" }} alt="" />
                    <div style={{ paddingLeft: "40px", fontSize: "25px" }}>Cartilla militar (hombres)</div>
                </div>
            </div>
            <div className="col">
                <img src={asset6} alt="" />
            </div>
        </div>
    )
}
