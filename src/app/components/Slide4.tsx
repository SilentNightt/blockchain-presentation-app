import React from 'react'
import Image from 'next/image'
import img4 from '../assets/slide4_p.png'

function Slide4() {
  return (
    <div className='slide4'>
      <h1 className='title'>Блокчейн это про безопасность</h1>
      <div className='slide4-container'>
        <span className='text-content'>
          {"Безопасность блокчейна — это комплексная система управления рисками для сети блокчейна. Она использует фреймворки кибербезопасности, службы обеспечения и лучшие практики для снижения рисков от атак и мошенничества."}
        </span>
        <Image className='picture' src={img4} alt='secury' />
      </div>
    </div>
  )
}

export default Slide4