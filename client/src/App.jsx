import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Component/Layout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Store from './Pages/Store/Index';
import Products from './Pages/Products/Products'
import Not404 from './Pages/Not Define/Not404'
import SignUp from './Pages/Sign up/SignUp'
import SignIn from './Pages/Sign in/SignIn'
import { MainContextState } from './context/MainContextState'

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

function App() {
  return (
    <MainContextState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='/products/:_id' element={<Products />} />
            <Route index element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Not404 />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </MainContextState>
  )
}

export default App
