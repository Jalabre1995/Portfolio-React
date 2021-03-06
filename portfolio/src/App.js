import React, {Component} from 'react';
import './App.css'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/Main/Main.js';
import {Link} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style ={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>}scroll>
              <Navigation>
                  <Link to ="/resume">Resume</Link>
                  <Link to ="/about">About</Link>
                  <Link to ="/portfolio">Portfolio</Link>
                  <Link to ="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Sections">
              <Navigation>
                  <Link to ="/resume">Resume</Link>
                  <Link to ="/about">About</Link>
                  <Link to ="/portfolio">Portfolio</Link>
                  <Link to ="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
  
  }
 

export default App;