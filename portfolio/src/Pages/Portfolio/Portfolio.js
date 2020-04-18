import React, { Component } from 'react';
import { Grid, Tab, Tabs, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../Portfolio/style.css'
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className='portfolio-grid'>
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRKDUVMpAlYBEyo9sFpc2XUExhYXWghakO2Gjo2qdZDhTNOrHxg&s)' }}>Video-Game-Search-App </CardTitle>
                        <CardText>
                            Search for related information via the title of the game
                            Successfully retrieved the information from two API (RAWG) and (News API).
                            Worked on the front-end using Semantic-UI.
                            RAWG API, News API, Semantic.

                            </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRKDUVMpAlYBEyo9sFpc2XUExhYXWghakO2Gjo2qdZDhTNOrHxg&s)' }}>NBA-Game </CardTitle>
                        <CardText>
                            Created a NBA game that allows users to choose 5 players from their favoirite team.via the title of the game.

                            </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRKDUVMpAlYBEyo9sFpc2XUExhYXWghakO2Gjo2qdZDhTNOrHxg&s)' }}>Password-Generator </CardTitle>
                        <CardText>
                            Small Java library that allows you to generate random passwords.
                            Created the randomization password generator successfully.
                            Worked on the frontend and backend.
                            Javascript.
                         </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 4*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRKDUVMpAlYBEyo9sFpc2XUExhYXWghakO2Gjo2qdZDhTNOrHxg&s)' }}>Employee-Management-System App </CardTitle>
                        <CardText>
                            Search for related information via the title of the game
                            Successfully retrieved the information from two API (RAWG) and (News API).
                            Worked on the front-end using Semantic-UI.
                            RAWG API, News API, Semantic.

                            </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </div>
            )

        }else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is Jquery</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>This is React </h1></div>
            )

        }else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>IndexDB</Tab>
                    <Tab>Jquery</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}


export default Portfolio;