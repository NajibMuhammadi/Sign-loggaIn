import React, { useState } from 'react';
import axios from 'axios';
import './signIn.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        setError('');
        event.preventDefault();
        

        axios.post('http://localhost:8083/signin', {
            EmailId: email,
            Password: password
        }).then(res => {
            if (res.status === 200) {
               navigate('/homePage');
            } else {
                setError('An unknown error occurred');
            }
        })
        .catch(err => {
            if (err.response) {
                console.log('Error response data:', err.response.data);
                setError(err.response.data.error);
            } else {
                console.error('Error:', err);
                setError('An unknown error occurred');
            }
        });
    }

    return (
        <div className='form__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='form__title'>Sign In</h1>
                {error && <p className='form__error'>{error}</p>}
                <input
                    className='form__input'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='form__input'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='form__btn' type='submit'>Sign In</button>
                <p className='form__subtitle'>
                    Don't have an account? <Link to='/' className='form__subtitle-link'>Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
