import React from 'react'
import { useState } from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'


const DUMMY_POSTS = [
    {
        id: '1' ,
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is a title of the very 1st post n this blog',
        description: 'Lorem ipsum dolor sit amet. Id nobis enim est reprehenderit sequi quo tempore suscipit ab quibusdam mollitia. Et rerum esse eum distinctio culpa ex officiis laboriosam ut veritatis minus eum laboriosam rerum id quidem reprehenderit et possimus excepturi?',
        authorID: 3 ,

    },


    {
        id: '2' ,
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is a title of the very 2nd post n this blog',
        description: 'Lorem ipsum dolor sit amet. Id nobis enim est reprehenderit sequi quo tempore suscipit ab quibusdam mollitia. Et rerum esse eum distinctio culpa ex officiis laboriosam ut veritatis minus eum laboriosam rerum id quidem reprehenderit et possimus excepturi?',
        authorID: 1 ,
        
    },


    {
        id: '3' ,
        thumbnail: Thumbnail3,
        category: 'farming',
        title: 'This is a title of the very 3rd post n this blog',
        description: 'Lorem ipsum dolor sit amet. Id nobis enim est reprehenderit sequi quo tempore suscipit ab quibusdam mollitia. Et rerum esse eum distinctio culpa ex officiis laboriosam ut veritatis minus eum laboriosam rerum id quidem reprehenderit et possimus excepturi?',
        authorID: 11,
        
    },

    {
        id: '4' ,
        thumbnail: Thumbnail4,
        category: 'weather',
        title: 'This is a title of the very 4th post n this blog',
        description: 'Lorem ipsum dolor sit amet. Id nobis enim est reprehenderit sequi quo tempore suscipit ab quibusdam mollitia. Et rerum esse eum distinctio culpa ex officiis laboriosam ut veritatis minus eum laboriosam rerum id quidem reprehenderit et possimus excepturi?',
        authorID: 3 ,
        
    },


]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return(
        <section className="posts">
            <div className="container posts__container">
                 {
                     posts.map(({id, thumbnail, category, title, description, authorID}) => 
                     <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} />)
                 }
            </div>

        </section>
    )
}

export default Posts