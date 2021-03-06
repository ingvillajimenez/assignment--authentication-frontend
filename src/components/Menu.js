import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

class Menu extends Component {
    handleLogout = () => {
        const { history } = this.props;

        localStorage.removeItem('token');
        history.push('/');
    }

    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/books'>Books</Link>
                    </li>
                    <li>
                        <Link to='/loans'>Loans</Link>
                    </li>
                    <li>
                        <button onClick={ this.handleLogout }>Logout</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Menu);