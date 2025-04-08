import Setting from "./Setting";
import Profile from "./Profile";
import Interest from "./Interest";

import "../style.css";
export default function TabForm() {
	const tabs = [
		{
			name: "Profile",
			component: Profile,
		},
		{
			name: "Setting",
			component: Setting,
		},
		{
			name: "Interest",
			component: Interest,
		},
	];
	return (
		<div>
			<div className="heading-container">
				{tabs.map((t) => (
					<div className="heading" key={t.name}>
						{t.name}
					</div>
				))}
			</div>
		</div>
	);
}
