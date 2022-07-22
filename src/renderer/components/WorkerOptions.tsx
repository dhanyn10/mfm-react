import {
  OverlayTrigger,
  Popover,
  Button,
  Card
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
  Rename()
  {
    console.log('rename')
  }
  render() {
    if(this.state.listLength > 0)
    {
      return (
        <Card className="mb-3 rounded-0">
          <Card.Body>
            <Button size="sm" variant="outline-info rounded-pill">Rename</Button>{' '}
            <OverlayTrigger
              placement="bottom-start"
              overlay={
                <Popover id="popover-insert">
                  <Popover.Body>
                    insert more characters to your files name
                  </Popover.Body>
                </Popover>
              }
            >
              <Button size="sm" variant="outline-info rounded-pill">Insert</Button>
            </OverlayTrigger>{' '}
            <OverlayTrigger
              placement="bottom-start"
              overlay={
                <Popover id="popover-delete">
                  <Popover.Body>
                    delete duplicated files
                  </Popover.Body>
                </Popover>
              }
            >
              <Button size="sm" variant="outline-info rounded-pill">Delete</Button>
            </OverlayTrigger>{' '}
          </Card.Body>
        </Card>
      )
    }
  }
}
