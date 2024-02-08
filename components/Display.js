import { useState, React, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Animated } from "react-native";
import DigitalNum from "./DigitalNum";

const Display = ({ digitOpacity }) => {
	const [digitsDisplay, setDigitsDisplay] = useState(757.9);

	return (
		<View style={styles.screen}>
			<Text numberOfLines={1} style={styles.bgText}>
				8.8.8.8.8.8.8.8
			</Text>

			<Animated.Text
				id='digitsDisplay'
				numberOfLines={1}
				style={[styles.inputText, { opacity: digitOpacity }]}
			>
				{digitsDisplay}
			</Animated.Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		borderWidth: 1,
		borderLeftColor: "gray",
		borderLeftWidth: 8,
		borderTopColor: "gray",
		borderTopWidth: 5,
		borderBottomColor: "lightsteelblue",
		borderBottomWidth: 4,
		borderRightColor: "lightsteelblue",
		borderRightWidth: 2,
		backgroundColor: "lightskyblue",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingHorizontal: 5,
	},
	bgText: {
		position: "absolute",
		fontSize: 72,
		fontFamily: "seg7",
		textAlign: "right",
		color: "#7894",
	},
	inputText: {
		position: "absolute",
		fontSize: 72,
		fontFamily: "seg7",
		textAlign: "right",
		color: "#000000",
	},
});
export default Display;
