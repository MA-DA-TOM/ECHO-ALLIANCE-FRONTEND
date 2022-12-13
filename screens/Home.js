import { useState } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Modal,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Home() {
	const [modalBénévole, setModalBénévole] = useState(false);
	const [modalAssociation, setModalAssociation] = useState(false);
	const [modalEntreprise, setModalEntreprise] = useState(false);

	// activé/désactivé Modal
	const handleModalBénévol = () => {
		setModalBénévole(!modalBénévole);
	};

	const handleModalAssociation = () => {
		setModalAssociation(!modalAssociation);
	};

	const handleModalEntreprise = () => {
		setModalEntreprise(!modalEntreprise);
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.subcontainer}>
				<Text style={styles.title}>
					Welcome to <Text style={styles.echo}>Echo Alliance</Text>
				</Text>
			</View>
			<Modal visible={modalBénévole} animationType="fade" transparent>
				<View className={styles.modalContainer}>
					<FontAwesome
						name="rotate-right"
						size={25}
						color="#ffffff"
						onPress={() => handleModalBénévol()}
					/>
					<Text>Bénévole</Text>
					<Text>
						TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES
						BENEVOLES
					</Text>
					<TouchableOpacity>connection</TouchableOpacity>
					<TouchableOpacity>inscription</TouchableOpacity>
				</View>
			</Modal>

			<Modal visible={modalAssociation} animationType="fade" transparent>
				<View className={styles.modalContainer}>
					<FontAwesome
						name="rotate-right"
						size={25}
						color="#ffffff"
						onPress={() => handleModalAssociation()}
					/>
					<Text>Association</Text>
					<Text>
						TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES
						ASSOCIATIONS
					</Text>
					<TouchableOpacity>
						<Text>connection</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>inscription</Text>
					</TouchableOpacity>
				</View>
			</Modal>

			<Modal visible={modalEntreprise} animationType="fade" transparent>
				<View className={styles.modalContainer}>
					<FontAwesome
						name="rotate-right"
						size={25}
						color="#ffffff"
						onPress={() => handleModalEntreprise()}
					/>
					<Text>Entreprise</Text>
					<Text>
						TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES
						ENTREPRISES{" "}
					</Text>
					<TouchableOpacity>
						<Text>connection</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>inscription</Text>
					</TouchableOpacity>
				</View>
			</Modal>

			<TouchableOpacity
				onPress={() => handleModalBénévol()}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Bénévoles</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => handleModalAssociation()}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Associations</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => handleModalEntreprise()}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Entreprises</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "space-around",
	},
	title: {
		width: "100%",
		fontSize: 30,
		fontWeight: "600",
	},
	echo: {
		color: "#0CA789",
	},
	button: {
		alignItems: "center",
		paddingTop: 15,
		width: "80%",
		marginTop: 30,
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginBottom: 50,
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
	},
});
