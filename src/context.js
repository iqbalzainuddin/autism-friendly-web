import React, {Component} from 'react';

const Context = React.createContext();

/* 
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            }
    
        default:
            return state;
    }
}
 */

export class Provider extends Component {
    state = {
        menus: [
            {
                id: 0,
                title: 'Start Here',
                url: '/'
            },
            {
                id: 1,
                title: 'About Competition',
                url: '/competition/about'
            },
            {
                id: 2,
                title: 'Terms & Conditions',
                url: '/terms/conditions'
            },
            {
                id: 3,
                title: 'How to Participate',
                url: '/participate/how'
            },
            {
                id: 4,
                title: 'How to Submit',
                url: '/submit/how'
            },
            {
                id: 5,
                title: 'Evaluation Method',
                url: '/evaluation/method'
            },
            {
                id: 6,
                title: 'Prize',
                url: '/prize'
            },
            {
                id: 7,
                title: 'Contact Us',
                url: '/contact'
            },
        ],
        // dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;