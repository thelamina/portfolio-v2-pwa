import React, { useState } from 'react';
import { Skill } from '../components';
import { Skills } from '../fixtures';
import { AnimatePresence } from 'framer-motion';

const SkillsContainer = () => {
	const [active, setActive] = useState(0);
	return (
		<Skill>
			<Skill.Pitch>
				I’m a front-end engineer with loads of experience. I work with
				agencies across the globe to create high performance & rich
				interactive websites that work across all platforms & devices.
			</Skill.Pitch>
			<Skill.Main>
				<Skill.Title>
					Here are a few technologies I've been working with recently:
				</Skill.Title>
				<AnimatePresence exitBeforeEnter>
					<Skill.ListGroup>
						{Skills.map((data, i) => (
							<li key={data.key}>
								<Skill.ListGroup.Title
									onClick={() => setActive(i)}
								>
									{data.title}
								</Skill.ListGroup.Title>

								{active === i && (
									<Skill.ListGroup.List
										exit={{ opacity: 0 }}
										data={data.list}
									></Skill.ListGroup.List>
								)}
							</li>
						))}
					</Skill.ListGroup>
				</AnimatePresence>
			</Skill.Main>
		</Skill>
	);
};

export default SkillsContainer;
