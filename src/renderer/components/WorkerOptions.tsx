import { OverlayTrigger, Popover, Button, Card } from 'react-bootstrap';
import React from 'react';

export default class WorkerOptions extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      listFiles: 0,
    };
  }

  componentDidUpdate(props: { workerListFilesData: Array<any> }) {
    if (this.props.workerListFilesData !== props.workerListFilesData) {
      this.setState({
        listFiles: this.props.workerListFilesData,
      });
      console.log('workerOptions', this.props.workerListFilesData);
    }
  }

  Rename = () => {
    console.log('rename');
  };

  render() {
    if (this.state.listFiles.length > 0) {
      return (
        <Card className="mb-3 rounded-0">
          <Card.Body>
            <Button
              size="sm"
              variant="outline-info rounded-pill"
              onClick={() => this.Rename()}
            >
              Rename
            </Button>{' '}
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
              <Button size="sm" variant="outline-info rounded-pill">
                Insert
              </Button>
            </OverlayTrigger>{' '}
            <OverlayTrigger
              placement="bottom-start"
              overlay={
                <Popover id="popover-delete">
                  <Popover.Body>delete duplicated files</Popover.Body>
                </Popover>
              }
            >
              <Button size="sm" variant="outline-info rounded-pill">
                Delete
              </Button>
            </OverlayTrigger>{' '}
          </Card.Body>
        </Card>
      );
    }
    return <div />;
  }
}
