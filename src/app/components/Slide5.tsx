import React from 'react'
import Image from 'next/image'
import img from '../assets/slide5_p.png'

function Slide5() {
  return (
    <div className="slide5">
    <div className="slide5-container">
      <div className="text-content">
        <h1 className="title">Чем хороша технология блокчейн?</h1>
      </div>
      <div className="image-content">
        <Image className="picture-main" src={img} alt="Blockchain" />
      </div>
    </div>
  </div>
  )
}

export default Slide5