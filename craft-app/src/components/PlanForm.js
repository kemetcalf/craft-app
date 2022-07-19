import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function PlanForm({ addProject }) {
	const [projectInfo, setProjectInfo] = useState({
		title: "My Project",
		color: "#E40CF0",
	});
	// nested inputs to update the DOM and add items to the plan-->useEffect?

	// event listener to write project info to a new Project object onSubmit
	function handleChange(e) {
		setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(projectInfo);
		addProject(projectInfo);
		setProjectInfo({ title: "", color: "" });
	}

	// event listener for new Project object to be written to an array of ProjectRoster

	return (
		<Form className="w-75 mx-auto" id="projectFormGrid" onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Col xs={6} className="d-sm-grid">
					<Form.Group controlId="newProjectName">
						<Form.Label>Project Name</Form.Label>
						<Form.Control
							type="text"
							name="title"
							placeholder="e.g. ComicCon Project"
							value={projectInfo.title}
							onChange={handleChange}
						/>
					</Form.Group>
				</Col>
				{/* TODO: Add onChange attributes to each form control onChange={handleChange} */}
				<Col xs={4} className="d-sm-grid">
					<Form.Group controlId="projectFiles" className="mb-3">
						<Form.Label>Upload Pattern/Template file(s)</Form.Label>
						<Form.Control
							type="file"
							multiple
							name="files"
							placeholder="templates.pdf"
							// value={projectInfo.files}
							// onChange={handleChange}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col xs={8}>
					<Form.Group controlId="projectColorInput" className="mb-3">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							aria-label="With textarea"
							type="text"
							name="description"
							placeholder="e.g. Adult Link from Ocarina of Time"
							// value={projectInfo.description}
							// onChange={handleChange}
						/>
					</Form.Group>
				</Col>
				<Col
					xs={2}
					className="d-sm-grid align-content-end justify-content-center"
				>
					<Form.Group controlId="projectColorInput" className="mb-3">
						<Form.Label>Color picker</Form.Label>
						<Form.Control
							type="color"
							// id="projectColorInput"
							// projectColorInput to correlate to projectColorTheme in Project object; for visual differentiation between Projects
							title="Choose your color"
							className="mx-3"
							name="color"
							value={projectInfo.color}
							onChange={handleChange}
						/>
					</Form.Group>
				</Col>
			</Row>

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

			<Col xs={8}></Col>

			<Button variant="primary" type="submit" className="my-3">
				Submit
			</Button>
		</Form>
	);
}

export default PlanForm;
