import HeaderBar from './components/HeaderBar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from './components/BlogDetail'
import './App.css'

function App() {

  return (
    <>
      <HeaderBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
