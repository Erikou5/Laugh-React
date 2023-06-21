import './app.css'
import { Header } from './componentes/header/header'
import { Nosotros } from './componentes/nosotros/nosotros'
import { ProductContainer } from './componentes/productContainer/productContainer'
import { ItemDetailContainer } from './componentes/itemDetailContainer/itemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
      <Header/>

      <Routes>

        <Route path='/' element = {<ProductContainer/>} />
        <Route path='/productos/:categoriaId' element = {<ProductContainer/>} />
        <Route path='/detail/:itemId' element = {<ItemDetailContainer/>}/>
        <Route path='/nosotros' element = {<Nosotros/>}/>
        <Route path = "*" element = {<Navigate to ="/" />}/>

        </Routes>
        <hr />
        <p>Gracias por visitarnos!</p>
      </BrowserRouter>
  )
}

export default App
