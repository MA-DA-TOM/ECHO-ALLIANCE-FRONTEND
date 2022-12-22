import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

export default function AssociationAddEvent({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/volunteer.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container2}>
					<View style={styles.container21}>
						<View style={styles.container211}>
							<Text style={styles.txt}>Evenement:</Text>
						</View>
						<View style={styles.container212}>
							<FlatList
								data={[
									{ key: "Lieu" },
									{ key: "Date" },
									{ key: "Heure" },
									{ key: "Description" },
								]}
								renderItem={({ item }) => (
									<Text style={styles.item}>
										{"\u2022" + " "}
										{item.key}
									</Text>
								)}
							/>
						</View>
					</View>

					<View style={styles.container22}>
						<View style={styles.container221}>
							<Text style={styles.map}>Map</Text>
						</View>
						<View style={styles.container222}>
							<Image
								style={styles.mapimage}
								source={require("../assets/logo-map.png")}
							/>
						</View>
					</View>
				</View>
				<View style={styles.container3}>
					<TouchableOpacity
						onPress={() => navigation.navigate("AssociationEvent")}
						style={styles.button}
						activeOpacity={0.8}
					>
						<Text style={styles.textButton}>Valider</Text>
					</TouchableOpacity>
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
	header: {
		marginRight: "5%",
		marginLeft: "5%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-end",
	},
	home: {
		height: 30,
		width: 30,
	},

	container2: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	container3: {
		alignItems: "center",
	},

	container21: {
		flexDirection: "column",
		flexWrap: "wrap",
	},
	container211: { marginLeft: 5, padding: 5 },
	container212: {
		marginLeft: 5,
		marginTop: 5,
		padding: 5,
	},
	container22: {
		margin: 5,
		padding: 5,
		alignItems: "center",
		borderWidth: 1,
		height: 130,
		width: 130,
		borderColor: "#ffffff",
	},

	txt: {
		fontWeight: "bold",
		color: "#ffffff",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 15,
	},
	item: { color: "#ffffff" },
	add: { height: 20, width: 20, marginLeft: 10 },
	map: {
		fontWeight: "bold",
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 15,
	},
	mapimage: {
		height: 60,
		width: 60,
		marginTop: 30,
	},
	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		borderWidth: 1,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
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
});
