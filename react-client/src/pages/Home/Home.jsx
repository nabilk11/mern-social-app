import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css';

export default function Home() {
  return (
    <div>
        <Navbar />
        <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />

        </div>
        
    </div>
  )
}
