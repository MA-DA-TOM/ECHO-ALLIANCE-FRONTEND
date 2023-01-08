import React from "react";
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	SafeAreaView,
	TextInput,
	ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfoUser, deleteInfoUser } from "../reducers/user";
import entreprise from "../reducers/entreprise";


const BACKEND_ADRESS = '192.168.1.62:3000';

export default function EntrepriseConnection({ navigation }) {

	const dispatch = useDispatch()

	const entrepriseReducerValue = useSelector((state) => state.user.value);
	const entrepriseData = entrepriseReducerValue[0];
	console.log(entrepriseData, 'entrepriseData')

	// if (entrepriseData) {
	// 	const offre1 = entrepriseData.offres.premier
	// 	const offre2 = entrepriseData.offres.deuxieme
	// 	const offre3 = entrepriseData.offres.troisieme
	// }


	const [palier1, setPalier1] = useState(null);
	const [palier2, setPalier2] = useState(null);
	const [palier3, setPalier3] = useState(null)

	const handlePalier = () => {
		fetch(`http://${BACKEND_ADRESS}/entreprise/offres`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: entrepriseData.email, offre1: palier1, offre2: palier2, offre3: palier3 }),
		})
		fetch(`http://${BACKEND_ADRESS}/entreprise/getone`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: entrepriseData.email, }),
		}).then((response) => response.json())
			.then((data) => {
				dispatch(deleteInfoUser());
				dispatch(updateInfoUser(data.data))
			}
			)
			// .then(navigation.navigate("EntrepriseMenu"));	
	}

	return (
		<ImageBackground
			source={require("../assets/fondecran.jpeg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container1}>
					<View style={styles.background2}>
						<Text style={styles.palier}>Palier 1</Text>
						<TextInput style={styles.input} onChangeText={(value) => setPalier1(value)} value={palier1} />
					</View>
				</View>
				<View style={styles.container1}>
					<View style={styles.background2}>
						<Text style={styles.palier}>Palier 2</Text>
						<TextInput style={styles.input} onChangeText={(value) => setPalier2(value)} value={palier2} />
					</View>
				</View>
				<View style={styles.container1}>
					<View style={styles.background2}>
						<Text style={styles.palier}>Palier 3</Text>
						<TextInput style={styles.input} onChangeText={(value) => setPalier3(value)} value={palier3} />
					</View>
				</View>

				<TouchableOpacity
					onPress={() => handlePalier()}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>Sauvegarder</Text>
				</TouchableOpacity>
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

	container1: {
		justifyContent: "space-between",
		marginLeft: "5%",
		flexWrap: "wrap",
		flexDirection: "column",
	},
	background2: {
		borderRadius: 10,
		width: "95%",
	},

	input: {
		height: 35,
		margin: 15,
		borderWidth: 1,
		width: "90%",
		backgroundColor: "#ffffff",
		padding: 5,
	},

	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginLeft: "10%",
		borderWidth: 1,
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	palier: {
		color: "#ffffff",
		marginLeft: 5,
		marginTop: 5,
		fontWeight: "bold",
	},
});
