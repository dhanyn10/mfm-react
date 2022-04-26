import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'

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
                        <Button variant="info rounded-0">Browse</Button>
                    </div>
                </Col>
            </Row>
    )
}

export default InputFolder