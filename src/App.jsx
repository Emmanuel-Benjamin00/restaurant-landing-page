import Topbar1 from "./components/HomeComponents/Topbar1"
import Hero1 from "./components/HomeComponents/Hero1"
import Deliiver30min from "./components/HomeComponents/Deliiver30min"
import HowitWork1 from "./components/HomeComponents/HowitWork1"
import SearchFood from "./components/HomeComponents/SearchFood"
import BestDeals from "./components/HomeComponents/BestDeals"
import Popularitems from "./components/HomeComponents/Popularitems"
import Footer from "./components/HomeComponents/Footer"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import LoginPage from "./components/LoginComponents/LoginPage"
import FindFood from "./components/FindFoodComponents/FindFood"
import Checkout from "./components/CheckoutFolder/Checkout"
import Signup from "./components/LoginComponents/Signup"
import Payment from "./components/PaymentFolder/Payment"
import FoodCreate from "./components/Admin Components/FoodCreate"
import FoodEdit from "./components/Admin Components/FoodEdit"
import AllFood from "./components/Admin Components/Allfood"
import ForgetPassword from "./components/Password Reset Components/ForgetPassword"
import ResetPassword from "./components/Password Reset Components/ResetPassword"
import OrderPlaced from "./components/Order Placed Components/OrderPlaced"
import OrderStatus from "./components/Order Placed Components/OrderStatus"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Topbar1 data={true} />
            <Hero1 />
            <Deliiver30min />
            <HowitWork1 />
            <SearchFood />
            <BestDeals />
            <Popularitems />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <LoginPage />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Signup />
          </>
        } />
        <Route path="/findfood" element={
          <>
            <Topbar1 data={true} />
            <FindFood />
          </>
        } />
        <Route path="/checkout" element={
          <>
            <Topbar1 data={true} />
            <Checkout />
          </>
        } />
        <Route path="/payment" element={
          <>
            <Topbar1 data={true} />
            <Payment />
          </>
        } />
        <Route path="/admin/createfood" element={
          <>
            <Topbar1 data={true} />
            <FoodCreate />
          </>
        } />
        <Route path="/admin/editfood/:id" element={
          <>
            <Topbar1 data={true} />
            <FoodEdit />
          </>
        } />
        <Route path="/admin/allfood" element={
          <>
            <Topbar1 data={true} />
            <AllFood />
          </>
        } />
        <Route path="/forgotpassword" element={
          <>
            <ForgetPassword />
          </>
        } />
        <Route path='/reset-link' element={
          <>
            <ResetPassword />
          </>
        } />
        <Route path='/order-placed' element={
          <>
            <Topbar1 data={true} />
            <OrderPlaced />
          </>
        } />
        <Route path='/admin/order-status' element={
          <>
            <Topbar1 data={true} />
            <OrderStatus />
          </>
        } />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
