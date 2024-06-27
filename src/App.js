
import './App.css';
// import Navbar from './Navbar'
import Categories from './Categories'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Deals from './deals/deals';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Categories/>
     <Header/>
     <HeroSection/>
     <Deals/>
     <Footer/>
    </div>
  );
}

export default App;

