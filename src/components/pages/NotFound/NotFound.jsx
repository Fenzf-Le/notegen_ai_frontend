import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './NotFound.css';
import { Pathname, PATH_NAME } from '../../../router/Pathname';

import FullLogo from '../../../assets/Logo/Full_NG-Logo.svg';
import ToDashboardIcon from '../../../assets/Icon_fill/SkipForNow.svg';
import LogoutIcon from '../../../assets/Icon_fill/LogOut.svg';

export default function NotFound() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        // console.log("Stored User:", storedUser); // Debugging

        if (!storedUser) {
            navigate(PATH_NAME.SIGNIN); // Redirect if no user found
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    const handleNavigateToDashboard = () => {
        if (user?.isAdmin) {
            navigate(PATH_NAME.ADMIN_DASHBOARD);
        } else {
            navigate(PATH_NAME.DASHBOARD);
        }
    };

    const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

    return (
        <div className='notFound-container'>
            <div className='notFound-header'>
                <img src={FullLogo} alt="FullLogo Icon" className="notFound-fullLogo-icon" />
                ‼️ can not find what you looking for ‼️
            </div>

            <div className='notFound-btn-container'>
                <button onClick={handleNavigateToDashboard} className='notFound-btn toDashboardBtn'>
                    To Dashboard
                    <img src={ToDashboardIcon} alt="ToDashboard Icon" className="notFound-toDashboard-icon" />
                </button>
                <button onClick={handleGoBack} className='notFound-btn goBackBtn'>
                    <img src={LogoutIcon} alt="ToDashboard Icon" className="notFound-goBack-icon" />
                    Go back
                </button>
            </div>          
        </div>
    )
}
