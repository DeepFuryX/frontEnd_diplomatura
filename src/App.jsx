import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Movie from './components/Pages/Movie/Movie'
import NotFound from './components/Pages/404/NotFound'
import MyList from './components/Pages/List/MyList'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/search' element={<Home />} />*/}
          <Route path='/list' element={<MyList />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
