import React from 'react';
import useInventorys from '../../Hooks/UseInventorys';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myItem, setItem] = useInventorys([]);
    const email = user.email
    const url = `https://shrouded-chamber-00283.herokuapp.com/myItemInvemtory?email=${email}`
    fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    return (
        <div>
            <h1>{myItem.length}</h1>
        </div>
    );
};

export default MyItem;