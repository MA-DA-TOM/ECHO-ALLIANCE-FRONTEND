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
import { useDispatch } from 'react-redux';
import { updateInfoAsso } from '../reducers/association';
import { useSelector } from 'react-redux'

export default function BenevoleMission({ navigation }) {

	const Nom = useSelector((state) => state.user.value[0].name);
	const Adresse = useSelector((state) => state.user.value[0].Adresse);
	const siteWeb = useSelector((state) => state.user.value[0].siteWeb);
	const description = useSelector((state) => state.user.value[0].description);

	return (
		<ImageBackground
			source={require("../assets/backgrounda.jpg")}
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
						{/* <Text>{Nom}</Text> */}
						<Text style={styles.fakeText}>		echoAlliance</Text>
					</View>
					<View style={styles.fake}>
					<Text style={styles.txt}>Adresse:</Text>
					{/* <Text>{Adresse}</Text> */}
					<Text style={styles.fakeText}>	 10 Avenue du Président Robert Schuman, 33110 Le Bouscat, France</Text>
				</View>

				<View style={styles.fake}>
					<Text style={styles.txt}>Site internet:</Text>
					{/* <Text>{siteWeb}</Text> */}
					<Text style={styles.fakeText}		>www.echoAlliance.fr</Text>
				</View>
			</View>
			<View style={styles.container2}>
				<View style={styles.container2b}>
					<Image
						style={styles.logo}
						source={require("../assets/logo-map.png")}
					/>
				</View>
			</View>
			<Text style={styles.txt}>Description:</Text>
			<View style={styles.container3}>
				{/* <Text>{description}</Text> */}
				<Text> Maintenance et amélioration de la plateforme echoAlliance</Text>
			</View>
		</KeyboardAvoidingView>
		</ImageBackground >
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
		justifyContent: "space-evenly",
	},

	container1: { 
		borderWidth: 1, 
		borderColor: "#ffffff", 
		backgroundColor: '#ffffff',
		opacity: 0.7, 
	},
	container2: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		height: 200,
		marginBottom: "20%",
	},
	profileimage: {
		height: 60,
		width: 60,
		marginTop: "30%",
	},
	container0: {
		alignItems: "center",
		justifyContent: "center",
	},
	container00: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	container2: {
		alignItems: "center",
		justifyContent: "center",
	},
	container2b: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
	},
	container3: {
		borderWidth: 1,
		height: "20%",
		width: "98%",
		marginLeft: 4,
		borderColor: "#ffffff",
		backgroundColor: '#ffffff',
		opacity: 0.6, 
	},
	images: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
	},

	association: { fontSize: 30, fontWeight: "600", color: "#0CA789" },

	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		paddingLeft: "1%",

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
