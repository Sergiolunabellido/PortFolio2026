import { Routes, Route } from 'react-router-dom'
import './App.css'
import Principal from './pages/Principal'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </div>
  )
}

export default App
