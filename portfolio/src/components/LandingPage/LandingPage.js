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
                    </div>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;