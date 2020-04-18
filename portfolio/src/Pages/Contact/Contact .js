import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../Contact/style.css'


class Contact extends Component{
    render() {
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col= {6}>
                        <h2>Joshua Alabre</h2>
                        <img
                        src='https://nmcdn.io/bf48b01813174d27941cb0fe2037c1cb/122c4cdb603f4a0894d9f40c7e0072ff/files/about/meet-our-team/JoshAla.jpg'
                        alt='Joshua Alabre'
                        style={{height: '250px'}}
                        />
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>Reach out to me anytime for coding ideas and Projects I can do!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>
                                        joshuaalabre@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true'/>
                                        (Phone Number)
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className='fa fa-skype' aria-hidden='true'/>
                                        MySkypeId
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Contact;