import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


class Navigation extends Component {
    render() {
        return (
            <Menu inverted={true} size="massive">
                <Container>
                    <Menu.Item as={NavLink} to="/" active>
                        About
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/profile">
                        Profile
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/contact" position="right">
                        Contact
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default Navigation;
