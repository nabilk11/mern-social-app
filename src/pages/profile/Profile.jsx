import React from 'react';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';

import './profile.css';

export default function Profile() {
  return (
    <div>
        <Navbar />
        <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" 
            src="/assets/post/8.jpeg" 
            alt="" />
            <img className="profileUserImg" 
            src="/assets/drake_pf.jpeg" 
            alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Nabil Khan</h4>
              <span className="profileInfoDesc">The one and only Mr. N Khan...</span>
            </div>
          </div>
          <div className="profileRightBottom">
        <Feed />
        <Rightbar />
        </div>
        </div>
        </div>
        
    </div>
  )
}
