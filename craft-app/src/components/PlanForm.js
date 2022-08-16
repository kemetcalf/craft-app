import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { Link } from "react-router-dom";

function ShortList({ projects }) {
	console.log(projects);
	if (projects) {
		console.log("ShortList render");
		return (
			<div className="short-list-container mx-5 mt-2">
				{projects.map(({ id, title, color, description }) => (
					<div key={id}>
						<Link to={`/project/${id}`}>
							<h2 style={{ color: color }}>{title}</h2>
						</Link>

						<p>{description}</p>
					</div>
				))}
			</div>
		);
	} else {
		console.log("ShortList not render");
	}
}

function PlanForm({ addProject, projects }) {
	const [projectInfo, setProjectInfo] = useState({
		title: "My Project",
		color: "#E40CF0",
		files: "",
		description: "",
	});
	// nested inputs to update the DOM and add items to the plan-->useEffect?

	// event listener to write project info to a new Project object onSubmit
	function handleChange(e) {
		e.preventDefault();
		setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
	}

	// event listener for new Project object to be written to an array of ProjectList
	function handleSubmit(e) {
		e.preventDefault();
		console.log(projectInfo);
		addProject(projectInfo);
		setProjectInfo({ title: "", color: "#E40CF0", files: "", description: "" });
	}

	return (
		<div>
			<div className="home-header ms-3 mt-4">
				<h5 className="text-info mt-2 ms-3">Got a project?</h5>
				<h1 className="text-primary mt-2 ms-5 display-2 fw-bold">WIPit!</h1>
			</div>
			<Form
				className="w-75 mx-auto"
				id="projectFormGrid"
				onSubmit={handleSubmit}
			>
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
								value={projectInfo.files}
								onChange={handleChange}
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
								value={projectInfo.description}
								onChange={handleChange}
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

				<Button variant="primary" type="submit" className="my-3">
					Submit
				</Button>
			</Form>
			<div>
				<ShortList projects={projects} />
			</div>
		</div>
	);
}

export default PlanForm;
