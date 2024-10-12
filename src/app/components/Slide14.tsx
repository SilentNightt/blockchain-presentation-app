import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide14_p.png'

function Slide14() {
  return (
    <div className='slide14'>
    <h1 className='title'>Tyson Foods vs IMB Food Trust</h1>
    <div className='slide14-container'>
        <Image className='picture1' src={img1} alt='statistic' />
    </div>
  </div>
  )
}

export default Slide14