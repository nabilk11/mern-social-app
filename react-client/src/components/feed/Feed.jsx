import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from 'axios';
import { Posts } from '../../data/dummy_data';

export default function Feed() {
// state hook for posts
const [posts, setPosts] = useState([])

// useEffect for api call
useEffect(() => {
  const fetchPosts = async () => {
    const res = await axios.get("posts/timeline/6216109851f568608dd6d761")
    setPosts(res.data)
  }
  fetchPosts();
}, [])

  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share />
          {posts.map((p) => (
            <Post key={p.id} post={p}/>
          ))}
          
          
        </div>
        
    </div>
  )
}
