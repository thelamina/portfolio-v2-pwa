import { Switch, Route, useLocation } from 'react-router-dom';
import { Home, NotFound, About, Works, Contact } from './pages';
import { ROUTES } from './constants';
// import { Cursor } from './components';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<>
			{/* <Cursor /> */}
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route exact path={ROUTES.HOME}>
						<Home />
					</Route>
					<Route exact path={ROUTES.ABOUT}>
						<About />
					</Route>
					<Route exact path={ROUTES.WORKS}>
						<Works />
					</Route>
					<Route exact path={ROUTES.CONTACT}>
						<Contact />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
};

export default App;
