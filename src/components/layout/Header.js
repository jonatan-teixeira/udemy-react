import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = props => {
    const {marca} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-marca">{marca}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                            <i className="fas fa-home"></i> Início
                            </Link>    
                        </li>
                        <li className="nav-item">
                            <Link to="/contato/adicionar" className="nav-link">
                            <i className="fas fa-plus"></i> Adicionar
                            </Link>    
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre" className="nav-link">
                            <i className="fas fa-question"></i> Sobre
                            </Link>    
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