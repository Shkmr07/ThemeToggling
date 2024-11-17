import { ToggleTheme } from './components/toggleTheme'
import NavBar from './components/NavBar'
import Content from './components/Content'
import './App.css'

function App() {


  return (
    <ToggleTheme>
      <NavBar />
      <Content />
    </ToggleTheme>
  )
}

export default App
