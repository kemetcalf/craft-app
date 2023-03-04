import Accordion from "react-bootstrap/Accordion";
import { Link, Outlet } from "react-router-dom";

function ProjectList({ projects }) {
	return (
		<div>
			<Accordion defaultActiveKey={["0"]} alwaysOpen>
				{projects.map(({ id, title, color, description }) => (
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
							{/* <p>{files}</p> */}
							<p>{description}</p>
							<Link to={`/project/${id}`}>Details</Link>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
			<Outlet />
		</div>
	);
}

export default ProjectList;
