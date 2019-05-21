import React, { Component } from 'react';
import LoginForm from './form';

class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('- values:', values);
    }

    render() {
        return (
            <div style={{ padding: 15 }}>
                <h2>Asynchronous Validation</h2>
                <p>
                    Usernames that will <em>fail</em> validation: <code>john</code>
                    , <code>paul</code>
                    , <code>george</code> or <code>ringo</code>
                    .
                </p>
                <LoginForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default LoginPage;
