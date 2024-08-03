import './App.css'
import FoodItems from './components/FoodItems'
import FoodMenu from './components/FoodMenu'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <Navbar title={"KHWARAKA"}/>
     <Header/>
     <FoodItems/>
     <FoodMenu/>
    </>
  )
}

export default App
