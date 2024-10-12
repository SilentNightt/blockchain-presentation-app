import React from 'react'
import Image from 'next/image'
import qrCode from '../assets/slide16_p.png'

function Slide16() {
  return (
    <div className='slide16'>
      <div className='content'>
        <h1 className='title'>Спасибо за внимание!</h1>
        <div className='qr-container'>
          <Image src={qrCode} alt='QR Code to Git Repository' />
        </div>
        <p className='subtitle'>Сканируйте QR-код, чтобы перейти в репозиторий</p>
      </div>
    </div>
  )
}

export default Slide16