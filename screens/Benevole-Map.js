import { View, StyleSheet, Modal, TextInput, TouchableOpacity, Text, onPress } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Marker } from 'react-native-maps';


const eventsData = [
	{ "nameAssociation": "SDF Asso", "date": "30/01/2023", "adresse": "56 Rue Aldona, 33400 Talence, France", "coordinates": { "latitude": 44.79873636799764, "longitude": -0.5874810550146314 } },

	{ "nameAssociation": "SPORT Asso", "date": "31/01/2023", "adresse": "146 Rue Stéhélin, 33200 Bordeaux, France", "coordinates": { "latitude": 44.856995219354715, "longitude": -0.6325868834126513 } },

	{ "nameAssociation": "SPORT Asso", "date": "30/01/2023", "adresse": "60 Rue du Sablonat, 33800 Bordeaux, France", "coordinates": { "latitude": 44.817962861408155, "longitude": -0.5750093973930537 } },

	{ "nameAssociation": "ECO Asso", "date": "04/02/2023", "adresse": "93 Quai du Président Wilson, 33130 Bègles, France", "coordinates": { "latitude": 44.815483870081046, "longitude": -0.5319821785986134 } },

	{ "nameAssociation": "ECO Asso", "date": "24/01/2023", "adresse": "14 Rue Surcouf, 33700 Mérignac, France", "coordinates": { "latitude": 44.81347479521144, "longitude": -0.6542044232900035 } },

	{ "nameAssociation": "ECO Asso", "date": "30/02/2023", "adresse": "44 Rue Permentade, 33000 Bordeaux, France", "coordinates": { "latitude": 44.83252132827287, "longitude": -0.5687735685822148 } },

	{ "nameAssociation": "ECO Asso", "date": "15/01/2023", "adresse": "25 Rue Auguste Mérillon, 33000 Bordeaux, France", "coordinates": { "latitude": 44.826799736498266, "longitude": -0.5881046378956434 } },
]

const associationsData = [
	{ "name": "ECO Asso", "adresse": "56 bis Rue Amédée Saint-Germain, 33800 Bordeaux, France", "coordinates": { "latitude": 44.83703554891115, "longitude": -0.5479874725464184 } },

	{ "name": "SPORT Asso", "adresse": "47 Rue de Lorraine, 33400 Talence, France", "coordinates": { "latitude": 44.82213481905809, "longitude": -0.5913061628141958 } },

	{ "name": "SDF Asso", "adresse": "69 Rue Frédéric Bentayoux, 33300 Bordeaux, France", "coordinates": { "latitude": 44.85727856040841, "longitude": -0.5788635625082716 } }
]

const entreprisesData = [
	{ "name": "Boulangerie Bensmaini", "profession": "Boulanger", "adresse": "30 Rue Charles Tournemire, 33300 Bordeaux", "coordinates": { "latitude": 44.873600006103516, "longitude": -0.5714890360832214 } },

	{ "name": "E.LECLERC", "profession": "Supermarché", "adresse": "155 Cr Saint-Louis, 33300 Bordeaux", "coordinates": { "latitude": 44.8404, "longitude": -0.5805 } },

	{ "name": "La Comtesse", "profession": "Bar", "adresse": "25 Rue Parlement Saint-Pierre, 33000 Bordeaux", "coordinates": { "latitude": 44.8403895, "longitude": -0.5715296 } }
]


export default function MapScreen() {


	const [currentPosition, setCurrentPosition] = useState(null)
	useEffect(() => {
		(async () => {
			const { status } = await Location.requestForegroundPermissionsAsync();

			if (status === 'granted') {
				Location.watchPositionAsync({ distanceInterval: 10 },
					(location) => {
						setCurrentPosition(location.coords);
					});
			}
		})();
	}, []);

	//Calcul de la distance de l'individu avec tous les autres composants
	const calculatePreciseDistance = () => {
		var pdis = getPreciseDistance(
			{ latitude: currentPosition.latitude, longitude: currentPosition.longitude },
			{ latitude: data.coordinates.latitude, longitude: data.coordinates.longitude },
		);
		let total = Math.round(pdis / 1000)
		return total.toString()
	};


	//Markers des assos, events et entreprises
	const associations = associationsData.map((data, i) => {
		return (
			<Marker key={i} coordinate={data.coordinates} pinColor="#292FFE" title={data.name} description={calculatePreciseDistance() + data.adresse} >
			</Marker>
		)
	})

	const events = eventsData.map((data, i) => {
		return (
			<Marker key={i} coordinate={data.coordinates} pinColor="#fecb2d" title={data.nameAssociation} description={calculatePreciseDistance() + data.adresse} >
			</Marker>
		)
	}
	)

	const entreprises = entreprisesData.map((data, i) => {
		return (
			<Marker key={i} coordinate={data.coordinates} pinColor="#F7200F" title={data.name + data.profession} description={calculatePreciseDistance() + data.adresse} >
			</Marker>
		)
	})


	const places = entreprises + events + associations

	return (
		<View style={{ flex: 1 }}>

			<MapView mapType="hybrid" style={{ flex: 1 }}>
				{currentPosition && places}

			</MapView>
		</View>
	);
}