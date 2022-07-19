import Accordion from "react-bootstrap/Accordion";

function ProjectList({ projects }) {
	//need to destructure projects into project/props to use in mapped rendering

	return (
		<div>
			<Accordion defaultActiveKey={["0"]} alwaysOpen>
				{projects.map((project) => (
					<Accordion.Item eventKey={project.id}>
						<Accordion.Header style="color:'red'">
							{project.title}
						</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</div>
	);
}

export default ProjectList;
