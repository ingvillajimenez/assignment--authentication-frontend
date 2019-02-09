import React, { Component } from 'react';

export default class Signup extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const API_URL = 'https://secure-thicket-75424.herokuapp.com/api/v1';

        fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.history.push('/')
        })
        .catch(e => alert(e));
    }
    
    render() {
        return(
            <div>
                <h2>Signup</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <input name='email' type='email' placeholder='email' />
                    </div>
                    <div>
                        <input name='password' type='password' placeholder='password' />
                    </div>
                    <input type='submit' value='signup' />
                </form>
            </div>
        );
    }
}