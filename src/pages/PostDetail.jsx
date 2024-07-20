import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostAuthor from '../components/PostAuthor';
import DeletePost from './DeletePost';
import Loader from '../components/Loader';
import axios from 'axios';
import { UserContext } from '../context/userContext';

const PostDetail = () => {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(error);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error">Error fetching post: {error.message}</p>;
  }

  return (
    <section className="post-detail">
      {post && (
        <div className="container post-detail__container">
          <div className="post-detail__header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id === post.creator && (
              <div className="post-detail__buttons">
                <Link to={`/posts/${post?._id}/edit`} className="btn sm primary">
                  Edit
                </Link>
                <DeletePost postId={post._id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post-detail__thumbnail">
            <img
              src={`${process.env.REACT_APP_BASE_ASSETS_URL}/uploads/${post.thumbnail}`}
              alt="no display"
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
};

export default PostDetail;

