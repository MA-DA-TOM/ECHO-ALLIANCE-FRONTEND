import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
	ImageBackground,
} from "react-native";

export default function AssociationEvent({ navigation }) {
	const dataToBecomeDynamic = [
		{ key: "Personne 1 : Nom - Prénom - Age - ID - Numéro" },
	];

	return (
		<ImageBackground
			source={require("../assets/volunteer.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container3}>
					<Text style={styles.txt}>
						Personnes participant à l'évènement:
					</Text>

					<FlatList
						data={dataToBecomeDynamic}
						renderItem={({ item }) => (
							<View style={styles.modalContainer}>
								<Text style={styles.item}>
									{"\u2022" + " "}
									{item.key}
								</Text>
							</View>
						)}
					/>
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
		justifyContent: "flex-start",
	},

	container3: {
		margin: 5,
		padding: 5,
	},
	txt: {
		fontWeight: "bold",
		color: "#ffffff",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 15,
	},
	item: { color: "#ffffff" },
});
