import {
  Navbar,
  Container,
  Form,
  Button,
  Row,
  Col
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
        <Navbar bg="info" className='mt-4'>
          <Container>
          <Navbar.Collapse className="justify-content-end">
            <Row>
              <Col>
                <Form.Select aria-label="select-options">
                  <option>Options</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <div className='d-grid'>
                  <Button variant='danger'>Go</Button>
                </div>
              </Col>
            </Row>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    }
  }
}
