import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide10_p.png'

function Slide10() {
  return (
    <div className='slide10'>
    <h1 className='title'>Единственный источник достоверных данных</h1>
    <div className='slide10-container'>
    <Image className='picture' src={img1} alt='picture' />
      <span className='text-content'> Блокчейн используется как единственный источник достоверных данных, поэтому все участники на любом этапе процесса могут удостовериться, что их работа синхронизирована и они все пользуются новейшей информацией.
      </span>
    </div>
  </div>
  )
}

export default Slide10