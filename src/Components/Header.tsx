import React from 'react'
import logo from '../1x/Asset1.png';

export default function Header() {
    return (
        <div className="container-fluid">
            <div className="row p-5">
                <div className="col-12 d-flex flex-row">
                    <div>
                        <img src={logo} alt="" style={{ backgroundColor: "white" }} />
                    </div>
                    <div className="flex-fill"></div>
                    <div className="d-flex align-items-center" style={{}}>
                        <div>
                            <ul className="menu" style={{}}>
                                <li>
                                    <a style={styles.linkMenu} href="#POLICIA">POLICIA</a>
                                    <a style={styles.linkMenu} href="#REUISITOS">REQUISITOS</a>
                                    <a style={styles.linkMenu} href="#BENEFICIOS">BENEFICIOS</a>
                                    <a style={styles.linkMenu} href="#CITAS">CITAS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const styles = {
    linkMenu: {
        color: "black",
        textDecoration: "none",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRight: "2px solid black"
    }
}