import React, { Component } from "react";
import {  Card, Image } from "semantic-ui-react";


class ProjectCard extends Component {
  render() {
    return (

        <Card>
          <Image
            src={this.props.projectInfo.image}
            wrapped
            ui={this.props.projectInfo.url}
          />
          <Card.Content>
            <Card.Header>{this.props.projectInfo.name}</Card.Header>
            <Card.Description>
              {this.props.projectInfo.description}
            </Card.Description>
          </Card.Content>
        </Card>

    );
  }
}

export default ProjectCard;