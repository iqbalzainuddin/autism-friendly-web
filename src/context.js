/* 
    This context module playing its role as Context API where we
    put data of page and its url, so that it can be used in navigation
    bar components. The module exported Provider class that will be 
    used as a components that will wrap our App components. At the end
    of this module, Consumer is also exported as navigation bar will 
    need to use it to consume data from Context API.
*/

import React, {Component} from 'react';

const Context = React.createContext();

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
        ]
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