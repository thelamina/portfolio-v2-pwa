import React from 'react';
import {
	Container,
	Inner,
	Controls,
	ControlButton,
	Paging,
	PagingList,
	PagingListItem,
	ProjectSlider,
	ProjectDetail,
	ProjectImage,
	ProjectLink,
	ProjectList,
	ProjectListItem,
	ProjectLogo,
	Title,
	Stack,
	Description,
} from './styles';
import { pad } from '../../utils';
import { AnimatePresence } from 'framer-motion';

const Project = ({ children, ...restProps }) => {
	return (
		<Container
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: '100vh', opacity: 0 }}
			transition={{
				duration: 0.7,
				delay: 0.2,
				type: 'tween',
				// stiffness: 120,
			}}
		>
			<Inner {...restProps}>{children}</Inner>
		</Container>
	);
};

Project.Controls = ({ next, previous, showAll, ...restProps }) => {
	return (
		<Controls {...restProps}>
			<Project.Controls.Button
				onClick={previous}
				icon={
					<svg
						width='14'
						height='9'
						viewBox='0 0 14 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 8L7.48629 2L13 8'
							stroke='#B0B0B0'
							stroke-width='2'
						/>
					</svg>
				}
			/>
			<Project.Controls.Button onClick={showAll} icon='~' />
			<Project.Controls.Button
				onClick={next}
				icon={
					<svg
						width='14'
						height='9'
						viewBox='0 0 14 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 0.999998L7.48629 7L13 1'
							stroke='#B0B0B0'
							stroke-width='2'
						/>
					</svg>
				}
			/>
		</Controls>
	);
};

Project.Controls.Button = ({ onClick, icon, ...restProps }) => {
	return (
		<ControlButton onClick={onClick} {...restProps}>
			{icon}
		</ControlButton>
	);
};

Project.Paging = ({ data, active, ...restProps }) => {
	return (
		<Paging {...restProps}>
			<PagingList>
				{data.map((dt, i) => (
					<Project.Paging.Item
						key={dt.key}
						active={active === i + 1 ? true : false}
						text={pad(active, 2)}
					/>
				))}
			</PagingList>
		</Paging>
	);
};

Project.Paging.Item = ({ active, text, ...restProps }) => {
	return (
		<PagingListItem active={active} {...restProps}>
			{text}
		</PagingListItem>
	);
};

Project.List = ({ data, active }) => {
	return (
		<ProjectSlider>
			<ProjectList>
				<AnimatePresence>
					{data.map(
						(item, i) =>
							active === i + 1 && (
								<Project.List.Item
									key={item.key}
									data={item}
									// active={active === i + 1 && true}
								/>
							)
					)}
				</AnimatePresence>
			</ProjectList>
		</ProjectSlider>
	);
};

Project.List.Item = ({ data, ...restProps }) => {
	return (
		<ProjectListItem
			// exit={{ x: '100vh' }}

			{...restProps}
		>
			<ProjectLink
				href={data.url}
				target='_blank'
				rel='noreferrer'
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{
					duration: 0.7,
					delay: 0.2,
					type: 'tween',
					// stiffness: 120,
				}}
			>
				<ProjectImage src={data.image} />
				<ProjectDetail
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.9,
						type: 'tween',
						// stiffness: 120,
					}}
				>
					<Title>{data.title}</Title>

					<Description>{data.description}</Description>

					{/* <Title>YEAR</Title>
					<Description>2016</Description> */}

					<Title>TECHNOLOGIES </Title>
					{data.stack.map((s) => (
						<Stack key={s}>{s}</Stack>
					))}
				</ProjectDetail>
				<ProjectLogo src={data.icon} />
			</ProjectLink>
		</ProjectListItem>
	);
};

export default Project;
