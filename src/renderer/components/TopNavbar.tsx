import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap'

const TopNavbar = () => {
    return (
        <Navbar bg="info" expand="lg" className="mb-4">
        <Container>
            <Navbar.Brand href="#home">MFM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Github</Nav.Link>
                <NavDropdown title="Help" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Issues</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Pull Requests</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Developer Tools</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default TopNavbar