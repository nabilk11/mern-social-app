import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './share.css';
import axios from 'axios';

export default function Share() {

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext)

    // share form ref, state, handler
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file", file);
            data.append("name", fileName);
            newPost.img = fileName;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err)
            }
        }
        try {
           await axios.post("/posts", newPost)
           // refresh window after adding post
           window.location.reload()
        } catch (err) {
           console.log(err) 
        }
    }

  return (
    <div className='share'>
    <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src={user.profilePicture ? PF+user.profilePicture : PF+"blank_pf.jpeg"} alt="" />
            <input ref={desc} placeholder={"What's on your mind "+user.username+"?"} name="" className='shareInput'  id="" />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler} >
            <div className="shareOptions">
                <label htmlFor='file' className="shareOption">
                    <PermMedia htmlColor="tomato" className='shareIcon'/>
                    <span className='shareOptionText'>Photo/Video</span>
                    <input style={{display:'none'}} type="file" id="file" 
                    accept='.png, .jpg, .jpeg' 
                    onChange={(e) => setFile(e.target.files[0])} />
                </label>
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
            <button className="shareButton" type='submit' >Share</button>
        </form>
    </div>
    </div>
  )
}
