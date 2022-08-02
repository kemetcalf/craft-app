import "./App.scss";
import uuid from "react-uuid";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import PlanForm from "./components/PlanForm";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import PageNotFound from "./components/PageNotFound";

function App({ callback }) {
	const LOCAL_STORAGE_KEY = "projects";
	// Array of projects with state
	const [projects, updateProjects] = useState([]);

	//addProject handler appends array of projects with new project input; function passed as props to the PlanForm; projects array passed as props to ProjectList
	const addProject = (projectInfo) => {
		updateProjects([...projects, { ...projectInfo, id: uuid() }]);
	};

	console.log(projects);

	useEffect(() => {
		const retrieveProjects = JSON.parse(
			localStorage.getItem(LOCAL_STORAGE_KEY)
		);
		if (retrieveProjects) updateProjects(retrieveProjects);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
	}, [projects]);

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
					element={<PlanForm addProject={addProject} projects={projects} />}
				></Route>
				<Route
					exact
					path="/projectlist"
					element={<ProjectList projects={projects} />}
				></Route>
				<Route
					path="/project/:projectId"
					element={<ProjectDetail projects={projects} />}
				/>
				<Route exact path="*" element={<PageNotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
