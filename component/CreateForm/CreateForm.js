import {UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateForm = (props) => {
    return (
        <UncontrolledPopover placement={'bottom'} isOpen={props.open} target={'openForm'}>
            <PopoverHeader>Create New</PopoverHeader>
            <PopoverBody>
                <Form>
                    <FormGroup>
                        <Label>BHK</Label>
                        <Input
                            type="text"
                            name={'bhk'}
                            placeholder="How much bhk?"
                            value={props.value.bhk}
                            onChange={props.changed} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Square Ft.</Label>
                        <Input
                            type="text"
                            placeholder="how much square ft?"
                            name={'squareFt'}
                            value={props.value.squareFt}
                            onChange={props.changed}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Floor</Label>
                        <Input
                            type="text"
                            placeholder="Floor"
                            name={'floor'}
                            value={props.value.floor}
                            onChange={props.changed}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Rent</Label>
                        <Input
                            type="text"
                            placeholder="Rent"
                            name={"rent"}
                            value={props.value.rent}
                            onChange={props.changed}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Location</Label>
                        <Input
                            type="text"
                            placeholder="Location"
                            name={"location"}
                            value={props.value.location}
                            onChange={props.changed}/>
                    </FormGroup>
                    <Button outline color="primary" disabled={!props.submitable} onClick={props.submit}>Submit</Button>{' '}
                    <Button outline color="danger" onClick={props.discard}>Discard</Button>
                </Form>
            </PopoverBody>
        </UncontrolledPopover>
    );
};
export default CreateForm;