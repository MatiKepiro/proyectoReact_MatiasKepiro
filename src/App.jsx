import './App.css'
import NavBar from './components/NavBar/NavBar'
import { categories } from './mock/mockData'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  const greeting = "Bienvenidos!"

  return (
    <>
      <NavBar categories = {categories} title = "Equis"/>
      <div className='App'>
        <ItemListContainer greeting={greeting} />
    </div>
    </>
  )
}

export default App
