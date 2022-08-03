// import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

function ProjectDetail({ projects }) {
	console.log(projects);
	const { id, title, color, description, files } = {};

	const instance = useParams();
	console.log("~~ INSTANCE ~~");
	console.log(instance);

	let projectId = id;

	console.log("projectId: ", instance.projectId);

	projects.find((project) => {
		if (projectId === project.id) {
			console.log(projectId);
			console.log("match");
			return true;
		} else {
			console.log("no match");
			return false;
		}
	});

	// BEBEH: would it be neater/clearer to break out the project card into its own component?
	return (
		<div className="project-card-container m-5">
			<div className="project-card" key={projectId}>
				<p>Project Home {instance.projectId}</p>
				<h3 style={{ color: color }}>{title}</h3>
				<h5>Pattern/Template Files</h5>
				<p>{files}</p>
				<h5>Description</h5>
				<p>{description}</p>
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
