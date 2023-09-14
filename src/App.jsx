import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Detail from './pages/MovieDetail/Detail'
import Search from './pages/Search/Search'

function App() {
 

  return (
    <>
          <div>
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/detail/:id' element={<Detail/>} />
              <Route path='/search/:slug' element={<Search/>} />
            </Routes>
          </div>
    </>
  )
}

export default App
