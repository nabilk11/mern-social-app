import React from 'react'
import './closeFriends.css';

export default function CloseFriends({ user }) {
  return (
    <li className="leftbarFriend">
        <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
        <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}
