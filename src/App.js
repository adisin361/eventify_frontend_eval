import './App.css';
import React from 'react';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { EVENT_ROUTE, HOME_ROUTE } from './constants/routes';
import SinglePageView from './pages/SingleEventView';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={EVENT_ROUTE} element={<SinglePageView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
