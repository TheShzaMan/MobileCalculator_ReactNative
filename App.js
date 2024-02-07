import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Calculator from "./components/Calculator";
import * as Font from "expo-font";

async function loadFonts() {
	await Font.loadAsync({
		seg7: require("./assets/Segment7Standard.otf"),
	});
}
loadFonts();

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
