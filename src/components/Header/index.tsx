import './style.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                <img
                    className="img-logo"
                    src="https://files.sikayetvar.com/lg/cmp/32/32368.png?1605792752"
                    alt="logo"
                />
                </Link>
                <Link
                    to="/favorites"
                    className="favorites text-right"
                    style={{ textDecoration: "none" }}
                >
                    Favorites
                </Link>
            </nav>
        </header>
    );
}

export default Header;
