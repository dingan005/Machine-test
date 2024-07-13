import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/detail/${post.id}`}>
              <button>Show More</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listview;