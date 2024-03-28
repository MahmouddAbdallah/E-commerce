import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react'
import { MainContextState } from './context/MainContextState'
const Layout = lazy(() => import("./Component/Layout"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Store = lazy(() => import('./Pages/Store/Index'));
const Products = lazy(() => import('./Pages/Products/Products'));
const Not404 = lazy(() => import('./Pages/Not Define/Not404'));
const SignUp = lazy(() => import('./Pages/Sign up/SignUp'));
const SignIn = lazy(() => import('./Pages/Sign in/SignIn'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Search = lazy(() => import('./Pages/Search/Search'));

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContextState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path='/products/:_id' element={<Products />} />
              <Route index element={<Home />} />
              <Route path='/store' element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Not404 />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </MainContextState>
    </Suspense>
  )
}

export default App
