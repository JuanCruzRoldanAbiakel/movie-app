import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNavigator';
import Trending from './Components/Pages/Trending/Trending';
import Movies from './Components/Pages/Movies/Movies';
import Series from './Components/Pages/Series/Series';
import Search from './Components/Pages/Search/Search';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
          <footer>
            <p>App Programada por 👉 <a href="https://portafolio-abiakel.netlify.app">Juan Cruz Roldan Abiakel</a></p>
          </footer>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
};
export default App;