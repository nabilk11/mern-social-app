import React from 'react';
import './rightbar.css';
import { Users } from '../../data/dummy_data';
import OnlineFriends from '../onlineFriends/OnlineFriends';

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
        {Users.map((u) => (
          <OnlineFriends user={u} key={u.id}/>
        ))}
      </ul>
      </div>        
  </div>
  )
}
