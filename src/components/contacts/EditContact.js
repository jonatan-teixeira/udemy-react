import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors:{}
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const res = await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        this.setState ({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone} = this.state;

        if (name === '') {
            this.setState({errors: { name: 'Insira um nome válido'}})
            return;
        }
        
        if (email === '') {
            this.setState({errors: { email: 'Insira um email válido'}})
            return;
        }
        
        if (phone === '') {
            this.setState({errors: { phone: 'Insira um número válido'}})
            return;
        }

        const updContact = {
            name,
            email,
            phone
        }

        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

        dispatch ({type: 'EDITAR_CONTATO', payload: res.data});
        
               //Limpar State
        this.setState({
            name: '',
            email:'',
            celular:'',
            errors: {}
        });

        this.props.history.push('/');
        };

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Edit Contato
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind
                                (this, dispatch)}>
                                    <TextInputGroup 
                                        label="Nome"
                                        name="name"
                                        placeholder="ex. João Carlos da Silva"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="ex: joao@email.com.br"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        label="Celular"
                                        name="phone"
                                        placeholder="(99) 98765-4321"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                    type="submit"
                                    value="Editar Contato"
                                    className="btn btn-light btn-block"
                                    /> 
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );    
    };
};

export default EditContact;