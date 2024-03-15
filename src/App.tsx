import React from 'react'
import Login from './pages/login'
import Home from './pages/home'
import NotFind from './pages/not-find'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App : React.FC= () => {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
        <Route path="*" element={ <NotFind />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
