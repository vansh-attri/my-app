import './App.css';
// import About from './Components/About.js';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform.js';

function App() {
  return (
    <>
      <Navbar Title="Text"/>
      <div className="container">
      <Textform Heading = "Enter the text"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
