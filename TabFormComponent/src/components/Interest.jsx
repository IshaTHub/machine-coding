export default function Interest(data, setData) {
	const { interests = [] } = data || {};
	return (
		<div>
			<div>
				<label>
					<input
						type="checkbox"
						name="coding"
						checked={interests.includes("coding")}
					/>
					Coding
				</label>
			</div>
		</div>
	);
}
