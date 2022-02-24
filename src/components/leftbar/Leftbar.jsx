import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilled, RssFeed, School, WorkOutline } from '@material-ui/icons';
import React from 'react';
import './leftbar.css';

export default function Leftbar() {
  return (
    <div className='leftbar'>
        <div className="leftbarWrapper">
            <ul className="leftbarList">
                <li className="leftbarListItem">
                     <RssFeed className='leftbarIcon'/>
                     <span className="leftbarListItemText">Feed</span>
                </li>
                <li className="leftbarListItem">
                     <Chat className='leftbarIcon'/>
                     <span className="leftbarListItemText">Chat</span>
                </li>
                <li className="leftbarListItem">
                     <PlayCircleFilled className='leftbarIcon'/>
                     <span className="leftbarListItemText">Videos</span>
                </li>
                <li className="leftbarListItem">
                     <Bookmark className='leftbarIcon'/>
                     <span className="leftbarListItemText">Bookmarks</span>
                </li>
                <li className="leftbarListItem">
                     <Group className='leftbarIcon'/>
                     <span className="leftbarListItemText">Groups</span>
                </li>
                <li className="leftbarListItem">
                     <HelpOutline className='leftbarIcon'/>
                     <span className="leftbarListItemText">Questions</span>
                </li>
                <li className="leftbarListItem">
                     <WorkOutline className='leftbarIcon'/>
                     <span className="leftbarListItemText">Jobs</span>
                </li>
                <li className="leftbarListItem">
                     <Event className='leftbarIcon'/>
                     <span className="leftbarListItemText">Events</span>
                </li>
                <li className="leftbarListItem">
                     <School className='leftbarIcon'/>
                     <span className="leftbarListItemText">Courses</span>
                </li>
            </ul>
            <button className="leftbarButton">Show More</button>
            <hr className='leftbarHr'/>
            <ul className='leftbarFriendList'>
            <li className="leftbarFriend">
                    <img src="/assets/rihanna_pf.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Robin Fenty</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/bellah_pf.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Bella Hadid</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/lebron_pf.png" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Lebron James</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/iggyaz_pf.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Iggy Azalea</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/tonstark_pf.webp" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Tony Stark</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/samhar_pf.jpg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Sam Harris</span>
                </li>
                <li className="leftbarFriend">
                    <img src="/assets/pikachu_pf.jpeg" alt="" className="leftbarFriendImg" />
                    <span className="leftbarFriendName">Pikachu</span>
                </li>
            </ul>
        </div>
        
    </div>
  )
}
