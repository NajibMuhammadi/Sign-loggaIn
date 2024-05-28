import axios from 'axios';
import { useState, useEffect } from 'react';

function homePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/admin')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className='php__container'>
            <h1>Admin Page</h1>
            <div className='php__content'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.ID}</td>
                                <td>{item.FullName}</td>
                                <td>{item.EmailId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default homePage