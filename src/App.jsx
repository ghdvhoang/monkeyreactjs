import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Blog from './pages/blog'
import Contact from './pages/contact'
function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element ={ <Login/> } />
          <Route path="/login" element ={ <Login/> } />
          <Route path='/register' element ={ <Register/> } />
          <Route path="/home" element ={ <Home/> } />
          <Route path="/blog" element ={ <Blog/> } />
          <Route path="/contact" element = { <Contact/> } />
        </Routes>
      </Box>
    </>
  )
}
export default App
