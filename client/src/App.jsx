import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/register'
import LoginPage from './pages/Login'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/register' element={ <RegisterPage/> }></Route>
            <Route path='/login' element={ <LoginPage/> }></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
