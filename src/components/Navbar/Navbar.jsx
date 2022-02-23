import React from 'react';
import './navbar.css';
import { Chat, Notifications, Person, Search } from '@material-ui/icons'

export default function Navbar() {
  return (
    <div className='navbarContainer'>
        <div className="navbarLeft">
            <span className="logo">nabBook</span>
        </div>
        <div className="navbarCenter">
            <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search...' className="searchInput" />
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
                <span className="navbarLink">Home</span>
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
