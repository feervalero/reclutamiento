import React from 'react'
import logo from '../1x/Asset13.png'
import socialLogos from '../1x/Asset19.png'
import asset12 from '../1x/Asset14.png'
import footer from '../1x/Asset20.png'
import { url } from 'inspector'

export default function Footer() {
    return (
        <>
            <div className="row" style={{ backgroundColor: "#373A36", padding: "2vw" }}>
                <div className="col-3" style={{}}>
                    <img src={logo} alt="" />
                </div>
                <div className="col">
                    <ul style={{ listStyle: "none" }}>
                        <li style={{ borderBottom: "3px solid #AA9767", color: 'white', textAlign: "left", fontSize: "20px", height: "60px", lineHeight: "60px" }}>Transparencia</li>
                        <li style={{ borderBottom: "3px solid #AA9767", color: 'white', textAlign: "left", fontSize: "20px", height: "60px", lineHeight: "60px" }}>Noticias y Eventos</li>
                        <li style={{ borderBottom: "3px solid #AA9767", color: 'white', textAlign: "left", fontSize: "20px", height: "60px", lineHeight: "60px" }}>Contacto</li>
                        <li style={{ borderBottom: "3px solid #AA9767", color: 'white', textAlign: "left", fontSize: "20px", height: "60px", lineHeight: "60px" }}>Siguenos / @SSPCMonterrey
                            <br />
                            <img src={socialLogos} alt="" />

                        </li>
                    </ul>
                </div>
            </div>
            <div className="row pY-5" style={{ background: `url(${footer})`, backgroundRepeat: "no-repeat", backgroundColor: "#373A36" }}>
                <div className="col d-flex justify-content-center align-items-center" style={{ fontSize: "25px" }}>
                    hola@policiamonterrey.gob.mx
                </div>
                <div className="col d-flex justify-content-center align-items-center" style={{ fontSize: "25px" }}>
                    Atencion Ciudadana. +52 81 5102 8535
                </div>
                <div className="col" style={{}}>
                    <img src={asset12} style={{ position: "relative", top: "-50px" }} alt="" />
                </div>
            </div>
        </>
    )
}
