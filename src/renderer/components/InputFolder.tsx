import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap'

const InputFolder = () => {
    return (
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Folder..."
            />
            <Button variant="btn btn-info text-white" id="browse">
            Browse
            </Button>
        </InputGroup>
    )
}

export default InputFolder