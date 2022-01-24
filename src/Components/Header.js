import React from "react"
import Header1 from "../Assets/onheader.png"
import Header2 from "../Assets/header.png"

function Header() {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h1 className="display-4">
                            Search for Homes in your Neighborhood
                        </h1>
                        <p className="lead">
                            Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.
                        </p>

                        <p className="lead">
                            <div className="d-flex">
                                <div>
                                    <label className="form-label">Address
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="587 Bridgeton Road"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label className="form-label">City
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="El Paso, Texas"
                                        />
                                    </label>
                                </div>
                                <div className="">

                                    <button
                                        style={{ fontSize: "18px", marginTop: "30px" }}
                                        type="button"
                                        class="btn btn-sm btn-primary"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </p>
                    </div>


                    <div className="col-md-6 col-sm-6">
                        
                        <img
                            style={{
                                position: "absolute",
                                right: "0vh",
                                top: "60vh",
                            }}
                            className="img-fluid"
                            src={Header1} 
                        />
                        <img style={{width: "80vw", height: "80vh"}} className="img-fluid" src={Header2} /> 
                        
                    </div>



                </div>
            </div>









        </div>
    );
}

export default Header;    