import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://shrouded-chamber-00283.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div>
            <h1 className='add-title'>AddItem to Inventory</h1>
            <div className='items-field' >
                <form className='form-control' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='suppliername' {...register("suppliername", { required: true, maxLength: 20 })} />
                    <input placeholder='descripation' {...register("descripation")} />
                    <input placeholder='price' type="number" {...register("price")} />
                    <input placeholder='quantity' type="number" {...register("quantity")} />
                    <input placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='add-items' type="submit" value="AddItem" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;