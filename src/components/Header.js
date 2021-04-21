import React from 'react';
import PropTypes from 'prop-types'

const Header = props => {
    const {marca} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-marca">{marca}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                            Início
                            </a>    
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    marca: 'Minha lista'
};

Header.propTypes = {
    marca: PropTypes.string.isRequired
};



export default Header;