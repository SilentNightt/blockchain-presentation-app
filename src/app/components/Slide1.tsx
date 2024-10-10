import React from 'react'
import Image from 'next/image'
import main from '../assets/main.png'

function Slide1() {
  return (
    <div className='slide1'>
      <div className="slide1-container">
        <div className="text-content">
          <h1 className="title">Применение технологии блокчейн в цепочках поставок продукции</h1>
          <p className="author">Степанов В.Б ИУ3-32М</p>
        </div>
        <div className="image-content">
          <img className="picture-main" src={main.src} alt="Blockchain in Supply Chains" />
        </div>
      </div>
    </div>
  )
}

export default Slide1