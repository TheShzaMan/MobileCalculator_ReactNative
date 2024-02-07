import React from "react";
import { Text, StyleSheet, View } from "react-native";
import DigitalNum from "./DigitalNum";

const Display = ({}) => {
	return (
		<View style={styles.screen}>
			{/* <Text style={styles.displayText}>888.88887</Text> */}
			<DigitalNum />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		borderWidth: 1,
		borderColor: "white",
		backgroundColor: "lightskyblue",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingHorizontal: 10,
	},
	displayText: {
		fontSize: 70,
		textAlign: "right",
	},
});
export default Display;
