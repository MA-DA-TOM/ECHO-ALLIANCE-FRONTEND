import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	FlatList,
} from "react-native";

export default function BenevoleSearch({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container0}>
				<Text style={styles.title0}>Recherche</Text>
			</View>
			<View style={styles.container1}>
				<TouchableOpacity
					style={styles.buttonOpacity}
					onPress={() => navigation.navigate("BenevoleAdvanceSearch")}
				>
					<Text style={styles.title1}>Recherche avancée</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.container2}>
				<FlatList
					data={[{ key: "Date / Lieu / Association:" }]}
					renderItem={({ item }) => (
						<Text style={styles.item}>
							{"\u2022" + " "}
							{item.key}
						</Text>
					)}
				/>
				<View style={styles.container3}>
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
			</View>

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
		alignItems: "flex-end",
		marginRight: "5%",
	},
	title0: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	title1: {
		fontSize: 10,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	container2: {
		marginRight: "5%",
		marginLeft: "5%",
		flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
	},
	tick: { height: 40, width: 40 },

	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginLeft: "10%",
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
});
