import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js"
import API from "../../components/lib/API"

class Portfolio extends Component {

    state = {
        projects: [],
        err: ""
    }

    componentDidMount() {

        API.projects()
        .then((response) => {
            console.log(response)
        })
        .catch((error) => this.setState({ err: error.message }))
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
