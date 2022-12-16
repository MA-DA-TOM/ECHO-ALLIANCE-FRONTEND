import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
} from "react-native";

export default function BenevoleAvantage({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container2}>
				<FlatList
					data={[
						{ key: "Date:" },
						{ key: "Rang:" },
						{ key: "Statut:" },
						{ key: "Prochain statut:" },
					]}
					renderItem={({ item }) => (
						<Text style={styles.item}>
							{"\u2022" + " "}
							{item.key}
						</Text>
					)}
				/>
			</View>
			<View style={styles.container3}>
				<Text style={styles.txt}>
					Distance / Entreprise / Avantages
				</Text>
				<FlatList
					data={[
						{ key: "Exemple 1" },
						{ key: "Exemple 2" },
						{ key: "Exemple 3" },
						{ key: "Exemple 4" },
						{ key: "Exemple 5" },
						{ key: "Exemple 6" },
						{ key: "Exemple 7" },
						{ key: "Exemple 8" },
						{ key: "Exemple 9" },
						{ key: "Exemple 10" },
					]}
					renderItem={({ item }) => (
						<Text style={styles.item}>
							{"\u2022" + " "}
							{item.key}
						</Text>
					)}
				/>
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
		marginLeft: "5%",
	},
	container3: {
		backgroundColor: "#ffffff",
		margin: 5,
		padding: 5,
		borderWidth: 2,
	},
	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 15,
	},
});
