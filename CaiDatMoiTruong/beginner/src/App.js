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
      <Form />
    </div>
  )
}

export default App
