
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from './components/header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './pages/movieDetail/MovieDetail';
import TvList from './components/TvList/TvList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieDetails />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/tv/popular' element={<TvList />}></Route>
          <Route path='/*' element={<h1>Under Construction</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
