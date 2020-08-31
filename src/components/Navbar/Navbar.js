import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


class Navigation extends Component {
    render() {
        return (
            <Menu inverted={true} size="massive">
                <Container>
                    <Menu.Item as={NavLink} to="/">
                        Home
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/about">
                        About
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/portfolio">
                        Portfolio
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
