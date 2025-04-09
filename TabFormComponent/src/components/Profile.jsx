export default function Profile({ data, setData }) {
	const { name, email, age } = data;
	const handleDataChange = (e, item) => {
		setData((prevState) => ({
			...prevState, //coping prev state
			[item]: e.target.value,
		}));
	};
	return (
		<div>
			<div>
				<label>
					Name:
					<input
						type="text"
						value={name}
						onChange={(e) => handleDataChange(e, "name")}
					/>
				</label>
			</div>
			<div>
				<label>
					Email:
					<input
						type="text"
						value={email}
						onChange={(e) => handleDataChange(e, "email")}
					/>
				</label>
			</div>
			<div>
				<label>
					Age:
					<input
						type="text"
						value={age}
						onChange={(e) => handleDataChange(e, "age")}
					/>
				</label>
			</div>
		</div>
	);
}
