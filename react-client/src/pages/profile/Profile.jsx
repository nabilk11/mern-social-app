import React, { useState, useEffect } from 'react';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css';
import axios from 'axios';
import { useParams } from 'react-router';


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
// useParams gives the key/value from the current url
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser();
  }, [username])


  return (
    <div>
        <Navbar />
        <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" 
            src={user.coverPicture || `${PF}post/8.jpeg`}
            alt="" />
            <img className="profileUserImg" 
            src={user.profilePicture ? PF+user.profilePicture : PF+"blank_pf.jpeg"}
            alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
        <Feed username={username} />
        <Rightbar user={user} />
        </div>
        </div>
        </div>
        
    </div>
  )
}
