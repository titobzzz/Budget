import Budget from "./pages/budget"
import './App.css'
import Navbar from "./components/navbar"


function App() {

  return (

      <div className="app">
        <Budget/>
        <div> 
          <Navbar/>
        </div>        
      </div>

  )
}

export default App
