import { MoreVert } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import './post.css';
import { Users } from '../../data/dummy_data';
import axios from 'axios';

export default function Post({ post }) {

    // state for likes
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
// public folder url
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser();
  }, [])

    // likeHandler 
    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' 
                    src={user.profilePicture || PF+"blank_pf.jpeg"} alt="" />
                    <span className="postUsername">
                        {user.username}
                    </span>
                    <span className="postDate">{post.date}</span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}ui/like.png`} alt="" onClick={likeHandler} />
                    <img className="likeIcon" src={`${PF}ui/heart.png`} alt="" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
