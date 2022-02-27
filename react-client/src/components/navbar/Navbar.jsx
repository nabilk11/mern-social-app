import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Chat, Notifications, Person, Search } from '@material-ui/icons';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {

  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
            <Link to={`/profile/${user.username}`} >
            <img className='navbarImg' src={user.profilePicture ? PF+user.profilePicture : PF+"blank_pf.jpeg"} alt="" />
            </Link>
        </div>
    </div>
  )
}
