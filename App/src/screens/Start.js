import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const Start = () => {
	const { onStartSignin } = useContext(AuthContext);

	useEffect(() => {
		onStartSignin();
	}, []);
	return null; // or initial logo
};

export default Start;