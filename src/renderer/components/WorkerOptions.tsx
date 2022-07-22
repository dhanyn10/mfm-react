import {
  Nav,
  Navbar,
  Container,
  OverlayTrigger,
  Popover
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
                <Nav.Link href="#">Rename</Nav.Link>
                <OverlayTrigger
                  placement="bottom-start"
                  overlay={
                    <Popover id="popover-insert">
                      <Popover.Body>
                        Bulk insert more characters to your files name
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Nav.Link href="#">Insert</Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom-start"
                  overlay={
                    <Popover id="popover-delete">
                      <Popover.Body>
                        Delete duplicated files or folders
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Nav.Link href="#">Delete</Nav.Link>
                </OverlayTrigger>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    }
  }
}
