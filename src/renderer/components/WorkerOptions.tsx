import {
  Nav,
  Navbar,
  Container
} from 'react-bootstrap'
import React from 'react'

export default class WorkerOptions extends React.Component {
  constructor() {
    super()

    this.state = {
      listLength: 0
    }
  }
  componentDidUpdate(props)
  {
    if(this.props.workerListFilesData !== props.workerListFilesData)
    {
      this.setState({
        listLength: this.props.workerListFilesData.length
      })
    }
  }
  render() {
    if(this.state.listLength > 0)
    {
      return (
        <Navbar bg="light" className='mt-4 mb-2 border'>
          <Container>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="#">Replace</Nav.Link>
                <Nav.Link href="#">Insert</Nav.Link>
                <Nav.Link href="#">Delete</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    }
  }
}
