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
					<Text style={styles.txt}>Nom:</Text>
					<Text></Text>

					<Text style={styles.txt}>Adresse:</Text>
					<Text></Text>

					<Text style={styles.txt}>Horaires:</Text>
					<Text></Text>

					<Text style={styles.txt}>Site internet:</Text>
					<Text></Text>

					<Text style={styles.txt}>Numéro de téléphone:</Text>
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
				<View style={styles.container3}></View>
				<View style={styles.subcontainer}>
					<Text style={styles.txt}>Paliers:</Text>
				</View>
				<View style={styles.container4}></View>
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
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	container1: { borderWidth: 1, borderColor: "#ffffff", paddingLeft: "1%" },
	subcontainer: { paddingLeft: "1%" },
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
		height: 160,
		width: 160,
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
	},
	container4: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: "15%",
		width: "98%",
		marginLeft: 4,
		borderColor: "#ffffff",
	},

	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
	},

	txt: {
		fontWeight: "bold",
		color: "#ffffff",
		textDecorationLine: "underline",
	},
	logo: {
		height: 70,
		width: 70,
	},
});
