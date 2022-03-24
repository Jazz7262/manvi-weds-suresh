import React from "react";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <img
                        className="couple-img"
                        src="../assets/images/bride.png"
                        alt="Bride_img"
                    />

                    <div className="info">
                        <h3>Karre Manvi Sree</h3>

                        <h5>D/O Mr. Karre Lakshmanna & Mrs. Karre Leelavati</h5>
                    </div>
                </div>

                <div
                    className="col-lg-2"
                    data-aos="zoom-in "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart-mid.png"
                        alt="heart_img"
                    />
                </div>

                <div className="col-lg-5" data-aos="fade-up">
                    <img
                        className="couple-img"
                        src="../assets/images/groom.jpg"
                        alt="Groom_img"
                    />
                    <div className="info">
                        <h3>Saya Suresh</h3>

                        <h5>S/O Mr. Saya Venkatesh & Mrs. Saya Sahnti </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
