import React, {useState, useEffect, useRef} from 'react';
import './styles/Navbar.css';

function Navbar(props) {
    const [navBg, setNavBg] = useState("");

    const navRef = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', (evt) => {
            if (window.scrollY > navRef.current.clientHeight) {
                setNavBg("#fff");
            } else {
                setNavBg("");
            }
        });
    }, [navBg]);

    let rootStyle = {
        backgroundColor: navBg,
        boxShadow: navBg === "#fff" ? "0 2px 5px rgba(0, 0, 0, 0.2)" : "none"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top fill" id="main-nav" ref={navRef} style={rootStyle}>
            <div className="container">
                <a className="navbar-brand logo" href="#home">Saravanan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" id="nav-links">
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#resume">Resume</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;

