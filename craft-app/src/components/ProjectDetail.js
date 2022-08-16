// import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function DeleteConfirmationModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Delete this project?
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Are you sure?</h4>
				<p>
					The information and files associated with this project will be gone
					forever and ever if you do!
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={props.onHide}>
					I didn't mean it!
				</Button>
				<Button variant="danger" onClick={(id) => props.handledelete(id)}>
					Delete that shit
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

function ProjectDetail({ projects, handledelete }) {
	const [modalShow, setModalShow] = useState(false);

	console.log(projects);

	const { projectId } = useParams();

	const currentProject = projects.find((project) => projectId === project.id);
	const { id, title, color, description, files } = currentProject;

	return (
		<div className="project-card-container m-5">
			<div className="project-card" key={id}>
				<p>Project Home </p>
				<div className="project-header">
					<h2 style={{ color: color }}>{title}</h2>
					<div className="update-delete-container">
						<Button className="mt-2 mx-1" variant="info">
							Edit
						</Button>
						<Button
							className="mt-2 mx-1"
							variant="warning"
							onClick={() => setModalShow(true)}
						>
							Delete
						</Button>
						<DeleteConfirmationModal
							show={modalShow}
							onHide={() => setModalShow(false)}
							handledelete={handledelete}
						/>
					</div>
				</div>
				<div className="project-info my-4">
					<h5>Description</h5>
					<p className="mx-3">{description}</p>
					<h5>Pattern/Template Files</h5>
					<p className="mx-3">{files}</p>
				</div>
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
