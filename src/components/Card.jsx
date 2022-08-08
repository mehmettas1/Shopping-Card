import React from 'react'
import '../styles/cart.css'
const Card = ({item}) => {
    const{id,title,img,price,author} = item;
  return (
    <div className='card'>
        <div className="image_box">
            <img src={img} alt="img" />
        </div>
        <div className="details">
             <p>{id}</p>
            <p>{title}</p>
            <p>{author}</p>
            <p>{price}</p>
           
            <button>Add to Card</button>
        </div>

    </div>
  )
}

export default Card