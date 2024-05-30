import React, { useEffect, useState } from "react";
import "./styles.css";
import AnchorTemporaryDrawer from './drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

function Header(){

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") == "dark" ? true : false
      );
    
      useEffect(() => {
        if (localStorage.getItem("theme") == "dark") {
          setDark();
        } else {
          setLight();
        }
      }, []);
    
      const changeMode = () => {
        if (localStorage.getItem("theme") != "dark") {
          setDark();
        } else {
          setLight();
        }
        setDarkMode(!darkMode);
        toast.success("Theme Changed!");
      };
    
      const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      };
    
      const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      };

    return <div className="navbar">
        <a href='/'><h1 className="logo">
        CryptoTracker<span style={{color:"var(--orange)"}}>.</span>
        </h1>
        </a>
        <div className="links">
        <Switch checked={darkMode} onClick={() => changeMode()} />
         <Link to='/'><p className='link'>Home</p></Link>
         <Link to='/compare'><p className='link'>Compare</p></Link>
         <Link to='/watchlist'><p className='link'>Watchlist</p></Link>
         <Link to='/dashbord'><Button text={"Dashboard"} /></Link>  
        </div>
        <div className='mobile-drawer'>
            <AnchorTemporaryDrawer/>
        </div>
    </div>
}

export default Header;