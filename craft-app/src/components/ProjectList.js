import Accordion from "react-bootstrap/Accordion";

function ProjectList({ projects }) {
	//need to destructure projects into project/props to use in mapped rendering

	return (
		<div>
			<Accordion defaultActiveKey={["0"]} alwaysOpen>
				{projects.map((project) => (
					<div>

						<style type="text/css">
							{`
						.btn-flat {
						background-color: purple;
						color: white;
						}

						.btn-xxl {
						padding: 1rem 1.5rem;
						font-size: 1.5rem;
						}
						`}
						</style>
					</div>


					<Accordion.Item
						eventKey={project.id}
						key={project.id}
						// style={{ color: project.color }}
					>
						<Accordion.Header>{project.title}</Accordion.Header>
						<Accordion.Body style={{ color: project.color }}>
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
