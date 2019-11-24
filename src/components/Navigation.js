import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav'


export default class Navigation extends Component {
    state = ({
        navClassNames: "navbar navbar-dark bg-dark text-white"
    })

    render () {
        return (
            <div>
                <Nav className={this.state.navClassNames} defaultActiveKey="/" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <div className="justify-content-end navbar">
                    <Nav.Item as="li">
                        <Nav.Link eventKey="dashboard" href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="about" href="/dashboard">Dashboard</Nav.Link>
                    </Nav.Item>
                    </div>
                </Nav>
            </div>
        )
    }
}