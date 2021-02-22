import React, { useState } from 'react';
import { Project } from '../components';
import { Projects } from '../fixtures';

const ProjectContainer = () => {
	const [active, setActive] = useState(1);
	const total = Projects.length;
	// console.log(total);

	const next = () => {
		if (active === total) {
			setActive(1);
		} else {
			setActive(active + 1);
		}
		console.log(active);
	};

	const previous = () => {
		if (active === 1) {
			setActive(total);
		} else {
			setActive(active - 1);
		}
		console.log(active);
	};
	return (
		<Project>
			<Project.Controls next={next} previous={previous} />
			<Project.Paging data={Projects} active={active} />
			<Project.List data={Projects} active={active} />
		</Project>
	);
};

export default ProjectContainer;
