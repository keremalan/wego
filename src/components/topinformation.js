import React from 'react';
import './topinformation.css';

const TopInformation = () => (
    <>
    <div className="top-information">
        <ul className="top-information__ul">
            <li className="top-information__ul__li"><a href="#">Wego Collection</a></li>
            <li className="top-information__ul__li"><a href="#">Wego Touch</a></li>
            <li className="top-information__ul__li"><a href="#">Showroom</a></li>
            <li className="top-information__ul__li ul__li__right"><a href="#">Kampanyalar</a></li>
            <li className="top-information__ul__li ul__li__right"><a href="#">En Yeniler</a></li>
            <li className="top-information__ul__li ul__li__right"><a href="#">Destek Merkezi</a></li>
        </ul>
    </div>
    </>
)

export default TopInformation;