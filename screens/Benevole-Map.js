import {
	View,
	StyleSheet,
	Modal,
	TextInput,
	TouchableOpacity,
	Text,
	onPress,
	SafeAreaView,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { getDistance, getPreciseDistance } from "geolib";
import dataEvent from "../data/dataEvent.json";
import dataEntreprise from "../data/dataEntreprise.json";
import dataAssociation from "../data/dataAssociation.json";
import Checkbox from "expo-checkbox";
import Slider from "@react-native-community/slider";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BACKEND_ADRESS = '10.33.210.252:3000';


export default function MapScreen() {
	const eventsData = dataEvent;
	const associationsData = dataAssociation;
	const entreprisesData = dataEntreprise;

	const [sliderValue, setSliderValue] = useState();

	const rayon = () => {
		const result = Math.round(sliderValue * 1) / 1;
		if (sliderValue >= 101) {
			return "+100km";
		} else {
			return `${result} km`;
		}
	};

	const [showsUserLocation, setShowsUserLocation] = useState(false);
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
		// fetch(`http://${BACKEND_ADRESS}/places/${user.name}`)
		// .then((response) => response.json())
		// .then((data) => {
		//   data.result && dispatch(importPlace(data.places));
		//  });
	}, []);

	const [isAssociationSelected, setIsAssociationSelected] = useState(true);

	//Markers des assos, events et entreprises
	const associations = associationsData.map((data, i) => {
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
		const opacity = calculatePreciseDistance() > sliderValue ? 0 : 1;
		if (isAssociationSelected && opacity === 1) {
			return (
				<Marker
					key={i}
					opacity={opacity}
					coordinate={data.coordinates}
					pinColor="red"
					title={data.name}
				></Marker>
			);
		}
	});

	const [isEventsSelected, setIsEventsSelected] = useState(true);
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
		const opacity = calculatePreciseDistance() > sliderValue ? 0 : 1;

		if (isEventsSelected && opacity === 1) {
			return (
				<Marker
					key={i}
					coordinate={data.coordinates}
					pinColor="orange"
					title={data.nameAssociation}
				></Marker>
			);
		}
	});

	const [isEntreprisesSelected, setIsEntreprisesSelected] = useState(true);
	const entreprises = entreprisesData.map((data, i) => {
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
		const opacity = calculatePreciseDistance() > sliderValue ? 0 : 1;

		if (isEntreprisesSelected && opacity === 1) {
			return (
				<Marker
					key={i}
					coordinate={data.coordinates}
					pinColor="blue"
					title={data.name && data.profession}
				></Marker>
			);
		}
	});

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.filter}>
				<View style={styles.checkboxContainer}>
					<Checkbox
						value={isAssociationSelected}
						onValueChange={setIsAssociationSelected}
						style={styles.checkbox}
					/>
					<Text style={styles.label}>Associations</Text>

					<Checkbox
						value={isEntreprisesSelected}
						onValueChange={setIsEntreprisesSelected}
						style={styles.checkbox}
					/>
					<Text style={styles.label}>Entreprises</Text>

					<Checkbox
						value={isEventsSelected}
						onValueChange={setIsEventsSelected}
						style={styles.checkbox}
					/>
					<Text style={styles.label}>Evénements</Text>
				</View>

				<View style={styles.slider}>
					<Slider
						style={{ width: 200, height: 40 }}
						step={5}
						minimumValue={5}
						maximumValue={101}
						minimumTrackTintColor="#FFFFFF"
						maximumTrackTintColor="#000000"
						value={sliderValue}
						onValueChange={(value) => {
							setSliderValue(value);
						}}
					/>
					<Text style={styles.label}>
						{" "}
						RAYON: {rayon()} autour de moi{" "}
					</Text>
				</View>
			</View>

			<MapView
				mapType="terrain"
				style={{ flex: 1 }}
				showsUserLocation={showsUserLocation}
			>
				{entreprises}
				{associations}
				{events}
			</MapView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	filter: {
		backgroundColor: "#0CA789",
	},
	checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	checkbox: {
		alignSelf: "center",
		color: "#ffffff",
		backgroundColor: "#ffffff",
	},
	label: {
		margin: 8,
		color: "#ffffff",
		fontWeight: "bold",
	},
	slider: {
		alignItems: "center",
		justifyContent: "center",
	},
	modalMarker: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
});
