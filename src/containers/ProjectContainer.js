import React, { useState } from 'react';
import { Project } from '../components';
import { Projects } from '../fixtures';

const ProjectContainer = () => {
	const [active, setActive] = useState(1);

	const total = Projects.length;
	const next = () => {
		if (active === total) {
			setActive(1);
		} else {
			setActive(active + 1);
		}
	};

	const previous = () => {
		if (active === 1) {
			setActive(total);
		} else {
			setActive(active - 1);
		}
	};

	const handleScroll = (e) => {
		const y = e.deltaY;
		setTimeout(() => {
			if (y < 0 && y > -5) {
				// console.log(y);
				previous();
			} else if (y > 35 && y < 40) {
				// console.log(y);
				next();
			}
			e.preventDefault();
		}, 300);
	};

	return (
		<Project onWheel={(e) => handleScroll(e)}>
			<Project.Controls next={next} previous={previous} />
			<Project.Paging data={Projects} active={active} />
			<Project.List data={Projects} active={active} />
		</Project>
	);
};

export default ProjectContainer;
