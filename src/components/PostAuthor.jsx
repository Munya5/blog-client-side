import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

import axios from 'axios';

// Add locales to TimeAgo
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const PostAuthor = ({ authorID, createdAt }) => {
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`);
        setAuthor(response?.data);
      } catch (error) {
        setError(error.message || 'Error fetching author');
      } finally {
        setLoading(false);
      }
    };

    if (authorID) {
      getAuthor();
    }
  }, [authorID]);

  if (loading) {
    return <div>Loading author...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Link to={`/posts/users/${authorID}`} className="post__author">
      <div className="post__author-avatar">
        <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${author?.avatar}`} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: {author?.name}</h5>
        <small><ReactTimeAgo date={new Date(createdAt)} locale="en-US" /></small>
      </div>
    </Link>
  );
};

export default PostAuthor;


