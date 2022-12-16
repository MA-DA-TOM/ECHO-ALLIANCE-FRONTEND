import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import dataEntreprise from '../data/dataEntreprise.json';
import { getDistance, getPreciseDistance } from 'geolib';
import { useEffect, useState } from 'react';

export default function BenevoleAvantage({ navigation }) {


	const entrepriseData = dataEntreprise

	const [currentPosition, setCurrentPosition] = useState(null)
	useEffect(() => {
		(async () => {
			const { status } = await Location.requestForegroundPermissionsAsync();
			if (status === 'granted') {
				Location.watchPositionAsync({ distanceInterval: 10 },
					(location) => {
						setShowsUserLocation(true)
						setCurrentPosition(location.coords)
					});
			}
		})();
	}, []);

	const entreprises = entrepriseData.map((data, i) => {
		const calculatePreciseDistance = () => {

			if (currentPosition) {
				var pdis = getPreciseDistance(
					{ latitude: currentPosition.latitude, longitude: currentPosition.longitude },
					{ latitude: data.coordinates.latitude, longitude: data.coordinates.longitude },
				);
				let total = Math.round(pdis / 1000)
				return total
			}

		};

		return (
			<View style={styles.container2} key={i}>
				<Text>{calculatePreciseDistance()} / {data.profession} / </Text>
			</View>
		)
	})


	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.title}>Avantages</Text>
			</View>

			<View style={styles.container3}>
				<Text style={styles.txt}>
					Distance / Entreprise / Avantages
				</Text>
				{entreprises}
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
	},
	header: {
		marginRight: "5%",
		marginLeft: "5%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-end",
	},
	home: {
		height: 30,
		width: 30,
	},

	container1: {
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	container2: {
		marginLeft: "5%",
	},
	container3: {
		backgroundColor: "#ffffff",
		margin: 5,
		padding: 5,
		borderWidth: 2,
	},
	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 15,
	},
});
