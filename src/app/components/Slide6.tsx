import React from 'react'
import Image from 'next/image'
import img from '../assets/slide6_p.png'
function Slide6() {
  return (
    <div className="slide6">
    <div className="slide6-container">
      <div className="text-content">
        <h1 className="title">Возможности блокчейн технологий</h1>
      </div>
      <div className='right-sight'>
        <div className="image-content">
          <Image className="picture-main" src={img} alt="Blockchain" />
        </div>
        <ul className='content'>
          <li>Неизменность данных</li>
          <li>Строгий набор правил</li>
          <li>Децентрализация</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Slide6