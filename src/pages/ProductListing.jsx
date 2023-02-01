// import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
// import { removeProduct } from "../redux/productSlice"
import "./ProductListing.css"

export default function ProductListing() {
  // const dispatch = useDispatch()
  const things = useSelector((store) => store.product.products)

  return (
    <>
      <h3 className="product-title">Products we currently have:</h3>
      <div className={`card-cover`}>
        {things?.map((item) => (
          <div className="card" key={item._id}>
            <h3 className="card-title">{item.title.toUpperCase()}</h3>
            <p className="card-desc">Price: $ {item.price}</p>
            {/* <button
              className="delete-btn"
              onClick={dispatch(removeProduct(item._id))}>
              Remove Item
            </button> */}
            {/* <button className="read-more">
            <Link
              to={`/products/${item._id}`}
              style={{ textDecoration: "none", color: "white" }}>
              Read More
            </Link>
          </button> */}
          </div>
        ))}
      </div>
    </>
  )
}
