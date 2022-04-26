
import './App.css';
import Navbar from './Navbar';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='page-heading'>Prayer Box Cafe</h1>
      <div className='sections'>
        <div className='section' id='menu'>
          <Menu />
        </div>
        <div className='section'>
          <About />
        </div>
        <div className='section'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
