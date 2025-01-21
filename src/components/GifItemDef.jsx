import React from 'react'

export const GifItemDef = ({ title, url, id }) => {
  // console.log({ title, url, id });

  return (
    <div className="card">
      <img className="card-image" src={url} alt={title} />
      <p className='card-title'>{title}</p>
    </div>
  )
}
