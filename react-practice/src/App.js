import React from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import About from './Chapter_13/About';
import Home from './Chapter_13/Home';
import Profile from './Chapter_13/Profile';
import Profiles from './Chapter_13/Profiles';
import HistorySample from './Chapter_13/HistorySample';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="/">홈</Link>
					</li>
					<li>
						<Link to="/about">소개</Link>
					</li>
					<li>
						<Link to="/profiles">프로필</Link>
					</li>
					<li>
						<Link to="/history">History 예제</Link>
					</li>
				</ul>
				<hr />
				<Routes>
					<Route path="/" element={<Home />} exact={true} />
					<Route path="/about" element={<About />} />
					<Route path="/profiles/*" element={<Profiles />} />
					<Route path="/history" element={<HistorySample />} />
					<Route path="/*" element={<h1>요청하신 페이지를 찾을 수 없습니다.</h1>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;