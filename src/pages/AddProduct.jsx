import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/productSlice"
import { nanoid } from "nanoid"
import "./AddProduct.css"

export default function Header() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const dispatch = useDispatch()

  function submitHandler() {
    const _id = nanoid()
    dispatch(addProduct({ _id, title, price }))
    console.log(title)
    console.log(price)
    setTitle("")
    setPrice("")
  }

  return (
    <div>
      {/* <h3 className="add-product-title">//This is not complete.</h3> */}
      <h3 className="add-product-title">Add your product here.</h3>
      <div className="add-product-desc">
        <input
          placeholder="Enter your product name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          placeholder="Enter your product price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button className="submit-btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  )
}
