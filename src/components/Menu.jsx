import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Custom-react-input
      </NavLink>
      <NavLink to="about">Custom-another-page</NavLink>
    </nav>
  )
}

export default Menu
