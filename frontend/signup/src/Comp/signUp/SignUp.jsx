import React, { useState } from 'react';
import axios from 'axios';
import './signUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8083/create', {
            FullName: fullname,
            EmailId: email,
            Password: password,
            ConfirmPassword: confirmPassword
        }).then(res => {
            console.log(res.data);
            setFullname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        })
        .catch(err => {
            console.log(err.response.data);
        });
    };

    return (
        <div className='form__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='form__title'>Sign Up</h1>
                <input
                    className='form__input'
                    type='text'
                    placeholder='Full Name'
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
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
                <input
                    className='form__input'
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className='form__btn' type='submit'>Sign Up</button>
                <p className='form__subtitle'>
                    Already have an account? <Link to='/signin' className='form__subtitle-link'>Sign In</Link>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
