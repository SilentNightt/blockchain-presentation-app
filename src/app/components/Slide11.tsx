import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide11_p.png'

function Slide11() {
  return (
    <div className="slide11">
    <div className="slide11-container">
      <div className="text-content">
        <h1 className="title">Постоянное отслеживание</h1>
        <div className="content">
        Реестры блокчейна являются постоянными и неизменными, поэтому, если при управлении цепочкой поставок в ней возникает какой-то сбой, его легко проследить до начальной точки.
        </div>
      </div>
      <div className="image-content">
        <Image className="picture-main" src={img1} alt="Blockchain" />
      </div>
    </div>
  </div>
  )
}

export default Slide11