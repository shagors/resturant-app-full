import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import I1 from '../img/i1.png';

const heropData = [
    {id : 1, name : 'IceCream', decp : 'Chocolate & Vanilla', price : '5.25', imgSrc : ''}
];

const HomeContainer = () => {
  return (
      <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
          <div className='flex-1 py-2 flex-col items-start justify-center gap-6'>
              <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                  <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                  <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                      <img className='w-full h-full object-contain' src={Delivery} alt="delivery" />
                  </div>
              </div>

              <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>

              <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos nisi sunt quis quod vero alias qui quas, odit, earum maxime, incidunt consequuntur. Reiciendis aperiam provident numquam hic culpa unde.</p>

              <button className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100' type='button'>Order Now</button>
          </div>
          <div className='py-2 flex-1 flex items-center relative'>
            <img className='h-420 w-full lg:w-auto lg:h-650 ml-auto' src={HeroBg} alt="hero-bg" />

            <div className='w-full h-full absolute flex items-center justify-center top-0 left-0 px-32 py-4'>
                <div className='w-190 bg-cardOverlay backdrop-blur-md rounded-3xl p-4 flex flex-col items-center justify-center'>
                    <img className='w-40 -mt-20' src={I1} alt="ice-cream" />
                    <p className='text-xl font-semibold text-textColor mt-4'>Ice cream</p>
                    <p className='text-sm text-lighttextGray font-semibold my-2'>Chocolate & Vanilla</p>
                    <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span> 5.25</p>
                </div>
            </div>
          </div>
      </section>
  )
}

export default HomeContainer;