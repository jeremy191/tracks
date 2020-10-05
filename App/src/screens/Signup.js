import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation'; // like component did mount etc

const Signup = () => {
	const { state, signup,clearErrorMessage } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} onWillBlur={clearErrorMessage}/>
			<AuthForm
				headerText="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				text="Sign Up"
				onSubmit={signup}
			/>
			<NavLink
				routeName="Signin"
				text="Already have an account? Sign in instead!"
			/>
		</View>
	);
};
Signup.navigationOptions = () => {
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

export default Signup;
