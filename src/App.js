import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// PAGES
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about';
import Auction from './pages/auction/auction';
import Donate from './pages/donate/donate';
import Navigation from './components/navigation/navigation.component';
import MobileNavigation from './components/navigationMobile/navigationMobile.component';
import SpecificPastYearPage from './pages/specificPastYear/specificPastYear';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MobileNavigation />
      <Routes>
        <Route exact path={'/'} element={<Homepage/>} />
        <Route exact path={'/about'} element={<About/>} />
        <Route exact path={'/auction'} element={<Auction/>} />
        <Route exact path={'/donate'} element={<Donate/>} />
        <Route path={'/pastyear/:pastYear'} element={<SpecificPastYearPage />} />
      </Routes>
    </div>
  );
}

export default App;
