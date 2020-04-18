import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/Main/Main.js';
import {Link} from 'react-router-dom';
import './App.css'
class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style ={{textDecoration: 'none', color: 'white'}} to="/">Welcome!</Link>}scroll>
              <Navigation>
                  <a href="/resume">Resume</a>
                  <a href="/about">About</a>
                  <a href="/portfolio">Portfolio</a>
                  <a href="/contact">Contact</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/resume">Resume</a>
                  <a href="/about">About</a>
                  <a href="/portfolio">Portfolio</a>
                  <a href="/contact">Contact</a>
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