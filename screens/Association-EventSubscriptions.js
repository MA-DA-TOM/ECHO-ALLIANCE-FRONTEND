import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
} from "react-native";

export default function AssociationEvent({ navigation }) {
	const dataToBecomeDynamic = [
		{ key: "Personne 1 : Nom - Prénom - Age - ID - Numéro" },
	];

	return (
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
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "flex-start",
	},

	container3: {
		backgroundColor: "#ffffff",
		margin: 5,
		padding: 5,
	},
	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 15,
	},
});
