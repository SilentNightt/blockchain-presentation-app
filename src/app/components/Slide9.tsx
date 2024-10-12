import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide9_p.png'

function Slide9() {
  return (
    <div className="slide9">
    <div className="slide9-container">
    <div className="image-content">
        <Image className="picture-main" src={img1} alt="buti-picture" />
      </div>
      <div className="text-content">
        <h1 className="title">Проблемы в поставках продукции</h1>
        <ul className="content">
          <li>Отсутствие прозрачности</li>
          <li>Мошенничество и подделки</li>
          <li>Ошибки в документации</li>
          <li>Неэффективное взаимодействие</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Slide9