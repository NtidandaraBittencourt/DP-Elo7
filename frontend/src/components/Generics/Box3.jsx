import React from 'react';

function Box3() {
  return (
    <div className="h-[424px] md:h-[360px] sm:py-10 py-8 px-12 gap-6 flex flex-col justify-center items-center">
      <div className='text-3xl font-semibold text-wrap'>Conheça nosso time fora da série</div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <img src='src/assets/img3.svg' className="sm:h-[183px] sm:w-[328px]" />
        <img src='src/assets/img4.svg' className="sm:h-[183px] sm:w-[328px]"/>
        <img src='src/assets/img5.svg' className="sm:h-[183px] sm:w-[328px]"/>
        <img src='src/assets/img6.svg' className="sm:h-[183px] sm:w-[328px]"/>
      </div>
    </div>
  );
}

export default Box3;
