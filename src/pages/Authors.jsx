import React, { useState } from 'react'


import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'
import { Link } from 'react-router-dom'




const authorsData = [
  {id:1, avatar:Avatar1, name:'Katlin Page', posts:5 },
  {id:1, avatar:Avatar2, name:'Alvin Kate', posts:9 },
  {id:1, avatar:Avatar3, name:'Mike Soft', posts:0 },
  {id:1, avatar:Avatar4, name:'Isaac King', posts:5 },
  {id:1, avatar:Avatar5, name:'Jammie Hokker', posts:1 },
]




const Authors = () => {
  const[authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to = {`/posts/users/${id}`} className='author' >
              <div className="author__avatar">
                <img src={avatar} alt={`Imag of ${name}`} />

              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>

            </Link>

          } )
        }

      </div>: <h2 className='center' >No Users/Authors Found</h2>}
    </section>
  )
}

export default Authors
