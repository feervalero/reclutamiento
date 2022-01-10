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
                    <img src={banner} alt="" />
                </div>
                <div className="col-4" style={{ backgroundColor: "red", alignContent: "end" }}>
                    <img src={logo} alt="" style={{ position: "relative", alignItems: "end", alignSelf: "end", alignContent: "end" }} />
                    <div style={{ position: "relative", left: "-15vw" }} className="d-flex flex-row">
                        <span style={{ color: "#FAFF00", fontSize: "175px" }} >
                            <b>Hola: </b>
                        </span>
                        <span style={{ color: "#373A36", fontSize: "175px" }} >
                            <b style={{ borderBottom: "6px solid #373A36" }}>Ana</b>
                        </span>
                    </div>
                    <div className="title2" style={{ fontSize: "55px", textAlign: "left", paddingLeft: "65px" }}><b>Te queremos<br /> policía</b></div>
                </div>
            </div>
            <div className="row flex-row">
                <div className="col">
                    <div style={{ position: "absolute", backgroundColor: "rgb(156,213,255)", height: "250px" }}></div>
                    <img src={stripes} style={{ height: "500px", width: "auto" }} alt="" />
                    <img src={car} alt="" />
                </div>
            </div>
        </>
    )
}
