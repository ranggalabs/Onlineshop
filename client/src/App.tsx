import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import SearchResults from './pages/SearchResults'
import FlashDeals from './pages/FlashDeals'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrders'
import OrderTracking from './pages/OrderTracking'
import Addreses from './pages/Addreses'


const App = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000, style: { background: '#1B3022', color: "#fff", borderRadius: "12px", fontSize: "14px" } }} />
      <Routes>
        {/* AUTH PAGES - NO NAVBAR/FOOTER*/}
        <Route path='/Login' element={<Login />}></Route>
        {/* MAIN PAGES - WITH NAVBAR/FOOTER */}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='products/:id' element={<ProductPage />}></Route>
          <Route path='search' element={<SearchResults />}></Route>
          <Route path='deals' element={<FlashDeals />}></Route>
          <Route>
            <Route path="checkout" element={< Checkout />}></Route>
            <Route path="orders" element={< MyOrders />}></Route>
            <Route path="orders/:id" element={< OrderTracking />}></Route>
            <Route path="Addresses" element={< Addreses />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App