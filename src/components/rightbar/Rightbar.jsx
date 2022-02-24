import React from 'react';
import './rightbar.css';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/ui/bday.png" alt="" />
          <span className="birthdayText">
            <b>Afsana Miji</b> and <b> 2 other friends</b> have a birthday today!
          </span>
        </div>
        <img className="rightbarAd"src="/assets/ui/delta_ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/lebron_pf.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Lebron James</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/lebron_pf.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Lebron James</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/lebron_pf.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Lebron James</span>
        </li>
      </ul>
      </div>        
  </div>
  )
}
