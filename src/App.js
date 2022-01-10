import logo from './logo.svg';
import './App.css';
import ActiveTab from './components/ActiveTab.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      
      <ActiveTab/>

      <Footer/>
    </div>
  );
}

export default App;
