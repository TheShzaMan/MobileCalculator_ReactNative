import { StrictMode } from "react";
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
				arial: require("./assets/ariblk.ttf"),
				segui: require("./assets/seguibl.ttf"),
				arial1: require("./assets/arial.ttf"),
			});
			setFontLoaded(true);
		};
		loadFonts();
	}, []);

	return (
		<StrictMode>
			{fontLoaded && (
				<View style={styles.container}>
					<StatusBar hidden={false} style='auto' />
					<Calculator />
				</View>
			)}
		</StrictMode>
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
