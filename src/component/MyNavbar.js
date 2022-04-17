import React from 'react';
import {Link} from "react-router-dom";

function MyNavbar(props) {
    return (
        <div className="main-navbar">
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <Link className="navbar-brand" to="#">
                        <img src="images/brand.png" alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <img src="images/menu.png" alt="ddd"/>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Преимущества</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Наши кредиты</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Контакты</Link>
                            </li>
                        </ul>
                        <div className="languages mobile-languages">
                            <div className="dropdown">
                                <button type="button" className="d-flex align-items-center"
                                        data-bs-toggle="dropdown">
                                    <div><img className='me-1' src="images/languages.png" alt=""/></div>
                                    Ру
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Uz</a></li>
                                </ul>
                            </div>
                            <a className="phone-btn" href="tel:1152">
                                Контакт-центр 24/7 :
                                <b>1152</b>
                            </a>
                        </div>
                    </div>
                    <div className="languages desktop-languages">
                        <div className="dropdown">
                            <button type="button" className="d-flex align-items-center"
                                    data-bs-toggle="dropdown">
                                <div><img className='me-1' src="images/languages.png" alt=""/></div>
                                Ру
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Uz</a></li>
                            </ul>
                        </div>
                        <a className="phone-btn" href="tel:1152">
                            Контакт-центр 24/7 :
                            <b>1152</b>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MyNavbar;