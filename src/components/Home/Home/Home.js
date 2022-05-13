import React from 'react';
import Banner from '../Banner/Banner';
import Inventorys from '../Inventorys/Inventorys';
import Partners from '../Patrners/Partners';
import Information from './Information/Information';

const Home = () => {
    return (
        <>

            <Banner></Banner>
            <Inventorys></Inventorys>
            <Partners></Partners>
            <Information></Information>
        </>
    );
};

export default Home;