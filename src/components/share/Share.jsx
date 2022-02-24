import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import React from 'react';
import './share.css';

export default function Share() {
  return (
    <div className='share'>
    <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="/assets/drake_pf.jpeg" alt="" />
            <input placeholder="What's on Your Mind?..." name="" className='shareInput'  id="" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className='shareIcon'/>
                    <span className='shareOptionText'>Photo/Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="green" className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="blue" className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="gold" className='shareIcon'/>
                    <span className='shareOptionText'>Feels</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
    </div>
    </div>
  )
}
