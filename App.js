import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Calculator from "./components/Calculator";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar hidden={false} style='auto' />
			<Calculator />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
	},
});
