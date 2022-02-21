import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// PAGES
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about';
import Auction from './pages/about/about';
import Donate from './pages/donate/donate';
import PastYears from './pages/pastyears/pastyears';
import Contact from './pages/contact/contact';
import Navigation from './components/navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path={'/'} element={<Homepage/>} />
        <Route exact path={'/about'} element={<About/>} />
        <Route exact path={'/auction'} element={<Auction/>} />
        <Route exact path={'/donate'} element={<Donate/>} />
        <Route exact path={'/past-years'} element={<PastYears/>} />
        <Route exact path={'/contact'} element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
