import './navbar.css'
import { ThemeToggleContext } from './toggleTheme'
import { useContext } from 'react'

function NavBar() {

  const {theme,dispatch} = useContext(ThemeToggleContext)


  return (
    <nav>
    <div>
        <img src="https://i.pinimg.com/originals/41/ff/08/41ff08e482a4314896060bebbe40c46e.jpg" alt="ReqresAPI" />
        <h2>Reqres Api</h2>
    </div>

    <div>
        <p>set the theme</p>
        <input type="checkbox" id="inp" checked={theme === 'dark'} onChange={(e)=>dispatch(e.target.checked?'light':'dark')} />
        <label htmlFor="inp" className="toggle"></label>
    </div>
    </nav>
  )
}

export default NavBar