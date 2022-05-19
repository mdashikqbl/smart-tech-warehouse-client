import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import SingleMyItem from '../SingleMyItem/SingleMyItem';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myItems, setItems] = useState([]);

    useEffect(() => {
        const email = user?.email
        fetch(`https://shrouded-chamber-00283.herokuapp.com/myItemInventory?email=${email}`, {
            method: 'GET',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    const handleDeleteMyItem = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://shrouded-chamber-00283.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const remaining = myItems.filter(myItems => myItems._id !== id)
                    setItems(remaining)
                })
        }


    }
    return (
        <div className='inventory-title'>
            <h1>MyItems</h1>
            <div className='inventorys-container'>
                {
                    myItems.map(myitem => <SingleMyItem key={myitem._id} myitem={myitem} handleDeleteMyItem={handleDeleteMyItem} ></SingleMyItem>)
                }
            </div>
        </div>
    );
};

export default MyItem;