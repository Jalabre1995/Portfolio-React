import React from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Picture from "../components/Picture"
import Navbar from "../components/Navbar.js"

function About() {
    return (
        <Navbar>
        <div>
            <Picture backgroundImage ="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/383690/f7a121a3f7a929ffb4dbc3ae241b3b4b6eaaed1d.jpg">
                <h1>About Me</h1>
            </Picture>
            <Container style ={{marginTop: 30}}>
                <Row>
                    <Col size="md-12">
                        <h1>Here is what you need to know about me!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size= "md-12">
                <p>Hey there! My name is Joshua Alabre and I love to code!
                  I am from Hartford, Connecticut and when it comes to coding, it is always about probelm solving.
                  I always feel accomlished whenever I make my code work. From small to big fixes, I
                  love figuring out what elements makes a code do what. I speacialize in HTML, Javascript, and CSS.</p>
                  <p>Other skills that I am workin on is Node.Js, MYSQL, MONGO, Mongoose, Express, and Python.
                   Some of the frameworks that I have been working on is Semantic UI, Foundation, Bootstrap, and Font
                   Awesome.
                   Everyday is a new day to better your code. I also love calloborating with my co-workers on projects.
                   One of my preious projects was a Gaming/News Application that used two APIs (Rawg and News API).
                   I am always suprised what types of coding tricks I learn from my fellow colleagues.</p>
                   <p>Before I started coding. I graduated from Wheaton College with a BA in Business and
                    Administration.
                    And I also ran Cross Country and Track and Field in high shcool and College.
                    I am also apart of a track club called Hartbeat track club and train for half-marathons
                    I also love playing video games. Best genre of games for me is RPG(Role Playing) and FPS(First
                    Person Shooters.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        </Navbar>
    );
}

export default About;