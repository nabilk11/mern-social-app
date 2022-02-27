import { MoreVert } from '@material-ui/icons';
import React, { useState, useEffect, useContext } from 'react';
import './post.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { format } from 'timeago.js'
import { Link } from 'react-router-dom';

export default function Post({ post }) {

    // state for likes
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
// public folder url
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
// calling user as currentUser because user is already declared
const {user:currentUser} = useContext(AuthContext)

// check to see if likeArray includes currentuser's id/"like"
useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id, post.likes])

useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUser();
  }, [post.userId])

    // likeHandler 
    const likeHandler = () => {
        try {
         axios.put("/posts/"+post._id+"/like", { userId: currentUser._id })   
        } catch (err) {
            
        }
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`} >
                    <img className='postProfileImg' 
                    src={user.profilePicture ? PF+user.profilePicture : PF+"blank_pf.jpeg"} alt="" />
                    </Link>
                    <Link to={`/profile/${user.username}`} style={{textDecoration: 'none', color: 'black' }}>
                    <span className="postUsername">
                        {user.username}
                    </span>
                    </Link>
                    <span className="postDate">{format(post.createdAt)}</span>

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
