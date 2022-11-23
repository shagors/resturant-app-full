import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components';
import CreateContainer from './components/CreateContainer';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header></Header>

        <main className='mt-24 p-8 w-full'>
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