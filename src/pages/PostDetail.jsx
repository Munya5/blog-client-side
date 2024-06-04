import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/avatar13.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to = {`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to = {`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is a post title</h1>
        <div className="post-detail__thumbnail">
          <img src = {Thumbnail} alt=''  />
        </div>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur delectus veritatis doloribus fugiat. Reprehenderit, optio harum? Repellat, sit accusamus? Deserunt est harum impedit quas provident consequuntur sunt at laudantium aperiam suscipit tenetur sapiente nihil odit totam unde maxime ab ea, illo aliquid debitis eos facere. Illum, aliquid ad aliquam voluptatibus quisquam consequatur quaerat perspiciatis!
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid accusamus deleniti laborum inventore optio quod similique ipsa tenetur doloribus dicta reiciendis unde nulla iure quasi recusandae, nemo voluptas amet mollitia sunt. Corrupti tenetur, voluptatibus assumenda nam expedita cupiditate tempora nihil id dicta nulla repellendus, quibusdam, beatae consequatur itaque quia. Pariatur adipisci illo ab necessitatibus perferendis consectetur numquam suscipit reiciendis nisi quos. Soluta molestiae, quaerat aspernatur, vitae ex consequatur tempora vel architecto laudantium labore sed? Et nostrum obcaecati nesciunt eius officiis quos fugiat maxime tempore eligendi? Consequuntur iste alias omnis ipsum iusto sequi vitae tempora, beatae placeat iure eaque exercitationem eum at, ipsam quisquam dolores possimus aliquid. Exercitationem officia dignissimos vitae!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores necessitatibus nisi, hic reprehenderit nam quidem ipsam dicta suscipit reiciendis tempora facilis aut, iste amet officiis tempore quis sit ut. Reprehenderit, placeat. Explicabo, exercitationem quae consectetur omnis perferendis itaque reiciendis delectus eius expedita! Quidem eaque nemo quis blanditiis explicabo voluptate nulla veniam similique nesciunt doloribus, iure voluptas eligendi ratione consectetur delectus id animi ad, provident deleniti ipsa, illum at temporibus ex. Qui voluptatum dolor magnam commodi et quaerat culpa. Quae odit cumque ea, sed beatae architecto nulla accusamus tenetur veritatis. Quia nam nobis incidunt facere officiis. Ex possimus quaerat repellendus omnis rem soluta quo eos, excepturi perspiciatis quam vel sequi dignissimos veritatis.
        </p>

      </div>

    </section>
  )
}

export default PostDetail
