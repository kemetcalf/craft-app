// import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Project(props) {
	const { title, color, description, files } = props.project;
	// if this.id === id,

	return (
		<div>
			<p>Project Home</p>
			<h3 style={{ color: color }}>{title}</h3>
			<h5>Pattern/Template Files</h5>
			<p>{files}</p>
			<h5>Description</h5>
			<p>{description}</p>

			<Col xs={10}>
				<Row>
					<Form.Group controlId="addTask">
						<Form.Label>Add Project Phase</Form.Label>
						<Form.Control type="text" placeholder="e.g. Hero's Shield" />
						<Form.Group>
							<Form.Label>Add Phase Task</Form.Label>
							<Form.Control
								type="text"
								placeholder="e.g. Trace, cut, & heat form EVA panels"
							/>
						</Form.Group>
					</Form.Group>
				</Row>
			</Col>

			<Button variant="primary" type="submit" className="my-3">
				Submit
			</Button>
		</div>
	);
}

export default Project;
