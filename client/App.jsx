import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedPage from './auth/ProtectedPage';
import Layout from './pages/Layout.page';
import Home from './pages/Home.page'
import LoginPage from './pages/Login.page'
import { AuthProvider } from './auth/AuthProvider';
import Book from './container/Book';

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<ProtectedPage><Book /></ProtectedPage>}>
            <Route path='/home' element={<Home />} />
            <Route path='/book' element={<Book />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
