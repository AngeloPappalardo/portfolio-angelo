import React from 'react'

const Progetti = ({ url, nome, img, classes}) => {
  return (
    <div className={`slide review ${classes}`}>
            <a href={url} className="button">
              {nome}
            </a>
            <a href={url}>
              <img src={img} alt={nome} className="img-portfolio" />
            </a>
          </div>
  )
}

export default Progetti

