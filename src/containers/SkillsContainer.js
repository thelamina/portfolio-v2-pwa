import React, { useState } from 'react';
import { Skill } from '../components';
import { Skills } from '../fixtures';
import { AnimatePresence } from 'framer-motion';

const SkillsContainer = () => {
	const [active, setActive] = useState(0);
	return (
		<Skill>
			<Skill.Pitch>
				<Skill.Pitch.Text>
					I’m a front-end engineer with loads of experience. I work
					with teams across the globe to create high performance &
					rich interactive websites that work across all platforms &
					devices.
				</Skill.Pitch.Text>
				<Skill.Pitch.Link
					href={process.env.REACT_APP_RESUME_URL}
					target='_blank'
					rel='noreferrer'
				>
					My Resume
				</Skill.Pitch.Link>
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
									onClick={() =>
										active === i
											? setActive(null)
											: setActive(i)
									}
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
