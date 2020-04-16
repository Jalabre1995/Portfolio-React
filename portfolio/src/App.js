import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar.js';
import About from './Pages/About/About.js';
import resumeData from './resumeData.js';
import Portfolio from './Pages/Portfolio/Portfolio.js';
import Contact from './Pages/Contact/Contact .js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar resumeData={resumeData}/>
        <About resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Contact resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
  
  }
 

export default App;