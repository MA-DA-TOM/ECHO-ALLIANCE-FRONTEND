import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BenevoleMenu from "./screens/Benevole-Menu";
import BenevoleMap from "./screens/Benevole-Map";
import BenevoleProfil from "./screens/Benevole-Profil";
import BenevoleAdvanceSearch from "./screens/Benevole-AdvanceSearch";
import BenevoleAvantage from "./screens/Benevole-Avantage";
import BenevoleMission from "./screens/Benevole-Mission";
import BenevoleAlert from "./screens/Benevole-Alert";
import BenevoleSearch from "./screens/Benevole-Search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName = "";

					if (route.name === "Map") {
						iconName = "location-arrow";
					} else if (route.name === "Places") {
						iconName = "map-pin";
					}

					return (
						<FontAwesome
							name={iconName}
							size={size}
							color={color}
						/>
					);
				},
				tabBarActiveTintColor: "#ec6e5b",
				tabBarInactiveTintColor: "#335561",
				headerShown: false,
			})}
		>
			<Tab.Screen name="BenevoleMap" component={BenevoleMap} />
		</Tab.Navigator>
	);
};

//// On n'est pas obligé de faire une Tab pour aller d'une page à une autre ////

// const ProfileNavigator = () => {
// 	return (
// 		<Tab.Navigator
// 			screenOptions={({ route }) => ({
// 				tabBarIcon: ({ color, size }) => {
// 					let iconName = "";

// 					return (
// 						<FontAwesome
// 							name={iconName}
// 							size={size}
// 							color={color}
// 						/>
// 					);
// 				},
// 				tabBarActiveTintColor: "#ec6e5b",
// 				tabBarInactiveTintColor: "#335561",
// 				headerShown: false,
// 			})}
// 		>
// 			<Tab.Screen name=" " component={ProfileScreen} />
// 		</Tab.Navigator>
// 	);
// };

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: true }}>
				<Stack.Screen name="BenevoleMenu" component={BenevoleMenu} />
				<Stack.Screen name="TabNavigator" component={TabNavigator} />
				<Stack.Screen
					name="BenevoleProfil"
					component={BenevoleProfil}
				/>
				<Stack.Screen name="BenevoleMap" component={BenevoleMap} />
				<Stack.Screen
					name="BenevoleAvantage"
					component={BenevoleAvantage}
				/>
				<Stack.Screen
					name="BenevoleSearch"
					component={BenevoleSearch}
				/>
				<Stack.Screen name="BenevoleAlert" component={BenevoleAlert} />
				<Stack.Screen
					name="BenevoleAdvanceSearch"
					component={BenevoleAdvanceSearch}
				/>
				<Stack.Screen
					name="BenevoleMission"
					component={BenevoleMission}
				/>
				<Stack.Screen
					name="BenevoleSearch"
					component={BenevoleSearch}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
