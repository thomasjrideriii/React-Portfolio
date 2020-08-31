import React, { Component } from "react";
import { Container, Card, Responsive, Segment } from "semantic-ui-react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import API from "../../components/lib/API";

class Portfolio extends Component {
  state = {
    projects: [
      { name: "Megabites", image: "", link: "https://megabytes.herokuapp.com/", description: "Megabites provides users with a place to find, create, share, and rate recipes." },
      { name: "Something Different", image: "", link: "https://bmcart3.github.io/Something-Different/", description: "A hobby discovery website for anyone looking to try Something Different." },
      { name: "Pizza Tracker", image: "", link: "https://pizza--tracker.herokuapp.com/", description: "Pizza tracking app that allows users to see where their pizza is, and allows employees to update pizza status." },
      { name: "Employee Tracker", image: "", link: "https://github.com/thomasjrideriii/Employee-Tracker", description: "A back end database interface used to track employment structures for mulitiple departments." },
      { name: "Weather Overground", image: "", link: "https://thomasjrideriii.github.io/Multi-City-Weather-App/", description: "An agrogate weather app that stores user searches for future referece." },
      { name: "Work Day Scheduler", image: "", link: "https://thomasjrideriii.github.io/Work-Day-Scheduler/", description: "A simple calendar app for scheduling your work day." }
    ],
    err: "",
  };

  render() {
    return (
      <Container> 
        <Responsive as={Segment} minWidth={992}>
        <Card.Group itemsPerRow={3}>
          {this.state.projects.map((project) => {
            return <ProjectCard projectInfo={project} />;
          })}
        </Card.Group>
      </Responsive>
        <Responsive as={Segment} maxWidth={991}>
        <Card.Group itemsPerRow={1}>
          {this.state.projects.map((project) => {
            return <ProjectCard projectInfo={project} />;
          })}
        </Card.Group>
      </Responsive>
      </Container>
    );
  }
}

export default Portfolio;
