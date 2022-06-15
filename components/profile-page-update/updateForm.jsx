import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function UpdateFormComponent() {
    return (
        <>
        <Form>
        <FormGroup row>
                    <h2 className="info">Change your profile information here
                    </h2>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="white">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={{ size: 3, offset: 10 }}>
            <Button color='primary'>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
        </>
    )
}