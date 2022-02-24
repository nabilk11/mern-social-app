import { MoreVert } from '@material-ui/icons';
import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/samhar_pf.jpg" alt="" />
                    <span className="postUsername">Sam Harris</span>
                    <span className="postDate">5 mins ago</span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey, whats up dawg?! Mindfulness Rocks!</span>
                <img className="postImg" src="/assets/meditation.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/ui/like.png" alt="" />
                    <img className="likeIcon" src="/assets/ui/heart.png" alt="" />
                    <span className="postLikeCounter">53 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">11 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
