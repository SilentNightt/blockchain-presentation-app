import React from 'react'
import Image from 'next/image'
import img from '../assets/slide15_p.png'

function Slide15() {
  return (
    <div className="slide15">
    <div className="slide15-container">
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

export default Slide15