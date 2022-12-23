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
import { useDispatch } from "react-redux";
import { updateInfo } from "../reducers/association";
import { useSelector } from "react-redux";

export default function EntrepriseProfil({ navigation }) {
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
						<Text style={styles.fakeText}>		mama works</Text>
					</View>

					<View style={styles.fake}>
						<Text style={styles.txt}>Adresse:</Text>
						<Text style={styles.fakeText}>		51 Quai Lawton, 33300 Bordeaux</Text>
					</View>

					<View style={styles.fake}>
						<Text style={styles.txt}>Horaires:</Text>
						<Text style={styles.fakeText}>		lundi-vendredi de 09:00 à 17:00</Text>
					</View>

					<View style={styles.fake}>
						<Text style={styles.txt}>Site internet:</Text>
						<Text style={styles.fakeText}>		www.mamawork.com</Text>
					</View>

					<View style={styles.fake}>
						<Text style={styles.txt}>Numéro de téléphone:</Text>
						<Text style={styles.fakeText}>		05 33 86 45 21</Text>
					</View>
				</View>

				<View style={styles.container2}>
					<Image
						style={styles.logo}
						source={require("../assets/logo-map.png")}
					/>
				</View>
				<View style={styles.subcontainer}>
					<Text style={styles.txt}>Description:</Text>
				</View>
				<View style={styles.container3}>
					<Text style={styles.fakeText}>Mama Works, c’est bien plus qu’un espace de travail, qu’un coffee shop ou qu’un lieu de réunions.
C’est un lieu de vie où on se rencontre, on apprend, on échange, on partage, on rêve !</Text>
				</View>
				<View style={styles.subcontainer}>
					<Text style={styles.txt}>Paliers:</Text>
				</View>
				<View style={styles.container4}>
					<ScrollView>
					<Text style={styles.fakeText}>Palier 1 :</Text>
					<Text>Pour 2 café acheté le 3e à moitié prix</Text>
					<Text style={styles.fakeText}>Palier 2 :</Text>
					<Text> Pour 1 café acheté, -20% sur la viennoiserie de votre choix</Text>
					<Text style={styles.fakeText}>Palier 3 :</Text>
					<Text>La formule midi à -30%</Text>
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
