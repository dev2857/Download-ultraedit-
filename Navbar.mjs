import React from 'react'
import PropsTypes from 'prop-types'
import { Link } from 'react-router';
export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form> */}
                        <div class={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input class="form-check-input" onClick={props.useDark} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.PropsTypes = {
    title: PropsTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'Ld'
}
