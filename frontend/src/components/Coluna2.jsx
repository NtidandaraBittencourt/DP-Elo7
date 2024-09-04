import React from 'react';

export default function Coluna2() {
  return (
    <div className="coluna2">
      <div className="lg:flex-row flex-col flex m-6 gap-6 ">
        <img src="src/assets/img2.svg" alt="Card Image" className=" h-auto"/>
        <div className='lg:text-left text-center'>
        <h2 className='font-semibold text-2xl'>Palavra da vendedora</h2>
        <p className='font-semibold text-custonYellow'>Sed rutrum condimentum</p>
        <p className='pt-6 font-normal text-custonTextColorBody'>
          Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed.
          Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit.
          Pellentesque finibus vel tortor sed hendrerit.
          Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam augue,
          in congue neque nulla vehicula purus.
        </p>
        </div>
      </div>
    </div>
  )
}
