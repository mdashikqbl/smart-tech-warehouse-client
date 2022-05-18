import React, { useEffect, useState } from 'react';
import './InventoryDetail.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const InventoryDetail = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { inventoryId } = useParams();
    const navigateTomanage = () => {
        navigate('/manage')
    }
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://shrouded-chamber-00283.herokuapp.com/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    let { img, name, price, quantity, suppliername, descripation } = inventory;
    const handleDeliverd = () => {
        if (quantity >= 1) {
            let Remaining = parseFloat(+ inventory.quantity) - 1
            let updateQuentity = { img, name, price, quantity: Remaining, suppliername, descripation }
            setInventory(updateQuentity)
            fetch(`https://shrouded-chamber-00283.herokuapp.com/inventory/${inventoryId}`, {
                method: 'PUT',
                body: JSON.stringify(updateQuentity),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    toast('Delivered Success')
                }
                )
        }
        else {
            toast('Already Out of Stock')
        }
    }
    const handleRestock = (e) => {
        e.preventDefault()
        let updatedQuantity = parseFloat(+ inventory.quantity) + parseFloat(e.target.number.value)
        let updateQuentity = { img, name, price, quantity: updatedQuantity, descripation, suppliername }
        setInventory(updateQuentity)
        fetch(`https://shrouded-chamber-00283.herokuapp.com/inventory/${inventoryId}`, {
            method: 'PUT',
            body: JSON.stringify(updateQuentity),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                e.target.reset()
                toast('Restock Success')
            }
            )
    }



    return (
        <div className='singleInventoryDetail-container'>
            <div className='singleInventoryDetail'>
                <div>
                    <div className='text-center mb-3'><img src={img} alt="" /></div>

                    <h3>{name}</h3>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity >= 1 ? quantity : <span>Out Of Stock</span>}</p>


                    <p>Supplier Name:{suppliername}</p>
                    <p>{descripation}</p>
                </div>
                <button onClick={() => handleDeliverd()} >Deliverd</button>


            </div>
            <div className='restock-field'>
                <form onSubmit={handleRestock} >

                    <input className='number-field' type="number" name="number" />
                    <input className='submit-btn' type="submit" value="Restock" />
                </form>
            </div>
            <div className='manage-btninventory'>
                <button onClick={navigateTomanage} >Manage Inventorys</button>
            </div>
        </div >
    );
};

export default InventoryDetail;