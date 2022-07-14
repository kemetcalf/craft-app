import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// import { Component } from "react";
// // import { render } from "react-dom";
// import DatePicker from "react-datepicker";

// class DateDropdown extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			startDate: new Date(),
// 		};
// 		this.handleChange = this.handleChange.bind(this);
// 		this.onFormSubmit = this.onFormSubmit.bind(this);
// 	}
// 	handleChange(date) {
// 		this.setState({
// 			startDate: date,
// 		});
// 	}
// 	onFormSubmit(e) {
// 		e.preventDefault();
// 		console.log(this.state.startDate);
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.onFormSubmit}>
// 				<div className="form-group">
// 					<DatePicker
// 						selected={this.state.startDate}
// 						onChange={this.handleChange}
// 						name="startDate"
// 						dateFormat="MM/dd/yyyy"
// 					/>
// 					<button className="btn btn-primary">Show Date</button>
// 				</div>
// 			</form>
// 		);
// 	}
// }

function PlanInput() {
	// nested inputs to update the DOM and add items to the plan

	// event listener to write project info to a new Project object onSubmit

	// event listener for new Project object to be written to an array of ProjectRoster

	return (
		<Form className="w-75 mx-auto" controlId="projectFormGrid">
			<Row className="mb-3">
				<Col xs={8} controlId="projectName" className="d-sm-grid">
					<Form.Label>Project Name</Form.Label>
					<Form.Control type="text" placeholder="SDCC 2023 Cosplay" />
				</Col>
				<Col>
					<Form.Label>Upload Pattern or template file(s)</Form.Label>
					<Form.Group controlId="formFileMultiple" className="mb-3">
						<Form.Control type="file" multiple />
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<InputGroup>
						<InputGroup.Text>Description</InputGroup.Text>
						<Form.Control as="textarea" aria-label="With textarea" />
					</InputGroup>
				</Col>
				<Col xs={2} className="d-sm-grid">
					<Form.Label>Color picker</Form.Label>
					<Form.Control
						type="color"
						controlId="projectColorInput"
						// projectColorInput to correlate to projectColorTheme in Project object; for visual differentiation between Projects
						defaultValue="#E40CF0"
						title="Choose your color"
						className="mx-3"
					/>
				</Col>
			</Row>

			{/* <Col>
				<div>
					<DateDropdown
						selected={this.state.startDate}
						onChange={this.handleChange}
						name="startDate"
						dateFormat="MM/dd/yyyy"
					/>
				</div>
			</Col> */}

			<Button variant="primary" type="submit" className="my-3">
				Submit
			</Button>
		</Form>
	);
}

export default PlanInput;
