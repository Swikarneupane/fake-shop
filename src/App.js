import "./App.css"
import { Routes, Route } from "react-router-dom"
import ProductListing from "./pages/ProductListing"
import ProductDetails from "./pages/ProductDetails"
import Header from "./pages/Header"
import AddProduct from "./pages/AddProduct"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
