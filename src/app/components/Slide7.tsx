import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide7_p.png'
import img2 from '../assets/slide7_p2.png'


function Slide7() {
  return (
    <div className='slide7'>
      <h1 className='title'>Как работает?</h1>
      <div className='slide7-container'>
          <Image className='picture1' src={img1} alt='how it work' />
          <Image className='picture2' src={img2} alt='how it work in net' />
      </div>
    </div>
  )
}

export default Slide7