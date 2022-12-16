import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	FlatList,
	ScrollView,
	Modal
} from "react-native";
import dataEvent from '../data/dataEvent.json';
import { getDistance, getPreciseDistance } from 'geolib';
import { useEffect, useState } from 'react';


export default function BenevoleSearch({ navigation }) {

	const eventsData = dataEvent;

	const [isFilterVisible, setIsFilterVisible] = useState(false)
	const handleFilterModal = () => {
		setIsFilterVisible(!isFilterVisible)
	};

	const [isSearchAdvanceVisible, setIsSearchAdvanceVisible] = useState(false)
	const handleSearchAdvanceModal = () => {
		setIsSearchAdvanceVisible(!isSearchAdvanceVisible)
	};

	const modalFunction = () => {
		if (isFilterVisible) {
			return (
				<Modal visible={isFilterVisible}>
					<View style={styles.container1}>
						<TouchableOpacity
							style={styles.buttonOpacity}
							// onPress={() => navigation.navigate("BenevoleAdvanceSearch")}
							onPress={() => handleFilterModal()}
						>
							<Image
								style={styles.cross}
								source={require("../assets/logo-cross.png")}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}>
							<View>
								<Text>Apply</Text>
							</View>
						</TouchableOpacity>
					</View>
				</Modal>
			)
		}
			if (isSearchAdvanceVisible) {
				return (
					<Modal visible={isSearchAdvanceVisible}>
						<View style={styles.container1}>
							<TouchableOpacity
								style={styles.buttonOpacity}
								// onPress={() => navigation.navigate("BenevoleAdvanceSearch")}
								onPress={() => handleSearchAdvanceModal()}
							>
								<Image
									style={styles.cross}
									source={require("../assets/logo-cross.png")}
								/>
							</TouchableOpacity>

							<TouchableOpacity style={styles.button}>
							<View>
								<Text>Apply</Text>
							</View>
						</TouchableOpacity>
						</View>
					</Modal>
				)
			};
		};
	

	// const modal = modalFunction()

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


	const events = eventsData.map((data, i) => {
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
				<Text>{data.date} / {calculatePreciseDistance()} / {data.nameAssociation}</Text>
				<TouchableOpacity
					style={styles.buttonOpacity}
					onPress={() => navigation.navigate("BenevoleMission")}
				>
					<Image
						style={styles.tick}
						source={require("../assets/logo-tick.png")}
					/>
				</TouchableOpacity>
			</View>
		)
	})




	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container0}>
				<Text style={styles.title0}>Recherche</Text>
			</View>
			<View style={styles.search}>
				<TouchableOpacity onPress={() => handleSearchAdvanceModal()}>
					<View style={styles.searchButton}>
						<Text> Recherche Avancée </Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleFilterModal()}>
					<View style={styles.searchButton}>
						<Text>Filtre </Text>
					</View>
				</TouchableOpacity>
			</View>

			{modalFunction()}

			<ScrollView style={styles.ScrollView}>
				{events}
				{events}
				{events}

			</ScrollView>

			<TouchableOpacity
				onPress={() => navigation.navigate("TabNavigator")}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Map</Text>
			</TouchableOpacity>
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
		justifyContent: "space-between",
	},
	profile: {
		height: 30,
		width: 30,
	},
	home: {
		height: 30,
		width: 30,
	},
	container0: {
		alignItems: "center",
	},
	container1: {
		alignItems: "flex-end",
		marginRight: "5%",
	},
	title0: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	search: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	searchButton: {
		borderColor: "#0CA789",
		borderWidth: 1
	},
	title1: {
		fontSize: 10,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	container2: {
		marginTop: "1%",
		marginRight: "5%",
		marginLeft: "5%",
		flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#0CA789"
	},
	tick: { height: 40, width: 40 },

	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginLeft: "10%",
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
	},
	card1: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		margin: 5,
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	lieu: {
		fontWeight: "bold",
	},
	rayon: {
		fontWeight: "bold",
	},
	date: {
		fontWeight: "bold",
	},
	domaine: {
		fontWeight: "bold",
	},
	temps: {
		fontWeight: "bold",
	},
	cross: {
		height: 30,
		width: 30,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		marginLeft: 300,
	},
});
