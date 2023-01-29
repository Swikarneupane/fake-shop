import { useState } from "react"
import { useDispatch } from "react-redux"
import { setProducts } from "../redux/actions"

export default function Header() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const dispatch = useDispatch()

  function submitHandler() {
    dispatch(setProducts({ title, price, category }))
    console.log(title)
    console.log(price)
    console.log(category)
    setTitle("")
    setPrice("")
    setCategory("")
  }

  return (
    <div>
      Add your product!
      <input
        placeholder="Enter your product name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Enter your product price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Enter your product category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="submit-btn" onClick={submitHandler}>
        Submit
      </button>
    </div>
  )
}
