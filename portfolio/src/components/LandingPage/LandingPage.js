import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className ='Landing-grid'>
                    <Cell col={12}></Cell>
                    <img 
                    src = 'https://nmcdn.io/bf48b01813174d27941cb0fe2037c1cb/122c4cdb603f4a0894d9f40c7e0072ff/files/about/meet-our-team/JoshAla.jpg'
                    alt = 'Joshua Alabre'
                    className= 'Josh'
                    />

                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        
                        
                        <hr/>
                        <p>Frontend: HTML5| CSS | Jquery | Javascript | Bootstrap | Ajax |Semanti UI | React-MDL</p>
                        <p>Backend: MYSQL | Express | ReactJs | Node | Handlebars | IndexDB | MongoDB</p>

                        <div className='socialLinks'>
                            {/*LinkedIn profile*/}
                            <a href='https://www.linkedin.com/in/joshua-alabre-6a628a10b/' rel='noopener noreferrer'  target='__blank'>
                                <i className='fa fa-linkedin-square' aria-hidden= 'true' />
                            </a>
                              {/*LinkedIn Github*/}
                              <a href='https://github.com/Jalabre1995' rel='noopener noreferrer'  target='__blank'>
                                <i className='fa fa-github-square' aria-hidden= 'true' />
                            </a> 
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;