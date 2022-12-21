import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Modal,
	TextInput,
} from "react-native";
import { useState, useEffect, useRef } from "react";

import { Camera, CameraType, FlashMode } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BenevoleAlert({ navigation }) {
	const [hasPermission, setHasPermission] = useState(false);
	const [type, setType] = useState(CameraType.back);
	const [flashMode, setFlashMode] = useState(FlashMode.off);
	const [takePhoto, setTakePhoto] = useState(false);
	const [photo, setPhoto] = useState([]);

	let cameraRef = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const handlePhoto = () => {
		setTakePhoto(!takePhoto);
	};

	const takePicture = async () => {
		const photoTest = await cameraRef.takePictureAsync({ quality: 0.3 });
		setPhoto((photo) => [...photo, photoTest]);
	};

	const modalPhoto = () => {
		// if (!hasPermission) {
		// 	return <View />;
		// }

		if (takePhoto) {
			return (
				<Modal visible={takePhoto}>
					<Camera
						type={type}
						flashMode={flashMode}
						ref={(ref) => (cameraRef = ref)}
						style={styles.camera}
					>
						<View style={styles.buttonsContainer}>
							<TouchableOpacity
								onPress={() =>
									setType(
										type === CameraType.back
											? CameraType.front
											: CameraType.back
									)
								}
							>
								<FontAwesome
									name="rotate-right"
									size={25}
									color="#ffffff"
								/>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() =>
									setFlashMode(
										flashMode === FlashMode.off
											? FlashMode.on
											: FlashMode.off
									)
								}
							>
								<FontAwesome
									name="flash"
									size={25}
									color={
										flashMode === FlashMode.off
											? "#ffffff"
											: "#e8be4b"
									}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.snapContainer}>
							<TouchableOpacity
								onPress={() =>
									cameraRef && takePicture() && handlePhoto()
								}
							>
								<FontAwesome
									name="circle-thin"
									size={95}
									color="#ffffff"
								/>
							</TouchableOpacity>
						</View>
					</Camera>
				</Modal>
			);
		}
	};

	const photos = photo.map((data, i) => {
		return (
			<View key={i} style={styles.photoContainer}>
				<FontAwesome
					name="times"
					size={20}
					color="#000000"
					style={styles.deleteIcon}
					onPress={() => deletePhoto(data)}
				/>
				<Image source={data.uri} style={styles.photo} />
			</View>
		);
	});

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.title}>Problème</Text>
			</View>
			<View style={styles.container2}>
				<Text style={styles.temoignage}>Témoignage:</Text>
			</View>
			<View style={styles.container3}>
				<TextInput autoCorrect={true}></TextInput>
			</View>
			<View style={styles.container4}>
				<TouchableOpacity onPress={() => handlePhoto()}>
					<Image
						style={styles.photo}
						source={require("../assets/logo-photo.png")}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.container5}>{photos}</View>
			{modalPhoto()}
			<TouchableOpacity
				onPress={() => navigation.navigate("BenevoleProfil")}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Envoyer</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: "#000000",
	},
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
	},
	cross: {
		height: 30,
		width: 30,
	},
	photo: {
		height: 70,
		width: 70,
	},
	paysage: { height: 50, width: 50 },
	container1: {
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	container2: {
		marginLeft: "5%",
	},
	container3: {
		height: 100,
		backgroundColor: "#ffffff",
		margin: 5,
		padding: 5,
		borderWidth: 2,
	},
	container4: {
		backgroundColor: "#ffffff",
		borderColor: "#8BE38E",
		borderWidth: 3,
		height: 100,
		width: 100,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "37%",
	},
	container5: {
		marginRight: "5%",
		marginLeft: "5%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
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
	temoignage: {
		fontWeight: "bold",
		fontSize: 20,
	},
	camera: {
		flex: 1,
		backgroundColor: "#fff",
	},
	buttonsContainer: {
		marginTop: 60,
		marginLeft: 20,
		marginRight: 20,
		width: "90%",
	},
	snapContainer: {
		justifyContent: "center",
	},
});
