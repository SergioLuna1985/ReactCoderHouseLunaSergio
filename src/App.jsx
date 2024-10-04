import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter'
import './App.css'

function App() {


  return (
   <div>
      <NavBar />
      <ItemListContainer saludo={"Hola!!!"} />
      <ItemListContainer saludo={"Probando REACT"} />
      <ItemListContainer saludo={"Probando REACT"} />
      
      <Counter />

   </div>
  )
}

export default App
