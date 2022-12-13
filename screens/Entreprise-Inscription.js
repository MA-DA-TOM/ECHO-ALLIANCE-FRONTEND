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

export default function EntrepriseInscription() {
	<View style={styles.container}>
		<View style={styles.input}></View>
		<TouchableOpacity
			style={styles.button}
			onPress={() => navigation.navigate("EntrepriseMenu")}
		>
			<Text style={styles.textButton}>S'inscrire</Text>
		</TouchableOpacity>
	</View>;
}
