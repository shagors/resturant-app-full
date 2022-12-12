import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag, data }) => {
    console.log(data);
  return (
      <div className={`w-full my-12 flex items-center gap-3 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden flex-wrap'}`}>
          {data && data.map(item => (
              <div key={item.id} className='w-300 min-w-[300px]: md:w-340 md:min-w-[340px] h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-xl'>
                  <div className='w-full flex items-center justify-between'>
                      <motion.img whileHover={{ scale: 1.2 }} src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-4338d.appspot.com/o/Images%2F1670821941621-f8.png?alt=media&token=d0379d84-ad23-4680-a3ee-07e2bb8e055c"
                          alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                      <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                          <MdShoppingBasket className='text-white' />
                      </motion.div>
                  </div>

                  <div className='w-full flex flex-col items-end justify-end'>
                      <p className='text-textColor font-semibold text-base md:text-lg'>Chocolate & Vanilla</p>
                      <p className='mt-1 text-sm text-gray-500'>45 calories</p>
                      <div className='flex items-center gap-8'>
                          <p className='text-lg'>
                              <span className='text-sm text-red-500'>$</span>5.25
                          </p>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default RowContainer;