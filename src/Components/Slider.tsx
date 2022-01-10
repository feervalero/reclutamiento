import { request } from 'http';
import React from 'react'
import banner from '../1x/Asset2.png';
import logo from '../1x/Asset13.png';
import stripes from '../1x/Asset5.png'
import car from '../1x/Asset4.png'

export default function Slider() {
    return (
        <>
            <div className="row" style={{ backgroundColor: "rgb(156,213,255)" }}>
                <div className="col-8" style={{ backgroundImage: `url(${banner})`, height: "800px" }}>

                </div>
                <div className="col-4">
                    <img src={logo} alt="" style={{}} />
                    <div><span style={{ color: "#FAFF00" }} className="helloTitle">Hola: </span><span style={{ color: "#373A36" }} className="helloTitle">Ana</span></div>
                    <div className="title2">Te queremos policía</div>
                </div>
            </div>
            <div className="row">
                <div className="col flex-row">
                    <img src={stripes} alt="" />
                    <img src={car} alt="" />
                </div>
            </div>
        </>
    )
}
