import React,{useState} from 'react';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { IsAuthenticated } from './contexts/Auth';
import AdminPage from './pages/AdminPage';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import {hasAuthenticated} from './services/AuthApi';
import Voyages from './pages/Voyages';
import Tikets from './pages/Tikets';
import Control from './pages/Control';
import Stat from './pages/Stat';

function App() {
  const [isAuthenticated, setIsAuthenticated]=useState(hasAuthenticated());
  return (
    <IsAuthenticated.Provider value={{isAuthenticated, setIsAuthenticated}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin-page" element={<AuthenticatedRoute/>} >
      <Route path="/admin-page" element={<AdminPage/>} />
      </Route>
      <Route path="/voyages" element={<AuthenticatedRoute/>} >
      <Route path="/voyages" element={<Voyages/>} />
      </Route>
      <Route path="/tikets" element={<AuthenticatedRoute/>} >
      <Route path="/tikets" element={<Tikets/>} />
      </Route>
      <Route path="/control" element={<AuthenticatedRoute/>} >
      <Route path="/control" element={<Control/>} />
      </Route>
      <Route path="/statistiques" element={<AuthenticatedRoute/>} >
      <Route path="/statistiques" element={<Stat/>} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </IsAuthenticated.Provider>

  );
}

export default App;
