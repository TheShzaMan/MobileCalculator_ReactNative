import { React } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import { Dimensions } from 'react-native'; //using for style to get screen width for responsive components
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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



	return (
		<View style={styles.screen}>
		    <View style={styles.displayArea}>
                <Text id='bgGhostDigits' numberOfLines={1} style={[styles.bgText, {fontSize: fontSize}]}>
                    -8.8.8.8.8.8.8.8.
                </Text>
                <Animated.Text
                    id='digitsDisplay'
                    numberOfLines={1}
                    ellipsizeMode='clip'
                    style={[styles.inputText, { opacity: digitOpacity, fontSize: fontSize, }
                    ]}
                >
                    {formatForDisplay(displayDigits)}
                </Animated.Text>
			</View>
{/*			<Text style={mem ? styles.advOn : styles.advOff}>M</Text>*/}
            <Animated.Text style={[
                styles.memoryIndicator, {
                opacity: digitOpacity,
                fontSize: RFValue(memoryFontSize),
                color: mem ? '#171717' : 'lightsteelblue',
            }]}> M
            </Animated.Text>
		</View>
	);
};
	const screenWidth = Dimensions.get('window').width
	const calculatorWidth = screenWidth * 0.85;
	const displayAreaWidth = calculatorWidth * 0.90;
//	const baseAspectRatio = 0.22;
	const baseAspectRatio = 0.17;

	const fontSize = displayAreaWidth * baseAspectRatio;
	const memoryFontSize = calculatorWidth * 0.05;
console.log(fontSize);
const styles = StyleSheet.create({
	screen: {
//	    flexDirection: 'row',
		justifyContent: "center",
		alignItems: 'center',
		padding: 10,
		paddingBottom: 0,
		width: displayAreaWidth,
		marginTop: calculatorWidth * 0.05,
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
	},
	displayArea: {
	    justifyContent: 'center',
	    alignItems: 'flex-end',
	    position: 'relative',
		width: displayAreaWidth * 0.95,
//        width: '90%',
        borderWidth: 1,
        borderColor: 'white',
        height: calculatorWidth * 0.12,
	},
	bgText: {
		position: "absolute",
//		right: 8,
//		fontSize: RFValue(60),
		fontFamily: "seg7",
		textAlign: "right",
		color: "lightsteelblue",
//		color: "#E0E0E0",
//        right: 0,
	},
	inputText: {
		position: "absolute",
//		fontSize: RFValue(60),
		fontFamily: "seg7",
		color: "#171717",
		textAlign: "right",
//        right: 0,
	},
	memoryIndicator: {
	    fontFamily: 'Arial',
	    alignSelf: 'flex-end',
	},
//	advOn: {
//		color: "#171717",
//		position: "absolute",
////		fontSize: RFValue(20),
//		fontFamily: "arial",
//		top: 25,
//		right: 5,
//	},
//	advOff: {
//		color: "#E0E0E0",
//		position: "absolute",
////		fontSize: RFValue(20),
//		fontFamily: "arial",
//		top: 45,
//        right: 5,
////		borderWidth: 1,
//	},
});
export default Display;
