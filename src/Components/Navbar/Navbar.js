import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="sticky-md-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand" href="\">Leader Board</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="\" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USER
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="\profile">PROFILE</a></li>
                                    <li><a class="dropdown-item" href="\anslytics">ANALYTICS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/games">GAMES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/players">PLAYERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;