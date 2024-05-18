import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function SignIn() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    })
  return (
    <div className='php__container'>
    {data.map((item, index) => {
        return (
            <div key={index} className='php__data'>
                <p>{item.FullName}</p>
                <p>{item.EmailId}</p>
                <p>{item.Password}</p>
            </div>
        )
    })}
</div>
  )
}

export default SignIn
