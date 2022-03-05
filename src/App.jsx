import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInScreen from 'features/Auth/screens/SignInScreen'
import SignUpScreen from 'features/Auth/screens/SignUpScreen'
import HomeScreen from 'features/Home/HomeScreen'
import Header from 'components/Header/Header'
import './App.css'
import Footer from 'components/Footer/Footer'
import AboutScreen from 'features/About/AboutScreen'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
