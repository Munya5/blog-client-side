import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import axios from 'axios';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const CategoryPosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { category } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
              const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`); 
              console.log({response}) 
              setPosts(response?.data ?? []);
            } catch (err) {
              setError(err.message || 'Error fetching posts');
            } finally {
              setIsLoading(false);
            }
        };

        fetchPosts();
    }, [category]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="posts">
            {posts.length > 0 ? (
                <div className="container posts__container">
                    {posts.map(({ _id: id, thumbnail, category, title, createdAt, description, creator }) => (
                        <PostItem
                            key={id}
                            postID={id}
                            thumbnail={thumbnail}
                            category={category}
                            title={title}
                            description={description}
                            authorID={creator}
                            createdAt={createdAt}
                        />
                    ))}
                </div>
            ) : (
                <h2 className='center'>No Posts Found</h2>
            )}
        </section>
    );
};


export default CategoryPosts
