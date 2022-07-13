import "./App.scss";
import NavBar from "./components/NavBar.js";
import PlanInput from "./components/Planning";

function App() {
	return (
		<div>
			<NavBar />
			<h1 className="text-secondary mt-2 ms-3">Welcome to WIPit!</h1>
			<PlanInput />
		</div>
	);
}

export default App;
