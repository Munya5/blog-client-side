import React from 'react'
import LoadingGif from '../images/loading.gif'

const Loader = () => {
  return (
    <div className='loader'>
      <div className="loader__image">

        <img src = {LoadingGif} alt='Loading...'/>
      </div>
    </div>
  )
}

export default Loader
