import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
	return (
		<>
			<Navbar
				bg="primary"
				expand="lg"
				className="navbar navbar-dark bg-primary mb-3"
				sticky="top"
			>
				<Container fluid>
					<Navbar.Brand href="#">WIPit</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement="end"
					>
						<Offcanvas.Header closeButton className="secondary">
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
								WIPit
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">My Projects</Nav.Link>
								<NavDropdown
									title="Process"
									id={`offcanvasNavbarDropdown-expand-lg`}
								>
									<NavDropdown.Item href="#action3">Planning</NavDropdown.Item>
									<NavDropdown.Item href="#action4">Materials</NavDropdown.Item>
									<NavDropdown.Item href="#action5">Progress</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action6">
										Comissions and Collaborations
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
