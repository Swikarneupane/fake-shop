import "./App.css"
import { Routes, Route } from "react-router-dom"
import ProductListing from "./pages/ProductListing"
import ProductDetails from "./pages/ProductDetails"
import Header from "./pages/Header"
import AddProduct from "./pages/AddProduct"
import { getProducts } from "./redux/productSlice"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const { isLoading } = useSelector((store) => store.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, []) //for some reasons the page use rendering over and over

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/addproduct" element={<AddProduct />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      </Routes>
    </div>
  )
}

export default App
