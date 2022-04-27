import {
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap'

import React from 'react'
import { dialog } from '@electron/remote'

// function browse () {
//   dialog.showOpenDialog({
//     properties: ['openDirectory']
//   }).then(result => {
//     //when user doesnt cancel opendirectory
//     if(result.canceled == false)
//     {
//       result.filePaths[0]
//     }
//   }).catch(error => {
//     console.error(`error : ${error}`)
//   })
// }
export class InputFolder extends React.Component {
  state = {
    folderPath: ""
  }

  browse = () => {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }).then(result => {
      //when user doesnt cancel opendirectory
      if(result.canceled == false)
      {
        let filepaths = result.filePaths[0]
        this.props.filespath(filepaths)
      }
    }).catch(error => {
      console.error(`error : ${error}`)
    })
  }
  render() {
    return (
      <Row className='mb-4'>
        <Col xs="8">
          <Form.Control
            className='rounded-0'
            type="text"
            placeholder="Folder..."
            disabled
          />
        </Col>
        <Col xs="4">
          <div className="d-grid gap-2">
            <Button variant="info rounded-0" onClick={this.browse}>Browse</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

export default InputFolder
