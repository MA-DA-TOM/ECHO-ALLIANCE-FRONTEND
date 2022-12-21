import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import AssociationConnection from "./screens/Association-Connection";
import AssociationInscription from "./screens/Association-Inscription";
import AssociationAddEvent from "./screens/Association-AddEvent";
import AssociationEvent from "./screens/Association-Event";
import AssociationEventSubscriptions from "./screens/Association-EventSubscriptions";
import AssociationMaps from "./screens/Association-Maps";
import AssociationMenu from "./screens/Association-Menu";
import AssociationProfil from "./screens/Association-Profil";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BenevoleMenu from "./screens/Benevole-Menu";
import BenevoleMap from "./screens/Benevole-Map";
import BenevoleProfil from "./screens/Benevole-Profil";
import BenevoleAvantage from "./screens/Benevole-Avantage";
import BenevoleMission from "./screens/Benevole-Mission";
import BenevoleAlert from "./screens/Benevole-Alert";
import BenevoleSearch from "./screens/Benevole-Search";
import BenevoleConnection from "./screens/Benevole-Connection";
import BenevoleInscription from "./screens/Benevole-Inscription";
import EntrepriseConnection from "./screens/Entreprise-Connection";
import EntrepriseInscription from "./screens/Entreprise-Inscription";
import EntrepriseMaps from "./screens/Entreprise-Maps";
import EntrepriseMenu from "./screens/Entreprise-Menu";
import EntreprisePaliers from "./screens/Entreprise-Paliers";
import EntrepriseProfil from "./screens/Entreprise-Profil";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';

const store = configureStore({
	reducer: {user},
   });

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
		<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: true }}>
				<Stack.Screen name="Home" component={Home} />
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
				<Stack.Screen name="BenevoleAlert" component={BenevoleAlert} />
			
				<Stack.Screen
					name="BenevoleMission"
					component={BenevoleMission}
				/>
				<Stack.Screen
					name="BenevoleSearch"
					component={BenevoleSearch}
				/>
				<Stack.Screen
					name="BenevoleConnection"
					component={BenevoleConnection}
				/>
				<Stack.Screen
					name="BenevoleInscription"
					component={BenevoleInscription}
				/>
				<Stack.Screen
					name="AssociationConnection"
					component={AssociationConnection}
				/>
				<Stack.Screen
					name="AssociationInscription"
					component={AssociationInscription}
				/>
				<Stack.Screen
					name="EntrepriseConnection"
					component={EntrepriseConnection}
				/>
				<Stack.Screen
					name="EntrepriseInscription"
					component={EntrepriseInscription}
				/>
				<Stack.Screen
					name="AssociationAddEvent"
					component={AssociationAddEvent}
				/>
				<Stack.Screen
					name="AssociationEvent"
					component={AssociationEvent}
				/>
				<Stack.Screen
					name="AssociationEventSubscriptions"
					component={AssociationEventSubscriptions}
				/>
				<Stack.Screen
					name="AssociationMaps"
					component={AssociationMaps}
				/>
				<Stack.Screen
					name="AssociationMenu"
					component={AssociationMenu}
				/>
				<Stack.Screen
					name="AssociationProfil"
					component={AssociationProfil}
				/>
				<Stack.Screen
					name="EntrepriseMaps"
					component={EntrepriseMaps}
				/>
				<Stack.Screen
					name="EntrepriseMenu"
					component={EntrepriseMenu}
				/>
				<Stack.Screen
					name="EntreprisePaliers"
					component={EntreprisePaliers}
				/>
				<Stack.Screen
					name="EntrepriseProfil"
					component={EntrepriseProfil}
				/>
			</Stack.Navigator>
		</NavigationContainer>
		</Provider>
	);
}
