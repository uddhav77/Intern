import React from 'react'

const Menucards = ({image, description, suggestion, plus, price}) => {
  return (
    <div >
       <div className="card">
        
        <div className="contA">
            <div className="img">
                <img src= {image} alt="image" />
            </div>

        </div>

        <div className="contB">
            <div className="description">
                <h4>{description}</h4>
            </div>
            <div className="suggestion">
                {suggestion}
            </div>
        </div>

        <div className="contC">
            <div className="plus">
                {plus}
            </div>
            <div className="price">
                {price}
            </div>
        </div>

      </div>

    </div>
  )
}

export default Menucards
