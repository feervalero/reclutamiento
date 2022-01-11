import React from 'react'

export default function ContentBeneficios() {
    return (
        <>
            <div className="row m-5" id="BENEFICIOS">
                <div className="col" style={{ borderLeft: "8px solid #AA9767", fontSize: "25px", textAlign: "left" }}>Beneficios <br /> económicos</div>
                <div className="col" style={{ borderLeft: "8px solid #AA9767", fontSize: "25px", textAlign: "left" }}>Beneficios <br /> familiares</div>
                <div className="col" style={{ borderLeft: "8px solid #AA9767", fontSize: "25px", textAlign: "left" }}>Beneficios <br /> profesionales</div>
                <div className="col" style={{ borderLeft: "8px solid #AA9767", fontSize: "25px", textAlign: "left" }}>Beneficios <br /> sociales</div>
            </div>
            <div className="row m-5" style={{ borderBottom: "3px solid black" }}>

            </div>
            <div className="row px-5 pb-5">
                <div className="col d-flex flex-column align-items-start" style={{ fontSize: "20px", textAlign: "left" }}>
                    <b>Sueldo como Cadete:</b>
                    $12,480 mensual

                    <b>Sueldo inicial como Policía:</b>
                    $15,590 mensual

                    <b>Máximo a ganar como Oficial:</b>
                    $39,043 mensual

                    <b>Bono de despensa:</b>
                    $4,000 mensual

                    <b>Bono por desempeño:</b>
                    1,700 mensual

                </div>
                <div className="col d-flex flex-column align-items-start" style={{ fontSize: "20px", textAlign: "left" }}>
                    <b>Guardería 24/7<br /></b>

                    45 días de aguinaldo<br />

                    20 días de vacaciones al año<br />

                    <b>Seguro de vida de $200 mil por muerte natural y de $550 mil por muerte accidental<br /></b>

                    <b>Servicio médico IMSS<br /></b>

                    <b>Crédito de vivienda INFONAVIT<br /></b>

                    <b>Becas para tu familia<br /></b>
                </div>
                <div className="col d-flex flex-column align-items-start " style={{ fontSize: "20px", textAlign: "left" }}>
                    <b>Becas para continuar tus estudios<br /></b>

                    Carrera Policial<br />

                    Capacitación constante
                </div>
                <div className="col d-flex flex-column align-items-start" style={{ fontSize: "20px", textAlign: "left" }}>
                    <b>Programa de reconocimiento a la Policía de Monterrey<br /></b>

                    Tarjeta de beneficios en tiendas de la ciudad <br />

                    Descuentos y trato preferencial en pago de predial y testamentos en Monterrey
                </div>
            </div>
        </>
    )
}
