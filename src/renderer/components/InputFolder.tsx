import {
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap'

import { dialog } from '@electron/remote'

function browse () {
  dialog.showOpenDialog({
    properties: ['openDirectory']
  }).then(result => {
    //when user doesnt cancel opendirectory
    if(result.canceled == false)
    {
      let filePaths = result.filePaths[0]
      alert(filePaths)
      console.log(filePaths)
    }
  }).catch(error => {
    console.error(`error : ${error}`)
  })
}
const InputFolder = () => {
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
          <Button variant="info rounded-0" onClick={browse}>Browse</Button>
        </div>
      </Col>
    </Row>
  )
}

export default InputFolder
