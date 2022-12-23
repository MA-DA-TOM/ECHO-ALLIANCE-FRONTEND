import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";

export default function BenevoleMission({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.txt}>Nom:</Text>
				<Text style={styles.txt2}>mama work</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Adresse:</Text>
				<Text style={styles.txt2}>51 Quai Lawton batiment g4, 33300 Bordeaux</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Horaires:</Text>
				<Text style={styles.txt2}>lundi-vendredi – 09:00–17:00</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Site internet:</Text>
				<Text style={styles.txt2}>https://www.mamaworks.com/bordeaux/</Text>

			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Numéro de téléphone:</Text>
				<Text style={styles.txt2}>05 40 24 86 46</Text>

			</View>
			<View style={styles.container2}>
				<Image
					style={styles.logo}
					source={require("../assets/logo-map.png")}
				/>
			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Description:</Text>
			</View>
			<View style={styles.container3}>
			<Text style={styles.txt2}>

Que vous soyez en solo ou en équipe, nos offres sont modulables et s’adaptent à vos besoins ! Contactez-nous vite pour réserver votre espace. </Text>

			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Paliers:</Text>
			</View>
			<View style={styles.container4}>
			<Text style={styles.txt2}>1. Pour 2 café acheté, le 3ème à moitié prix</Text>
			<Text style={styles.txt2}>2. Pour 1 café acheté, -30% sur la viennoiserie de votre choix.</Text>
			<Text style={styles.txt2}>3. Dessert offert pour une formule midi acheté.</Text>
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
	container4: {
		// alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: 80,
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
