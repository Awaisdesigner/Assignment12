import React from "react"
import "./Navbar.css"

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <h3>Besnik</h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item px-3">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link">Contact Us</a>
                            </li>
                            <button
                                style={{ fontSize: "14px" }}
                                type="button"
                                class="btn btn-sm btn-outline-primary px-4 mx-4"
                            >
                                Sign In
                            </button>
                            <button
                                style={{ fontSize: "14px", color: "black" }}
                                type="button"
                                class="btn btn-sm btn-primary px-4 mx-4"
                            >
                                Sign Up
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;