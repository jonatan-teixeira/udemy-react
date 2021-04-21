import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    state = {};

    onShowClick = e => {};

    render() {
        const {nome, email, celular} = this.props.contact;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {nome} <i onClick={this.onShowClick} 
                    className="fas fa-sort-down"></i>
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Celular: {celular}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
