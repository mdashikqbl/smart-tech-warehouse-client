import React from 'react';
import './Inventorys.css'
import useInventorys from '../../../Hooks/UseInventorys';
import Inventory from '../Home/Inventory/Inventory';

const Inventorys = () => {
    const [inventory, setInventorys] = useInventorys([]);
    const sixInventorys = inventory.slice(0, 6);
    return (
        <div id='inventory' className='inventory-title'>
            <h1>Inventory</h1>
            <div className='inventorys-container'>
                {
                    sixInventorys.map(inventory => <Inventory key={inventory._id} inventory={inventory} ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventorys;