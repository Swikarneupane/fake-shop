import { useSelector, useDispatch } from "react-redux"
import { showProduct } from "../redux/productSlice"
import { useParams } from "react-router-dom"
import { useEffect, useRef } from "react"

export default function ProductDetails() {
  const url = useParams()
  const dispatch = useDispatch()
  let things = useRef({})

  useEffect(() => {
    things = dispatch(showProduct(url))
    console.log(things)
  })
  return (
    <div>
      {/* <div className={`inside-container`}>
        <h4 className="inside-title">{data.title.toUpperCase()}</h4>
        <p className="inside-desc">{data.slug}</p>
        <h6 className="emission-title">
          <span>{data.category.name}</span>
        </h6>
        <p>$ {data.price}</p>
      </div> */}
    </div>
  )
}
