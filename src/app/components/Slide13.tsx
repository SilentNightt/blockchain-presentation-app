import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide13_p.png'
import img2 from '../assets/slide13_p2.png'
import img3 from '../assets/slide13_p3.png'
import img4 from '../assets/slide13_p4.png'

function Slide13() {
  return (
    <div className='slide13'>
      <div className='slide13-conteiner'>
        <Image src={img1} alt='nestle' />
        <Image src={img2} alt='iFoodDS' />
        <Image src={img3} alt='Walmart' />
        <Image src={img4} alt='Maerks' />
      </div>
    </div>
  )
}

export default Slide13