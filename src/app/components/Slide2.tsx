import React from 'react'
import Image from 'next/image'
import s2_p from '../assets/slide2_p.png'

function Slide2() {
  return (
    <div className="slide2">
    <div className="slide2-container">
      <div className="text-content">
        <h1 className="title">Что такое технология блокчейн?</h1>
        <ul className="content">
          <li>Блокчейн — это усовершенствованный механизм базы данных, который позволяет организовать открытый обмен информацией в рамках бизнес-сети (Amazon).</li>
          <li>Блокчейн — это распределенная база данных или реестр, совместно используемый узлами компьютерной сети (IBM).</li>
        </ul>
        <video width="320" height="240" controls autoPlay preload="none">
          <source src="/video/Blockchain_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
         </video>
      </div>
      <div className="image-content">
        <Image className="picture-main" src={s2_p} alt="Blockchain" />
      </div>
    </div>
  </div>
  )
}

export default Slide2