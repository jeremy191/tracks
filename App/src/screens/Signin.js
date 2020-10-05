import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation'; // like component did mount etc

const Signin = () => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents
				onWillFocus={clearErrorMessage}
				onWillBlur={clearErrorMessage}
			/>
			<AuthForm
				headerText="Sign In for Tracker"
				errorMessage={state.errorMessage}
				text="Sign In"
				onSubmit={signin}
			/>
			<NavLink
				routeName="Signup"
				text="Don't have an account? Sign Up instead!"
			/>
		</View>
	);
};

Signin.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250,
	},
});

export default Signin;
