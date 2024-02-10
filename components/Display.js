import { useState, React, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Animated } from "react-native";
import DigitalNum from "./DigitalNum";

const Display = ({ digitOpacity, displayDigits }) => {
	return (
		<View id='bgGhostDigits' style={styles.screen}>
			<Text numberOfLines={1} style={styles.bgText}>
				8.8.8.8.8.8.8.8
			</Text>

			<Animated.Text
				id='digitsDisplay'
				numberOfLines={1}
				style={[styles.inputText, { opacity: digitOpacity }]}
			>
				{displayDigits}
			</Animated.Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		borderWidth: 1,
		borderLeftColor: "gray",
		borderLeftWidth: 8,
		borderTopColor: "gray",
		borderTopWidth: 5,
		borderBottomColor: "lightsteelblue",
		borderBottomWidth: 4,
		borderRightColor: "lightsteelblue",
		borderRightWidth: 2,
		backgroundColor: "lightgray",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingHorizontal: 5,
		height: "18%",
	},
	bgText: {
		position: "absolute",
		fontSize: 72,
		fontFamily: "seg7",
		textAlign: "right",
		color: "#7893",
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
