import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js"

class Portfolio extends Component {

    state = {
        projects: []
    }

  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={3}>
            {this.state.projects.map((project) => {
                return <ProjectCard projectInfo={project} />
            })}
        </Card.Group>
      </Container>
    );
  }
}

export default Portfolio;
