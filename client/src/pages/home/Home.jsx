import React from 'react';
import {AcUnit} from "@mui/icons-material";
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';

const Home = () => {
    return (
        <div className='home'>
            <Navbar/> 
            <Featured type="movie"/>         
        </div>
    )
}

export default Home