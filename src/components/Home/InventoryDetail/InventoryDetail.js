import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h1>this is inventory detail:{inventoryId}</h1>
        </div>
    );
};

export default InventoryDetail;