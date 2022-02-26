import React from "react";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="row">
                <div className="col-lg-6  left" data-aos="fade-down">
                    <h1>Shukrana</h1>
                    <h4>
                        On Wednesday, 2<sup>nd</sup> March, 2022.
                        <br />
                        28<sup>th</sup> Rajjab-ul-Murajjab, 1443 Hijri.
                    </h4>
                    <h5>Time: 08:00 PM.</h5>
                </div>
                <div className="col-lg-6 right"></div>
            </div>

            <div className="row">
                <div className="col-lg-6 left"></div>
                <div
                    className="col-lg-6 right"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <h1>Nikaah</h1>
                    <h4>
                        On Thursday, 3<sup>rd</sup> March, 2022.
                        <br />
                        29<sup>th</sup> Rajjab-ul-Murajjab, 1443 Hijri.
                    </h4>
                    <h5>Time: 01:00 PM.</h5>
                    <h2>Venue:</h2>
                    <h5>
                        International Function Hall,
                        <br />3<sup>rd</sup> road - SKD Colony,
                        <br />
                        Adoni.
                    </h5>
                </div>
            </div>

            <div className="row">
                <div
                    className="col-lg-6 left"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    <h1>Valima</h1>
                    <h4>
                        On Friday, 4<sup>th</sup> March, 2022.
                        <br />
                        30<sup>th</sup> Rajjab-ul-Murajjab, 1443 Hijri.
                    </h4>
                    <h5>Time: 02:00 PM.</h5>
                    <h2>Venue:</h2>
                    <h5>
                        International Function Hall,
                        <br />3<sup>rd</sup> road - SKD Colony,
                        <br />
                        Adoni.
                    </h5>
                </div>
                <div className="col-lg-6 right"></div>
            </div>
        </section>
    );
}

export default Timeline;
