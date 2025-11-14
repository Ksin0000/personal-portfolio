import { NavLink, Outlet } from 'react-router-dom'
//import './App.css'

export default function App() {
  return (
    <>
      <header>
        <h1>Ksin Portfolio</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© {new Date().getFullYear()} Ksin</footer>
    </>
  )
}
