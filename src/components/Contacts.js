import React, { Component } from 'react'
import Contact from './Contact'


class Contacts extends Component {
    state = {
            contacts: [
                {
                    id: 1,
                    nome: 'Jonatan Teixeira',
                    email: 'jteixeira@live.com', 
                    celular: '(13) 7 7777-7777'
                },
                {
                    id: 2,
                    nome: 'Nohan Teixeira',
                    email: 'nonoteixeira@live.com', 
                    celular: '(13) 5 5555-5555'
                },
                {
                    id: 3,
                    nome: 'Natan Teixeira',
                    email: 'natanteixeira@live.com', 
                    celular: '(13) 3 3333-3333'
                }
            ]
        };
    
    render() {
        const {contacts} = this.state;

        return (
            <div>
                {contacts.map(contact => (
                    <Contact
                    key={contact.id}
                    contact={contact} 
                    />
                ))}
            </div>
        );
    }
}

export default Contacts;
