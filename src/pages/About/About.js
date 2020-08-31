import React, { Component } from "react";
import {
  Container,
  Grid,
  Card,
  Image,
  Segment,
  Responsive,
} from "semantic-ui-react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Container>
        <Responsive as={Grid} minWidth={992}>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={4}>
              <Card>
                <Image
                  src={require("./assets/profile.jpg")}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Thomas Rider</Card.Header>
                  <Card.Meta>Charlotte, NC</Card.Meta>
                  <Card.Description>
                    Aspiring Web Developer
                    <br />
                    Avid Board Gamer
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment color="blue">
                <p className="aboutText">
                  My name is Thomas J Rider III, proudly named after my father
                  and grandfather, and born in the great state of New York! I've
                  lived most of my life in Charlotte, NC, and am a proud
                  graduate of both Charlotte Catholic High School and UNC Chapel
                  Hill. I spent two years in seminary post college, but
                  ultimately decided that the ministarial life wasn't for me,
                  and came back to Charlotte to work in theatre entertainment as
                  a maintenance and facilities manager.
                </p>
              </Segment>
              <Segment className="aboutText" color="blue">
                <p className="aboutText">
                  In my free time, I spend a lot of time reading science fiction
                  and fantasy novels, playing board games and other table top
                  games, and generally nerding out about the latest Marvel or
                  Star Wars film! I'm always looking for something new to dig
                  into, and web development has been a great opportunity to
                  unearth plenty of new knowledge and skills. As an avid gamer,
                  both on and off screen, I look forward to an exciting career
                  in coding and web app development.
                </p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Responsive>
        <Responsive as={Grid} maxWidth={991}>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={12}>
              <Grid.Row>
                <Card fluid>
                  <Image
                    src={require("./assets/profile.jpg")}
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>Thomas Rider</Card.Header>
                    <Card.Meta>Charlotte, NC</Card.Meta>
                    <Card.Description>
                      Aspiring Web Developer
                      <br />
                      Avid Board Gamer
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Row>
              <br />
              <Grid.Row>
                <Segment color="blue" fluid>
                  <p className="aboutText">
                    My name is Thomas J Rider III, proudly named after my father
                    and grandfather, and born in the great state of New York!
                    I've lived most of my life in Charlotte, NC, and am a proud
                    graduate of both Charlotte Catholic High School and UNC
                    Chapel Hill. I spent two years in seminary post college, but
                    ultimately decided that the ministarial life wasn't for me,
                    and came back to Charlotte to work in theatre entertainment
                    as a maintenance and facilities manager.
                  </p>
                </Segment>
              </Grid.Row>
              <br />
              <Grid.Row>
                <Segment color="blue" fluid>
                  <p className="aboutText">
                    In my free time, I spend a lot of time reading science
                    fiction and fantasy novels, playing board games and other
                    table top games, and generally nerding out about the latest
                    Marvel or Star Wars film! I'm always looking for something
                    new to dig into, and web development has been a great
                    opportunity to unearth plenty of new knowledge and skills.
                    As an avid gamer, both on and off screen, I look forward to
                    an exciting career in coding and web app development.
                  </p>
                </Segment>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Responsive>
      </Container>
    );
  }
}

export default About;
