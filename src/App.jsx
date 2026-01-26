import Navbar from './Navbar'
import Home from './components/Home'
import CountryPage from './components/CountryPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:cca3' element={<CountryPage />} />
      </Routes>
    </>
  )
}

export default App
