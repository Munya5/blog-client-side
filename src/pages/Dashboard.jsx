import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import DeletePost from '../pages/DeletePost'

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { id } = useParams();
  const token = currentUser?.token;

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/users/${id}`,
          { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
        );
        console.log({response})
        setPosts(response.data.posts);
      } catch (error) {
        console.log('Error fetching posts:', error);
        // Handle error gracefully (e.g., show error message)
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [id, token]);

  return (
    <section className="dashboard">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container dashboard__container">
          {posts.length ? (
            posts.map(post => (
              <article key={post.id} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={`${process.env.REACT_APP_BASE_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${post._id}`} className="btn sm">
                    View
                  </Link>
                  <Link to={`/posts/${post._id}/edit`} className="btn sm primary">
                    Edit
                  </Link>
                  <DeletePost postId = {post._id}/>
                </div>
              </article>
            ))
          ) : (
            <h2 className="center">You have no posts yet.</h2>
          )}
        </div>
      )}
    </section>
  );
};

export default Dashboard;

