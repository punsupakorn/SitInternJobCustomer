import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MAIN_ROUTE_PATH } from '../Constants/path'
import HomePage from './Home'
import ContactUsPage from './Contact'
import InformationPage from './Information'

function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN_ROUTE_PATH.HOME} element={<HomePage />}>
          <Route path={MAIN_ROUTE_PATH.CONTACT} element={<ContactUsPage />} />
          <Route path={MAIN_ROUTE_PATH.INFORMAION} element={<InformationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainPage