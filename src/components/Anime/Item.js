import React from 'react'

function Item({item,animeHandler}) {
    return (
        <li id={item.mal_id} onClick={()=>animeHandler(item)}> 
        <a>
        <div>
          <img src={item.image_url} />
          <p>{item.title}</p>
          </div>
          </a>
        </li>
    )
}

export default Item
