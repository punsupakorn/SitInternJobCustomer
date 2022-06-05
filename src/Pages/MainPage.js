import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MAIN_ROUTE_PATH } from '../Constants/path'
import HomePage from '../Pages/Home'

function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN_ROUTE_PATH.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainPage