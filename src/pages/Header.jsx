import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <div className="welcome-text">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Welcome to Fake Shop
        </Link>
      </div>
      <Link to="/addproduct">
        <button className="add-btn">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15">
            <path d="M7.5 1v13M1 7.5h13" stroke="currentColor"></path>
          </svg>{" "}
          Add your product
        </button>
      </Link>
    </div>
  )
}
