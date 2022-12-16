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
	Modal,
} from "react-native";
import dataEvent from "../data/dataEvent.json";
import { getDistance, getPreciseDistance } from "geolib";
import { useEffect, useState } from "react";

export default function BenevoleSearch({ navigation }) {
	const eventsData = dataEvent;

	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const handleFilterModal = () => {
		setIsFilterVisible(!isFilterVisible);
	};

	const [isSearchAdvanceVisible, setIsSearchAdvanceVisible] = useState(false);
	const handleSearchAdvanceModal = () => {
		setIsSearchAdvanceVisible(!isSearchAdvanceVisible);
	};

	const modalFunction = () => {
		if (isFilterVisible) {
			return (
				<Modal visible={isFilterVisible}>
					<View style={styles.container1}>
						<View style={styles.container11}>
							<View style={styles.container111}></View>
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
						</View>

						<TouchableOpacity style={styles.applyButton}>
							<View>
								<Text style={styles.textApply}>Apply</Text>
							</View>
						</TouchableOpacity>
					</View>
				</Modal>
			);
		}
		if (isSearchAdvanceVisible) {
			return (
				<Modal visible={isSearchAdvanceVisible}>
					<View style={styles.container1}>
						<View style={styles.container11}>
							<View style={styles.container111}></View>
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
						</View>
						<TouchableOpacity style={styles.applyButton}>
							<View>
								<Text style={styles.textApply}>Apply</Text>
							</View>
						</TouchableOpacity>
					</View>
				</Modal>
			);
		}
	};

	// const modal = modalFunction()

	const [currentPosition, setCurrentPosition] = useState(null);
	useEffect(() => {
		(async () => {
			const { status } =
				await Location.requestForegroundPermissionsAsync();
			if (status === "granted") {
				Location.watchPositionAsync(
					{ distanceInterval: 10 },
					(location) => {
						setShowsUserLocation(true);
						setCurrentPosition(location.coords);
					}
				);
			}
		})();
	}, []);

	const events = eventsData.map((data, i) => {
		const calculatePreciseDistance = () => {
			if (currentPosition) {
				var pdis = getPreciseDistance(
					{
						latitude: currentPosition.latitude,
						longitude: currentPosition.longitude,
					},
					{
						latitude: data.coordinates.latitude,
						longitude: data.coordinates.longitude,
					}
				);
				let total = Math.round(pdis / 1000);
				return total;
			}
		};
		return (
			<View style={styles.container2} key={i}>
				<Text>
					{data.date} / {calculatePreciseDistance()} /{" "}
					{data.nameAssociation}
				</Text>
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
		);
	});

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.search}>
				<TouchableOpacity onPress={() => handleSearchAdvanceModal()}>
					<View style={styles.searchButton}>
						<Text style={styles.searchText}>Recherche Avancée</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleFilterModal()}>
					<View style={styles.filterButton}>
						<Text style={styles.filterText}>Filtre</Text>
					</View>
				</TouchableOpacity>
			</View>

			{modalFunction()}

			<ScrollView style={styles.scrollView}>
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
		alignItems: "center",
		margin: 100,
	},
	search: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title1: {
		fontSize: 10,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	container2: {
		margin: "1%",
		padding: "1%",
		flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#ffffff",
		borderWidth: 0.5,
	},
	tick: { height: 40, width: 40 },

	button: {
		alignItems: "center",
		padding: 1,
		margin: 5,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginLeft: "10%",
		borderWidth: 1,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
		marginTop: 10,
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
	cross: { height: 40, width: 40 },
	searchButton: {
		alignItems: "center",
		height: 30,
		width: 180,
		backgroundColor: "#0CA789",
		borderRadius: 10,
		padding: 5,
		margin: 5,
		borderWidth: 1,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},
	searchText: {
		color: "#ffffff",
		fontWeight: "600",
		fontSize: 16,
	},
	filterButton: {
		alignItems: "center",
		height: 30,
		width: 180,
		backgroundColor: "#0CA789",
		borderRadius: 10,
		padding: 5,
		margin: 5,
		borderWidth: 1,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},
	filterText: {
		color: "#ffffff",
		fontWeight: "600",
		fontSize: 16,
	},
	applyButton: {
		alignItems: "center",
		height: 30,
		width: 180,
		backgroundColor: "#0CA789",
		borderRadius: 10,
		padding: 5,
		margin: 5,
		borderWidth: 1,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},
	textApply: { color: "#ffffff", fontWeight: "600", fontSize: 16 },
	buttonOpacity: { backgroundColor: "#ffffff", width: 40, height: 40 },
	container11: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	container111: {
		backgroundColor: "#ffffff",
		width: "280%",
	},
});
