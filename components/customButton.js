import { React } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Dimensions } from 'react-native'; //using for style to get screen width for responsive components
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get('window').width;

export const NumButton = ({ onPress, text }) => {
	const handlePress = () => {
		let id = "numBtns";
		onPress(text, id);
	};
	return (
		<Pressable
			onPressIn={handlePress}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? "gray" : "floralwhite" },
				styles.round,
			]}
		>
			<Text
				style={{
					lineHeight: RFValue(46),
					textAlign: "center",
					fontFamily: "segui",
					fontSize: RFValue(38),
				}}
			>
				{text}
			</Text>
		</Pressable>
	);
};

export const OpsButton = ({ onPress, onLongPress, text, id }) => {
	const handlePress = () => {
		onPress(text, id);
	};
	const handleLongPress = () => {
		onLongPress(text);
	};
	const opsStyle = {
	    ...(id === 'advBtns'
	        ? {fontSize: RFValue(20), lineHeight: RFValue(22)}
	        : {fontSize: RFValue(38), lineHeight: RFValue(40)}
        ),
	}
	return (
		<Pressable
			onLongPress={handleLongPress}
			onPressOut={handlePress}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? "gray" : "black"},
				styles.round,
			]}
		>
			<Text
				style={[
					opsStyle,
					{
						textAlign: "center",
						color: "floralwhite",
						fontFamily: "segui",
					},
				]}
			>
				{text}
			</Text>
		</Pressable>
	);
};

export const OvalButton = ({
	onLongPress,
	onPress,
	text,
	bgColor,
	textColor,
}) => {
	return (
		<Pressable
			onLongPress={onLongPress}
			onPress={onPress}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? "darkred" : bgColor },
				styles.round,
				styles.oval,
			]}
		>
			<Text
				style={{
					textAlign: "center",
					color: textColor,
					textTransform: "uppercase",
					fontSize: RFValue(14),
					fontFamily: "segui",
				}}
			>
				{text}
			</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	round: {
		borderRadius: screenWidth * 0.1,
		//borderRadius: 50,
		borderWidth: 1,
		borderColor: "black",
		justifyContent: "center",
		alignItems: 'center',
		margin:screenWidth * 0.015,
		height: screenWidth * 0.14,
		width: screenWidth * 0.14,
//		padding: Dimensions.get('window').width *0.02,
	},
	advRound: {
	    fontSize: RFValue(14),
	},
	oval: {
		height: screenWidth * 0.07,
//		padding: 0,
	},
});
