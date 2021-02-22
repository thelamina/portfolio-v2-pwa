import React from 'react';
import {
	Container,
	Inner,
	Pitch,
	Main,
	Title,
	Description,
	ListItem,
	List,
	ListGroup,
} from './styles';

const Skill = ({ children, ...restProps }) => {
	return (
		<Container
		// animate={{ y: 0, opacity: 1 }}
		// initial={{ y: '100vh', opacity: 0 }}
		// transition={{
		// 	duration: 0.7,
		// 	delay: 0.2,
		// 	type: 'tween',
		// }}
		>
			<Inner {...restProps}>{children}</Inner>
		</Container>
	);
};

Skill.Pitch = ({ children, ...restProps }) => {
	return (
		<Pitch {...restProps}>
			<Description>{children}</Description>
		</Pitch>
	);
};

Skill.Main = ({ children, ...restProps }) => {
	return (
		<Main
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.5,
			}}
			{...restProps}
		>
			{children}
		</Main>
	);
};

Skill.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Skill.ListGroup = ({ children, ...restProps }) => {
	return <ListGroup {...restProps}>{children}</ListGroup>;
};

Skill.ListGroup.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Skill.ListGroup.List = ({ data, ...restProps }) => {
	return (
		<List {...restProps}>
			{data.map((item, i) => (
				<ListItem
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: '10vw' }}
					transition={{
						duration: 0.3,
						delay: i * 0.5,
					}}
					key={item}
				>
					{item}
				</ListItem>
			))}
		</List>
	);
};

export default Skill;
