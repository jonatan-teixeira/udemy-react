import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors:{}
    };

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
        
        const newContact = {
            name,
            email,
            phone,
        };

        const res = await axios
        .post('https://jsonplaceholder.typicode.com/users', newContact);

        dispatch({type: 'ADICIONAR_CONTATO', payload: res.data});

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
                                Adicionar Contato
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
                                    value="Adicionar Contato"
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

export default AddContact;
