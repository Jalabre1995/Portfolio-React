  
import React, { Component } from 'react';
import { Grid, Tab, Tabs, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
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
                        <a href= "justindurocher.github.io/Video-Game-Search-App">Website</a>
                            
                            <a href= "https://github.com/justindurocher/Video-Game-Search-App">Git Hub</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.vox-cdn.com/thumbor/Ca5iGmhm7ZW9Cynz4cen1y_h5Bs=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64797841/rodger_USA_lifecycle_ringer.0.jpg)' }}>NBA-Game </CardTitle>
                        <CardText>
                            Created a NBA game that allows users to choose 5 players from their favoirite team.via the title of the game.

                            </CardText>
                        <CardActions border>
                            <a href ="https://github.com/Jalabre1995/project2">The League</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://ceid.gov.vn/wp-content/uploads/2019/08/bao_ve_thong_tin_ca_nhan_1_1.jpg)' }}>Password-Generator </CardTitle>
                        <CardText>
                            Small Java library that allows you to generate random passwords.
                            Created the randomization password generator successfully.
                            Worked on the frontend and backend.
                            Javascript.
                         </CardText>
                        <CardActions border>
                            <a href="https://github.com/Jalabre1995/Password-Generator">GitHub</a>
                            <a href="https://jalabre1995.github.io/Password-Generator/">Website</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 4*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://getapp.wpengine.com/wp-content/uploads/HEAD-Best-mobile-apps-for-keeping-track-on-your-employees-1024x559.png)' }}>Employee-Management-System App </CardTitle>
                        <CardText>
                        Architect and build a solution for managing a company’s employees using node,inquirer,Mysql
                        Successfully required the inquirer prompt.
                        Retrieved the data being called from Mysql.
                        Worked on the backend creating the command line.
                        Mysql, JS, node.js, and express.


                            </CardText>
                        <CardActions border>
                            <a href="https://github.com/Jalabre1995/Employee-Tracker">GitHub</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.workflowmax.com/hubfs/budget%20900x400v2.png)' }}>Budget-Tracker </CardTitle>
                        <CardText>
                        The purpose of this project was to give users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

                            </CardText>
                        <CardActions border>
                            <a href="https://github.com/Jalabre1995/Budget-Tracker">GitHub</a>
                            <a href="https://thawing-reef-92672.herokuapp.com/">Website</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://media1.s-nbcnews.com/j/newscms/2020_02/3179211/200109-stock-kettlebell-woman-gym-ew-541p_ae34ed0f6331ebc628395c9f307013d3.fit-760w.jpg)' }}>Fitness-Tracker </CardTitle>
                        <CardText>
                        The purpose of this project is to create a Workout-Tracker that will keep track of your fitness progress. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

                            </CardText>
                        <CardActions border>
                            <a href="https://github.com/Jalabre1995/Workout-Tracker">GitHub</a>
                            <a href="https://stormy-cove-52446.herokuapp.com/?id=5e83bb543331ab0017fe685b">Website</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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)' }}>Rock-Paper-Scissors </CardTitle>
                        <CardText>
                        The purpose of this application is to create a fun rock-paper scissors game to play with a CPU. What you will see in this repository is a index.html file, style.css file,and a script.js file. The application is very simple and easy to use. There will be three icons displayed in the middel fo the scrren. Rock, Paper, and Scissors. Press start and make the first move against the CPU.

                            </CardText>
                        <CardActions border>
                            <a href="https://github.com/Jalabre1995/Rock-Paper-Scissors">GitHub</a>
                            <a href="https://jalabre1995.github.io/Rock-Paper-Scissors/">Website</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://2firkl1qsbue2ashgy21ze4i-wpengine.netdna-ssl.com/wp-content/uploads/low-employee-engagement1200x600-848x400.png)' }}>Employee-Directory </CardTitle>
                        <CardText>
                        

                            </CardText>
                        <CardActions border>
                            <a href="https://github.com/Jalabre1995/Employee-Directory">GitHub</a>
                            <a href="http://localhost:3000/ . https://camelodirectory.herokuapp.com/">Website</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.cchsvoice.org/wp-content/uploads/2015/11/FoodJournal.jpg)' }}>Day-Planner </CardTitle>
                        <CardText>
                        

                            </CardText>
                        <CardActions border>
                            <a href="https://github.com/Jalabre1995/Day-Planner">GitHub</a>
                            <a href="https://jalabre1995.github.io/Day-Planner/">Website</a>
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