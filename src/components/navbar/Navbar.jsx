import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";

import './Navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>HeartBusters</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <AppsOutlinedIcon />
        <div className="search">
            <SearchOutlinedIcon />
            <input placeholder="Search..." type="text"/>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <MailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
             <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="guy"/>
            <span>John doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
