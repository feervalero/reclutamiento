import React from 'react'
import logo from '../1x/Asset1.png';

export default function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src={logo} alt="" style={{ backgroundColor: "white" }} />
                </div>
                <div className="col-6"></div>
                <div className="col-2">
                    <ul className="menu">
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
    )
}

const styles = {
    linkMenu: {
        padding: "10px",

    }
}