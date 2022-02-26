import React from "react";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <img
                        className="couple-img"
                        src="../assets/images/mustafa.jpg"
                        alt="Groom_img"
                    />
                    <div className="info">
                        <h3>
                            Mustafa Jagirdar, <sub>(B. Com)</sub>
                        </h3>
                        <h6>Owner of Shawarma King - Adoni, Business.</h6>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out"
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
                        src="../assets/images/hijaab-girl.png"
                        alt="Bride_img"
                    />

                    <div className="info">
                        <h3>Noor-e-A'ayin</h3>
                        <p>D/O B. Abdul Kareem (Dada Basha) Sahab.</p>
                        <p>(R/O. Bharpet, Adoni.)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
