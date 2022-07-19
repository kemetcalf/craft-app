import "./App.scss";
import uuid from "react-uuid";
import { useState } from "react";
import NavBar from "./components/NavBar.js";
import PlanForm from "./components/PlanForm";
import ProjectList from "./components/ProjectList";

function App({ callback }) {
	// Array of projects with state update
	const [projects, updateProjects] = useState([]);

	//addProject handler appends array of projects with new project input; function passed as props to the PlanForm; projects array passed as props to ProjectList
	const addProject = (projectInfo) => {
		updateProjects([...projects, { id: uuid(), ...projectInfo }]);
	};

	console.log(projects);

	return (
		<div ref={callback}>
			<NavBar />
			<h1 className="text-secondary mt-2 ms-3">Welcome to WIPit!</h1>
			<h5 className="text-info mt-2 ms-5">
				Let's plan a project! Enter your project details and press submit to
				begin
			</h5>
			<PlanForm addProject={addProject} />
			<ProjectList projects={projects} />
		</div>
	);
}

export default App;
