function Project(props) {
	const { id, title, color } = props;

	return (
		<div>
			<p>Project Home</p>
			<h3>Check out {title}</h3>
		</div>
	);
}

export default Project;
