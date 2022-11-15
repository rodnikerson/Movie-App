import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import TopRated from './Components/TopRated';
import Popular from './Components/Popular';
import ComingSoon from './Components/ComingSoon'
import Movie from './Components/Movie';
import SearchedMovies from './Components/SearchedMovies';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path ='/topratedmovies' element={<TopRated />} />
          <Route path ='/popular' element={<Popular />} />
          <Route path ='/movie/:id' element={<Movie />} />
          <Route path ='/comingsoon' element={<ComingSoon />} />
          <Route path ='/search/:input' element={<SearchedMovies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;