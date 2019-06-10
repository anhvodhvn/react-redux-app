import React, { Component } from 'react';
import LoginForm from './form';

class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(values) {
        console.log('- submit:', values);
    }

    handleReset() {
        console.log('- reset');
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
                <LoginForm onSubmit={this.handleSubmit} reset={this.handleReset} />
            </div>
        );
    }
}

export default LoginPage;
