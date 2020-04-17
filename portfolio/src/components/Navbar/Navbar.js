import React, {Component} from 'react';
export default class Navbar extends Component{
render(){
  let resumeData = this.props.resumeData;
  return(
    <React.Fragment>
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='nav-btn' href= '#nav-wrap' title= 'Show Navigation'>Show naigation</a>
          <ul id ='nav'className='nav'>
            <li className='current'><a className='smoothscroll'href='home'>Home</a></li>
            <li><a className='smoothscroll'href='#about'>About</a></li>
            <li><a className='smoothscroll'href='#resume'>Resume</a></li>
            <li><a className='smoothscroll'href='#contact'>Contact</a></li>
            <li><a className='smoothscroll'href='#portfolio'>Portfolio</a></li>
          </ul>
        </nav>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='headline'>I am {resumeData.name}.</h1>
            <h3 style={{color:'#fff', fontFamily:'sans=serif'}}>I am a {resumeData.role}.{resumeData.roleDescription}
            </h3>
            <br/>
            <ul className='social'>
              {
                resumeData.socialLinks && resumeData.socialLinks.map(item => {
                  return(
                    <li key={item.name}>
                      <a href={item.url} target='__blank'><li className= {item.className}></li></a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
}