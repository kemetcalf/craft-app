import Accordion from "react-bootstrap/Accordion";

function ProjectList({ projects }) {
	return (
		<div>
			<Accordion defaultActiveKey={["0"]} alwaysOpen>
				{projects.map(({ id, title, color, description, files }) => (
					<Accordion.Item
						eventKey={id}
						key={id}
						className="border-top-0"
						style={{ borderBottomColor: color }}
					>
						<Accordion.Header>
							<h3 style={{ color: color }}>{title}</h3>
						</Accordion.Header>
						<Accordion.Body>
							<p>{files}</p>
							<p>{description}</p>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</div>
	);
}

export default ProjectList;
