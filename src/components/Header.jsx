import React from 'react';
import Logo from './img/logo.png'
import Avatar from './img/avatar.png'
import { MdShoppingBasket } from 'react-icons/md'

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop & tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img className='w-8 object-cover' src={Logo} alt="logo" />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </div>

          <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </ul>

            <div className='relative flex items-center justify-center'>
              <MdShoppingBasket className='text-textColor text-text-2xl cursor-pointer' />
              <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg'>
                <p className='text-xs text-white font-semibold flex items-center justify-center'>2</p>
              </div>
            </div>

            <img src={Avatar} alt="userprofile" className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl drop-shadow-xl' />
          </div>
        </div>

        {/* Mobile */}
        <div className='flex md:hidden w-full  h-full'>

        </div>
    </header>
  )
}

export default Header;