import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from '../Education/Education .js';
import Expereince from '../Expereince/Expereince.js';
import Skills from '../Skills/Skills.js';
import '../Resume/style.css'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src='https://nmcdn.io/bf48b01813174d27941cb0fe2037c1cb/122c4cdb603f4a0894d9f40c7e0072ff/files/about/meet-our-team/JoshAla.jpg'
                                alt='Joshua Albre'
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Joshua Alabre</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Multidisciplinary Full Stack Developer with a passion for condensing large data into a simple to understand format. And build websites from mockup to rollout. Adept at working independently as well as collaborating with teams across multiple functions to break down concepts in easy terms.Prepared to excel in solving complex problems.
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <h5>Email</h5>
                        <p>joshuaalabre@gmail.com</p>
                        <hr stlye={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2> Education</h2>


                        <Education
                            startYear={2014}
                            endYear={2018}
                            schoolName='Wheaton College'
                            schoolDescription='Graduated with a BA in Buisness and Management'
                        />
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName='UCONN'
                            schoolDescription='Accelerated coding camp where I learned full-stack Development'
                        />

                        <h2>Expereince</h2>

                        <Expereince
                            startYear={2019}
                            endYear='Current'
                            jobYear='First Job'
                            jobDescription='Fleet Feet Sales Associate'
                        />

                        <Expereince
                            startYear={2017}
                            endYear={2017}
                            jobYear='Intern'
                            jobDescription='Sales Represenative  for Energybits'
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill='javascript'
                            progress={40}
                        />
                        <Skills
                            skill='jquery'
                            progress={40}
                        />
                        <Skills
                            skill='index'
                            progress={80}
                        />
                        <Skills
                            skill='mongoDB'
                            progress={40}
                        />
                        <Skills
                            skill='IndexDB'
                            progress={40}
                        />
                        <Skills
                            skill='Mongoose'
                            progress={40}
                        />
                        <Skills
                            skill='NodeJS'
                            progress={50}
                        />
                        <Skills
                            skill='React'
                            progress={25}
                        />

                    </Cell>
                </Grid>
                </div>

        )
    }
}



            
 

export default Resume;