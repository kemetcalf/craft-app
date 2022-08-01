import "./App.scss";
import uuid from "react-uuid";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar.js";
import PlanForm from "./components/PlanForm";
import ProjectList from "./components/ProjectList";
import Project from "./components/ProjectDetail";

function App({ callback }) {
	// Array of projects with state update
	const [projects, updateProjects] = useState([]);

	//addProject handler appends array of projects with new project input; function passed as props to the PlanForm; projects array passed as props to ProjectList
	const addProject = (projectInfo) => {
		updateProjects([...projects, { ...projectInfo, id: uuid() }]);
	};

	// const ;

	console.log(projects);

	return (
		<div ref={callback}>
			<NavBar />
			<h1 className="text-secondary mt-2 ms-3">Welcome to WIPit!</h1>
			<h5 className="text-info mt-2 ms-5">
				Let's plan a project! Enter your initial project details and press
				submit
			</h5>
			<Routes>
				<Route
					exact
					path="/"
					element={<PlanForm addProject={addProject} />}
				></Route>
				<Route
					exact
					path="/projectlist"
					element={<ProjectList projects={projects} />}
				></Route>
				<Route
					exact
					path={`/projectdetail:${projects.id}`}
					element={<Project />}
				></Route>
				{/* <Route
					exact
					path="/"
					element={
				></Route> */}
			</Routes>
		</div>
	);
}

export default App;
