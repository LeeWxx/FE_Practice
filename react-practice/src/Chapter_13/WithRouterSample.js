import { useParams, useLocation, useNavigate } from 'react-router-dom';

const WithRouterSample = () => {
	const params = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div>
			<h4>Location</h4>
			<textarea
				style={{ height: '150px' }}
				value={JSON.stringify(location, null, 4)}
				readOnly
			/>

			<h4>Params</h4>
			<textarea style={{ height: '150px' }} value={JSON.stringify(params)} readOnly />

			<button onClick={() => navigate('/')}>홈으로</button>
		</div>
	);
};

export default WithRouterSample;