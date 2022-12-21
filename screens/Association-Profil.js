import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useDispatch } from 'react-redux';
import { updateInfo } from '../reducers/example';
import { useSelector } from 'react-redux'

export default function BenevoleMission({ navigation }) {

	const Nom = useSelector((state) => state.example.value[0].name);
	const Adresse = useSelector((state) => state.example.value[0].Adresse);
	const siteWeb = useSelector((state) => state.example.value[0].siteWeb);
	const description = useSelector((state) => state.example.value[0].description);


	


	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.txt}>Nom:</Text>
				<Text>{Nom}</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Adresse:</Text>
				<Text>{Adresse}</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Site internet:</Text>
				<Text>{siteWeb}</Text>
			</View>
			

			<View style={styles.container2}>
				<Image
					style={styles.logo}
					source={require("../assets/logo-map.png")}
				/>
			</View>
			<Text style={styles.txt}>Description:</Text>
			<View style={styles.container3}>
				<Text>{description}</Text>
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

	profile: {
		height: 30,
		width: 30,
	},
	home: {
		height: 30,
		width: 30,
	},

	container1: {
		marginLeft: "5%",
	},
	container2: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: 160,
		width: 160,
		marginLeft: 120,
	},
	container3: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: 160,
		width: 380,
		marginLeft: 6,
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
	association: { fontSize: 30, fontWeight: "600", color: "#0CA789" },

	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		textDecorationLine: "underline",
	},
	logo: {
		height: 70,
		width: 70,
	},
});
