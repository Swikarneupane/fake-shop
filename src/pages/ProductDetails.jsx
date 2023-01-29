import { useLocation } from "react-router-dom"

export default function ProductDetails() {
  const location = useLocation()
  const data = location.state
  return (
    <div>
      <div className={`inside-container`}>
        <h4 className="inside-title">{data.title.toUpperCase()}</h4>
        <p className="inside-desc">{data.slug}</p>
        <h6 className="emission-title">
          <span>{data.category.name}</span>
        </h6>
        <p>$ {data.price}</p>
      </div>
    </div>
  )
}
