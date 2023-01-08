import React from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	FlatList,
	View,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";

export default function EntrepriseProfil({ navigation }) {

	const entrepriseReducerValue = useSelector((state) => state.user.value);

	const entrepriseData = entrepriseReducerValue[0]
	console.log(entrepriseData)


	const Description = entrepriseData.description;
	const entrepriseNom = entrepriseData.name;

	const entrepriseAdresse = `${entrepriseData.adress.number} ${entrepriseData.adress.street} ${entrepriseData.adress.zipCode} ${entrepriseData.adress.city}`;

	const entrepriseWebsite = entrepriseData.webSite;
	const latitude = entrepriseData.adress.coordinate.latitude;
	const longitude = entrepriseData.adress.coordinate.longitude;
	const entrepriseRgion = {
		latitude: latitude,
		longitude: longitude,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	};
	const premier = entrepriseData.offers.first;
	const deuxieme = entrepriseData.offers.second;
	const troisieme = entrepriseData.offers.third;


	return (
		<ImageBackground
			source={require("../assets/fondecran.jpeg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container0}>
					<View style={styles.container00}>
						<Image
							style={styles.profileimage}
							source={require("../assets/logo-profile.png")}
						/>
					</View>
				</View>
				<View style={styles.container1}>
					<View style={styles.fake}>
						<Text style={styles.txt}>Nom:</Text>
						<Text style={styles.fakeText}>		{entrepriseNom}</Text>
					</View>

					<View style={styles.fake}>
						<Text style={styles.txt}>Adresse:</Text>
						<Text style={styles.fakeText}>		{entrepriseAdresse}</Text>
					</View>

					<View style={styles.fake}>
						<Text style={styles.txt}>Site internet:</Text>
						<Text style={styles.fakeText}>		{entrepriseWebsite}</Text>
					</View>

					{/* <View style={styles.fake}>
						<Text style={styles.txt}>Numéro de téléphone:</Text>
						<Text style={styles.fakeText}>		{entreprisePhone}</Text>
					</View> */}
				</View>

				<View style={styles.container2}>
					<MapView
						mapType="hybrid"
						style={{ height: '100%', width: "100%" }}
						initialRegion={entrepriseRgion}
					>

						<Marker
							coordinate={entrepriseRgion}
							pinColor="red"
							title="Mon Entreprise"
						/>

					</MapView>
				</View>
				<View style={styles.subcontainer}>
					<Text style={styles.txt}>Description:</Text>
				</View>
				<View style={styles.container3}>
					<Text style={styles.fakeText}>{Description}</Text>
				</View>
				<View style={styles.subcontainer}>
					<Text style={styles.txt}>Paliers:</Text>
				</View>
				<View style={styles.container4}>
					<ScrollView>
						<Text style={styles.fakeText}>Palier 1 :</Text>
						<Text>{premier}</Text>
						<Text style={styles.fakeText}>Palier 2 :</Text>
						<Text> {deuxieme}</Text>
						<Text style={styles.fakeText}>Palier 3 :</Text>
						<Text>{troisieme}</Text>
					</ScrollView>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: "100%",
	},
	container: {
		flex: 1,
		backgroundColor: "rgba(52, 52, 52, 0.5)",
		justifyContent: "space-around",
	},
	container0: {
		alignItems: "center",
		justifyContent: "center",
	},
	container00: {
		height: 120,
		width: 120,
		backgroundColor: "#ffffff",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	container1: {
		borderWidth: 1,
		borderColor: "#ffffff",
		paddingLeft: "1%",
		backgroundColor: '#ffffff',
		opacity: 0.6,
		color: ''
	},
	subcontainer: {
		paddingLeft: "1%",
	},
	profile: {
		height: 30,
		width: 30,
	},
	profileimage: {
		height: 60,
		width: 60,
		marginTop: "30%",
	},
	home: {
		height: 30,
		width: 30,
	},

	container2: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ffffff",
		borderWidth: 1,
		height: 120,
		width: 120,
		marginLeft: "30%",
	},
	container3: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: "15%",
		width: "98%",
		marginLeft: 4,
		borderColor: "#ffffff",
		backgroundColor: '#ffffff',
		opacity: 0.5,
	},
	container4: {
		// alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: "15%",
		width: "98%",
		marginLeft: 4,
		borderColor: "#ffffff",
		backgroundColor: '#ffffff',
		opacity: 0.5,
	},

	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
	},

	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		textDecorationLine: "underline",
	},
	logo: {
		height: 70,
		width: 70,
	},
	fake: {
		flexDirection: 'row'
	},
	fakeText: {
		fontWeight: 'bold',
	}
});
