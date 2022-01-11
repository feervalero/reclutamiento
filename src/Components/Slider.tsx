import { request } from 'http';
import React from 'react'
import banner from '../1x/Asset2.png';
import logo from '../1x/Asset18.png';
import stripes from '../1x/Asset5.png'
import car from '../1x/Asset4.png'

export default function Slider() {
    return (
        <>
            <div className="row" style={{ backgroundColor: "rgb(156,213,255)", paddingTop: "130px" }}>
                <div className="col-8" >
                    <img src={banner} style={{ left: "-20px", position: "relative" }} alt="" />
                </div>
                <div className="col-4" style={{ alignContent: "end" }}>
                    <img src={logo} alt="" style={{ position: "relative", alignItems: "end", alignSelf: "end", alignContent: "end" }} />
                    <div style={{ position: "relative", left: "-15vw" }} className="d-flex flex-row">
                        <span style={{ color: "#FAFF00", fontSize: "175px" }} >
                            <b>Hola: </b>
                        </span>
                        <span style={{ color: "#373A36", fontSize: "175px" }} >
                            <b style={{ borderBottom: "6px solid #373A36" }}>Ana</b>
                        </span>
                    </div>
                    <div className="title2" style={{ fontSize: "55px", textAlign: "left", paddingLeft: "65px", color: "##373A36" }}><b>Te queremos<br /> policía</b></div>
                </div>
            </div>
            <div className="row flex-row">
                <div className="col-12">
                    <div style={{ backgroundColor: "rgb(156,213,255)", height: "200px" }}></div>
                    <img src={stripes} style={{ height: "400px", width: "auto", top: "-200px", position: "relative" }} alt="" />
                    <img src={car} style={{ top: "-200px", position: "relative" }} alt="" />
                </div>
            </div>
        </>
    )
}
