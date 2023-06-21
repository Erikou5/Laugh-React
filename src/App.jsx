import './app.css'
import { Header } from './componentes/header/header'
import { ProductContainer } from './componentes/productContainer/productContainer'

function App() {
  return (
    <>
    <Header/>
    <ProductContainer mensaje="Gracias por visitarnos!" />
    </>
  )
}

export default App
