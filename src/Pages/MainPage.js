import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MAIN_ROUTE_PATH } from '../Constants/path'
import HomePage from './Home'
import ContactUsPage from './Contact'
import InformationPage from './Information'
import StudentPage from './Student'
import StudentDetail from './Student/Detail'
import CompanyPage from './Company'

function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN_ROUTE_PATH.HOME} element={<HomePage />}>
          <Route path={MAIN_ROUTE_PATH.HOME} element={<Navigate to={MAIN_ROUTE_PATH.INFORMAION} />} />
          <Route path={MAIN_ROUTE_PATH.CONTACT} element={<ContactUsPage />} />
          <Route path={MAIN_ROUTE_PATH.INFORMAION} element={<InformationPage />} />
          <Route path={MAIN_ROUTE_PATH.STUDENT} element={<StudentPage />} />
          <Route path={MAIN_ROUTE_PATH.STUDENT_DETAIL} element={<StudentDetail />} />
          <Route path={MAIN_ROUTE_PATH.COMPANY} element={<CompanyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainPage