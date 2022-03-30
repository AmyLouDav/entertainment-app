import { Container } from "@mui/material"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import SimpleBottomNavigation from './Components/MainNav';
import Search from './Pages/Search/Search';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
