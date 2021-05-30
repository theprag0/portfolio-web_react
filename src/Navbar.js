import React, {useState, useEffect, useRef} from 'react';
import './styles/Navbar.css';

function Navbar() {
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

    let logoStyle = {
        color: navBg === '#fff' ? '#000' : '#fff',
    }
    let navLinkStyle = {
        color: navBg === '' ? '#fff' : null
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top fill`} id="main-nav" ref={navRef} style={rootStyle}>
            <div className="container">
                <a className="navbar-brand logo" href="#home" style={logoStyle}>Saravanan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" id="nav-links">
                        <li className="nav-item px-1">
                            <a className="nav-link" href="#home" style={navLinkStyle}>Home</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link" href="#about" style={navLinkStyle}>About</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link" href="#resume" style={navLinkStyle}>Resume</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link" href="#contact" style={navLinkStyle}>Contact</a>
                        </li>
                    </ul>
                    <a className="nav-link linkedin-nav px-3" href="https://www.linkedin.com/in/saravanan-rathinam-778a0a49/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;

