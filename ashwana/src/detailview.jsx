import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailView = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(response => response.json())
     .then(data => setPost(data));
  }, [id]);

  return (
    <div>
      <h1>1</h1>
      <h2>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>
      <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
    </div>
  );
};

export default DetailView;