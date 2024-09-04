import React from 'react'

function Coluna3() {
  return (
    <div className="coluna3 p-6">
			<div className=' '>
				<h2 className='font-semibold text-2xl text-center mb-6'>Conheça nosso time fora de série</h2>
				<div className='grid lg:grid-flow-col  grid-flow-row gap-6'>
					<img src="src/assets/img3.webp" alt="Card Image" className="w-[320] h-[183]"/>
					<img src="src/assets/img4.webp" alt="Card Image" className="w-[320] h-[183]"/>
					<img src="src/assets/img5.webp" alt="Card Image" className="w-[320] h-[183]"/>
					<img src="src/assets/img6.webp" alt="Card Image" className="w-[320] h-[183]"/>
				</div>
			</div>
		</div>
  )
}

export default Coluna3
