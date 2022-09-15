import { Row, Col, Form, Button } from 'react-bootstrap';
import React from 'react';
import { dialog } from '@electron/remote';

export class InputFolder extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      filesPath: null,
    };
  }

  browse = async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openDirectory'],
    });
    if (result.filePaths[0]) {
      const filepaths = result.filePaths[0];
      this.props.filespath(filepaths);
      this.setState({
        filePath: filepaths,
      });
    }
    return null;
  };

  render() {
    return (
      <Row className="mb-4">
        <Col xs="8">
          <Form.Control
            className="rounded-0"
            type="text"
            placeholder="Folder..."
            value={this.state.filePath}
            disabled
          />
        </Col>
        <Col xs="4">
          <div className="d-grid gap-2">
            <Button variant="info rounded-0" onClick={this.browse}>
              Browse
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default InputFolder;
