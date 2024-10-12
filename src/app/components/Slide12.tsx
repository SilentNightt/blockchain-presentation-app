import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide12_p.png'

function Slide12() {
  return (
    <div className="slide12">
    <div className="slide12-container">
    <div className="image-content">
        <Image className="picture-main" src={img1} alt="buti-picture" />
      </div>
      <div className="text-content">
        <h1 className="title">Быстрое обновление</h1>
        <span className="content">
          Чем меньше ошибок возникает при обновлении, тем быстрее оно выполняется и тем больше экономит компания.
        </span>
      </div>
    </div>
  </div>
  )
}

export default Slide12