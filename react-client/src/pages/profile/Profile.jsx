import React, { useState, useEffect } from 'react';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css';
import axios from 'axios';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=nabil`)
      setUser(res.data)
    }
    fetchUser();
  }, [])


  return (
    <div>
        <Navbar />
        <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" 
            src={`${PF}post/8.jpeg`}
            alt="" />
            <img className="profileUserImg" 
            src={`${PF}drake_pf.jpeg`}
            alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
        <Feed username='nabil' />
        <Rightbar profile/>
        </div>
        </div>
        </div>
        
    </div>
  )
}
