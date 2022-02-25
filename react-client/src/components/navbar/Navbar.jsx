import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Chat, Notifications, Person, Search } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='navbarContainer'>
        <div className="navbarLeft">
          <Link to={"/"} style={{textDecoration: 'none'}} >
            <span className="logo">nabBook.</span>
            </Link>
        </div>
        <div className="navbarCenter">
            <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search...' className="searchInput" />
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
              <Link to={"/"} style={{textDecoration: 'none', color: 'white'}} >
                <span className="navbarLink">Home</span>
              </Link>
                <span className="navbarLink">Timeline</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                  <Person />
                  <span className="navbarIconBadge">1</span> 
                </div>
                <div className="navbarIconItem">
                  <Chat />
                  <span className="navbarIconBadge">2</span> 
                </div>
                <div className="navbarIconItem">
                  <Notifications />
                  <span className="navbarIconBadge">1</span> 
                </div>
            </div>
            <img className='navbarImg' src="/assets/rihanna_pf.jpeg" alt="" />
        </div>
    </div>
  )
}
