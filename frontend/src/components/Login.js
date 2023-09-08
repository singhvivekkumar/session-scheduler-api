
const Login = () => {
    
	const authenticationUser = async () => {
		const response = await fetch("/api/calendar");
		const data = await response.json();
		console.log(data);
		return data;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className=" flex justify-center items-center">
			<button
				onClick={() => authenticationUser}
				className=" p-2 px-2 text-center text-lg font-semibold border-double border ">
				Click me
			</button>
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="summary">summary</label>
					<br />
					<input />
				</form>
			</div>
		</div>
	);
};

export default Login;
