import React from 'react';
import {FaWarehouse,FaUserEdit,FaUsers,FaChartLine,FaStoreAlt} from 'react-icons/fa';
import {MdSettingsApplications,MdShoppingCart} from 'react-icons/md';
import {Link} from 'react-router-dom';

import './Home.css'


function Home() {

const refUser=React.createRef()
const refOldShop=React.createRef()
const refNewShop=React.createRef()

return (
    <div className="home-hero">
        <div className="home-bg-screen">
            <div className="home-box">
                
                <div className="home-link"
                     onClick={e=>{
                        window.location.href = 'http://varaporn.net/newpagebasicdata'
                        }}>
                    <div>
                        <FaStoreAlt className="home-icon"/>
                    </div>
                    <div>
                        <h3>ร้านนอก</h3>
                    </div>
                </div>

    
                <div className="home-link"
                     onClick={e=>{
                        window.location.href = 'http://varaporn.net/pagebasicdata'
                     }}>
                    <div>
                        <FaWarehouse className="home-icon"/>
                    </div>
                    <div>
                        <h4>ร้านใน</h4>
                    </div>
                </div>

         
            </div>
        </div>

    </div>
)
}

export default Home;