// import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

function ProjectDetail({ projects }) {
	console.log(projects);

	const { projectId } = useParams();

	const currentProject = projects.find((project) => projectId === project.id);
	const { id, title, color, description, files } = currentProject;

	return (
		<div className="project-card-container m-5">
			<div className="project-card" key={id}>
				<p>Project Home </p>
				<h2 style={{ color: color }}>{title}</h2>
				<h5>Pattern/Template Files</h5>
				<p className="mx-3">{files}</p>
				<h5>Description</h5>
				<p className="mx-3">{description}</p>
			</div>

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

export default ProjectDetail;
