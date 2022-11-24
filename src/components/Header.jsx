import React from 'react';
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();


  const login = async() => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
  }

  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop & tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
          <Link to={'/'} className='flex items-center gap-2'>
            <img className='w-8 object-cover' src={Logo} alt="logo" />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </Link>

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

            <div className='relative'>
              <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} alt="userprofile" className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl drop-shadow-xl cursor-pointer rounded-full' onClick={login} />
              <div className='flex flex-col w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0'>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd /></p>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">Logout <MdLogout /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className='flex md:hidden w-full  h-full'>

        </div>
    </header>
  )
}

export default Header;