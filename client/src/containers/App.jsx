/* eslint-disable no-unused-vars */

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header, NavBar } from "../components"
import { Home, About } from '../pages'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
