import logo from './logo.svg'
import './App.css'
import Lock from './Lock'
import BareInput from './BareInput'
import Layout from './Layout'

function App() {
  return (
    <div className='App'>
      <Lock />
      <BareInput autoFocus className='input-control' />
      <Layout>
        <h1>Hello anh em</h1>
      </Layout>
    </div>
  )
}

export default App
