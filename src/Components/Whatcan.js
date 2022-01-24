import React from "react"
import icon1 from "../Assets/icon1.png"
import icon2 from "../Assets/icon2.png"
import icon3 from "../Assets/icon3.png"

function what() {      
    return (
        <div>
            <div className="container my-5">
                <h2 className="text-center">What Can We Help You Find?</h2>
                <div className="row text-center mt-5">
                    <div className="col-md-4 col-sm-12">
                        <div>
                            <img style={{ width: "70px" }} className="img-fluid" src={icon1} />
                            <h6 className="my-4">Buy a home</h6>
                            <p style={{ fontSize: "11px" }} >With over 1 million+ homes <br /> for sale available on the website, <br /> Trulia can match you with a house.</p>    
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div>
                            <img style={{ width: "70px" }} className="img-fluid" src={icon2} />
                            <h6 className="my-4">Rent a home</h6>
                            <p style={{ fontSize: "11px" }} >With 35+ filters and custom keyword <br /> search, Trulia can help you <br />
                                find a home.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div>
                            <img style={{ width: "70px" }} className="img-fluid" src={icon3} />
                            <h6 className="my-4">See neighborhoods</h6>
                            <p style={{ fontSize: "11px" }} >With more neighborhood insights <br />than any other real estate <br />
                                website. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default what;