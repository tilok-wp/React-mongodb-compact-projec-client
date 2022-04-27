import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService/useService';

const ManageServices = () => {
    const [services, setServices] = useService()

    const handleDeleteService = _id => {
        const aprove = window.confirm('Are you want to detele this user id: ', _id)
        if (aprove) {
            console.log('User deleted', _id)
            const url = `http://localhost:5000/service/${_id}`
            // console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingservice = services.filter(service => service._id !== _id)
                        setServices(remainingservice)
                    }
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>Mnage your services</h3>
            {
                services.map(service => <li key={service._id}>{service.name} <button onClick={() => handleDeleteService(service._id)}>X</button>
                    <Link to={`/update/${service._id}`}> <button>Edit</button></Link></li>)
            }
        </div>
    );
};

export default ManageServices;