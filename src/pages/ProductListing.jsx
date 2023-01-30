import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../redux/actions"
import "./ProductListing.css"

export default function ProductListing() {
  const dispatch = useDispatch()
  const fetchObjects = async () => {
    const response = await axios.get("https://api.storerestapi.com/products")
    // console.log(response.data.data)
    dispatch(setProducts(response.data.data))
  }
  const things = useSelector((state) => state.products)
  // console.log(things)

  useEffect(() => {
    fetchObjects()
  },[])

  return (
    <div className={`card-cover`}>
      {things?.map((item) => (
        <div className="card" key={item._id}>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">$ {item.price}</p>
          <button className="read-more">
            <Link
              to={`/products/${item._id}`}
              style={{ textDecoration: "none", color: "white" }}
              >
              Read More
            </Link>
          </button>
        </div>
      ))}
    </div>
  )
}
