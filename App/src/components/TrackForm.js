import React, { useContext } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
	const {
		state: { title, recording, locations },
		startRecording,
		stopRecording,
		changeTitle,
	} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
	return (
		<>
			<Spacer>
				<Input
					placeholder="Title"
					autoCapitalize="none"
					value={title}
					onChangeText={changeTitle}
					autoCorrect={false}
				/>
			</Spacer>
			<Spacer>
				{recording ? (
					<Button title="Stop" onPress={stopRecording} />
				) : (
					<Button title="Start Recording" onPress={startRecording} />
				)}
			</Spacer>
            
			<Spacer>
				{!recording && locations.length ? (
					<Button title="Save Recording" onPress={saveTrack}/>
				) : null}
			</Spacer>
		</>
	);
};
const styles = StyleSheet.create({});

export default TrackForm;
