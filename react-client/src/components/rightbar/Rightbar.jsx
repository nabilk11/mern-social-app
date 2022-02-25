import React from 'react';
import './rightbar.css';
import { Users } from '../../data/dummy_data';
import OnlineFriends from '../onlineFriends/OnlineFriends';

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}ui/bday.png`} alt="" />
          <span className="birthdayText">
            <b>Afsana Miji</b> and <b> 2 other friends</b> have a birthday today!
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}ui/delta_ad.png`} alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <OnlineFriends user={u} key={u.id}/>
        ))}
      </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York City</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">New York City</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship Status:</span>
          <span className="rightbarInfoValue">In a Relationship</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src={`${PF}bellah_pf.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Bella Hadid</span>
      </div>
      <div className="rightbarFollowing">
        <img src={`${PF}lebron_pf.png`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Lebron James</span>
      </div>
      <div className="rightbarFollowing">
        <img src={`${PF}samhar_pf.jpg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Sam Harris</span>
      </div>
      <div className="rightbarFollowing">
        <img src={`${PF}tonstark_pf.webp`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Tony Stark</span>
      </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>        
  </div>
  )
}
