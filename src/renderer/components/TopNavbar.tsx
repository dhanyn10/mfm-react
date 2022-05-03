import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from 'react-bootstrap'
import React from 'react'
import { getCurrentWebContents } from '@electron/remote'

export default class TopNavbar extends React.Component {
  toggleDevTools = () => {
    let currentWebContents = getCurrentWebContents()
    if(currentWebContents.isDevToolsOpened() == false)
      currentWebContents.openDevTools({mode: 'bottom'})
    else
      currentWebContents.closeDevTools()
  }
  render() {
    return (
      <Navbar bg="info" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">MFM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Github</Nav.Link>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Issues</NavDropdown.Item>
              <NavDropdown.Item href="#">Pull Requests</NavDropdown.Item>
              <NavDropdown.Item onClick={this.toggleDevTools}>Developer Tools</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
