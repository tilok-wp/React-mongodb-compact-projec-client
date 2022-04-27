import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/service'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))

    }
    return (
        <div className='w-50 mx-auto p-5'>
            <h3 className='text-center'>Add service item</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='Services image url' {...register("img")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price", { min: 10, max: 1000 })} />
                <input type="submit" value="Add service" />
            </form>
        </div>
    );
};

export default AddService;