
import { Link, Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/servies">Servies</Link>
    </nav>

    <Outlet/>
    </>
  )
}

export default Template