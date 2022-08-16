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

	//addProject handler appends array of projects with new project input;
	// function passed as props to the PlanForm;
	// projects array passed as props to ProjectList
	const addProject = (projectInfo) => {
		updateProjects([...projects, { ...projectInfo, id: uuid() }]);
	};

	const removeProjectHandler = (id) => {
		const newProjectList = projects.filter((project) => {
			return project.id !== id;
		});

		updateProjects(newProjectList);
	};

	// console.log(projects);

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
			<Routes>
				<Route
					exact
					path="/"
					element={<PlanForm addProject={addProject} projects={projects} />}
				/>
				<Route
					exact
					path="/projectlist"
					element={<ProjectList projects={projects} />}
				/>
				<Route
					path="/project/:projectId"
					element={
						<ProjectDetail
							projects={projects}
							handledelete={removeProjectHandler}
						/>
					}
				/>

				<Route exact path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
