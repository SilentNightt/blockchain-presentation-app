import React from 'react'
import Image from 'next/image'
import img1 from '../assets/slide3_p.png'
import img2 from '../assets/slide3_p2.png'

function Slide3() {
  return (
    <div className='slide3'>
      <div className='slide3-container'>
        <div className='text-content'>
            <h1 className='title'>Связь криптовалюты и блокчейн</h1>
            <ul className='content'>
              <li>Криптовалюта (ICO) – это цифровая платежная система, при проверке транзакций в которой не участвуют банки.</li>
            </ul>
            <span className='text-main'>Биткойн создан в 2009 году и до сих пор является самой популярной криптовалютой в мире.</span>
            <span className='text-main'>Блокчейн-платформа Ethereum была разработана в 2015 году. Она имеет собственную криптовалюту Ether (ETH) или Ethereum</span>
        </div>
        <div className='image-content'>
          <Image className='picture1' src={img1} alt='Ethirium'/>
          <Image className='picture2' src={img2} alt='Bitcoin'/>
        </div>
      </div>
    </div>
  )
}

export default Slide3