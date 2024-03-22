import { React } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";

const Display = ({ digitOpacity, displayDigits, mem }) => {
	const formatForDisplay = (numToFormat) => {
		const numStr = numToFormat.toString();
		if (numStr.includes(".")) {
			console.log(numStr[0] + " numStr");
			if (numStr.length <= 9) {
				return numStr[0] == "." ? "0" + numStr : numStr;
			}
		} else {
			if (numStr.length <= 8) {
				return numStr;
			}
		}
		const [integerPart, fractionalPart] = numStr.split(".");
		if (integerPart.length >= 8) {
			return integerPart.substring(0, 8);
		} else {
			const allowedFractionalLength = 8 - integerPart.length;
			return `${integerPart}.${fractionalPart.substring(
				0,
				allowedFractionalLength
			)}`;
		}
	};
	console.log(formatForDisplay(displayDigits) + ": displayDigits @Display");
	return (
		<View style={styles.screen}>
			<Text id='bgGhostDigits' numberOfLines={1} style={styles.bgText}>
				8.8.8.8.8.8.8.8.
			</Text>
			<Text style={mem ? styles.advOn : styles.advOff}>M</Text>
			<Animated.Text
				id='digitsDisplay'
				numberOfLines={1}
				ellipsizeMode='clip'
				style={[styles.inputText, { opacity: digitOpacity }]}
			>
				{formatForDisplay(displayDigits)}
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
		right: 8,
		fontSize: 72,
		fontFamily: "seg7",
		textAlign: "right",
		color: "#7893",
	},
	advOn: {
		color: "#000000",
		position: "absolute",
		fontSize: 22,
		fontFamily: "arial",
		right: 10,
		bottom: 1,
	},
	advOff: {
		color: "#7893",
		position: "absolute",
		fontSize: 22,
		fontFamily: "arial",
		right: 10,
		bottom: 1,
	},
	inputText: {
		position: "absolute",
		right: 8,
		fontSize: 72,
		fontFamily: "seg7",
		textAlign: "right",
		color: "#000000",
	},
});
export default Display;
