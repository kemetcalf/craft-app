import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PlanInput() {
	// nested inputs to update the DOM and add items to the plan

	// event listener to write project info to a new Project object onSubmit

	// event listener for new Project object to be written to an array of ProjectRoster

	return (
		<Form className="w-75 mx-auto">
			<Row className="mb-3">
				<Col xs={2} controlId="formGridColor" className="d-sm-grid">
					<Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
					<Form.Control
						type="color"
						id="exampleColorInput"
						defaultValue="#E40CF0"
						title="Choose your color"
					/>
				</Col>

				<Col xs={10} controlId="formGridProject" className="d-sm-grid">
					<Form.Label>Project Name</Form.Label>
					<Form.Control />
				</Col>
			</Row>

			<InputGroup>
				<InputGroup.Text>Description</InputGroup.Text>
				<Form.Control as="textarea" aria-label="With textarea" />
			</InputGroup>

			<Button variant="primary" type="submit" className="my-3">
				Submit
			</Button>
		</Form>
	);
}

export default PlanInput;
