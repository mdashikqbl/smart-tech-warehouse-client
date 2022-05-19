import React from 'react';
import './ManageInventory.css'
import useInventorys from '../../Hooks/UseInventorys';
import SingleManageInventory from '../SingleManageInventory/SingleManageInventory';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [manageInventorys, setManageInventorys] = useInventorys([]);
    const navigate = useNavigate()
    const handleaToAddItems = () => {
        navigate('/additem')
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://shrouded-chamber-00283.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const remaining = manageInventorys.filter(manageInventorys => manageInventorys._id !== id)
                    setManageInventorys(remaining)
                })
        }


    }

    return (
        <div className='manageInventory-title'>
            <h1 >Manage Inventory</h1>

            <div className='manageInventory-container'>
                {
                    manageInventorys.map(manageInventory => <SingleManageInventory key={manageInventory._id} manageInventory={manageInventory}
                        handleDelete={handleDelete} ></SingleManageInventory>)
                }
            </div>

            <div className='addItems-inventory' >
                <button onClick={handleaToAddItems} >Add New Items</button>
            </div>
        </div>
    );
};

export default ManageInventory;