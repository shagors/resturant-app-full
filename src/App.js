import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components';
import CreateContainer from './components/CreateContainer';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header></Header>

        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer></MainContainer>}></Route>
            <Route path='/createItem' element={<CreateContainer></CreateContainer>}></Route>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App;