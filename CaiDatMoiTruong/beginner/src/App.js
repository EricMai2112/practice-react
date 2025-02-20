import logo from './logo.svg'
import './App.css'
import Lock from './Lock'
import BareInput from './BareInput'
import Layout from './Layout'
import BareButton from './BareButton'
import LoginControl from './LoginControl'
import CorrectlyState from './CorrectlyState'
import ProductList from './ProductList/ProductList'
import Form from './Form/Form'
import UncontrolledComponents from './Form/UncontrolledComponents'
import Calculator from './CalculatorTemperature/Calculator'
import Inheritance from './InheritanceAndComposition/Inheritance'
import Composition from './InheritanceAndComposition/Composition'
import FilterableProductable from './ThinkingInReact/FilterableProductable'
import Cart from './Cart'
import User from './User'
import Navigation from './CustomHook/Navigation'
import Rename from './CustomHook/Rename'

function App() {
  return (
    <div className='App'>
      {/* <Lock /> */}
      {/* <Layout>
        <BareInput autoFocus className='input-control' />
        <h1>Hello anh em</h1>
        <BareButton />
      </Layout> */}

      {/* <LoginControl isLoggedIn={true} /> */}
      {/* <CorrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponents /> */}
      {/* <Calculator /> */}
      {/* <Inheritance /> */}
      {/* <Composition /> */}
      {/* <FilterableProductable /> */}
      {/* <Cart /> */}
      {/* <CongTruNhanChia />
      <TodoList /> */}
      {/* <User.class /> */}
      {/* <User /> */}
      <Rename />
      <Navigation />
    </div>
  )
}

export default App
