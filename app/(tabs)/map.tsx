import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<MapView style={StyleSheet.absoluteFill} />
		</View>
	);
}