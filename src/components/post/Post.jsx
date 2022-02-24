import { MoreVert } from '@material-ui/icons';
import React from 'react';
import './post.css';
import { Users } from '../../data/dummy_data';

export default function Post({ post }) {

    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' 
                    src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/ui/like.png" alt="" />
                    <img className="likeIcon" src="/assets/ui/heart.png" alt="" />
                    <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
