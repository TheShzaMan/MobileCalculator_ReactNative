import { useState, useEffect, React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Calculator from "./components/Calculator";
import * as Font from "expo-font";

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			await Font.loadAsync({
				seg7: require("./assets/Segment7Standard.otf"),
			});
			setFontLoaded(true);
		};
		loadFonts();
	}, []);

	return (
		fontLoaded && (
			<View style={styles.container}>
				<StatusBar hidden={false} style='auto' />
				<Calculator />
			</View>
		)
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
