import React, { Fragment, useContext } from 'react';
import ColorContext from './ColorContext';

const ColorBox = () => {
	const { state } = useContext(ColorContext);
	return (
		<Fragment>
			<div
				style={{
					width: '64px',
					height: '64px',
					background: state.color,
				}}
			/>
			<div
				style={{
					width: '32px',
					height: '32px',
					background: state.subcolor,
				}}
			/>
		</Fragment>
	);
};

export default ColorBox;