import { React } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Dimensions } from 'react-native'; //using for style to get screen width for responsive components
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
					lineHeight: 48,
					textAlign: "center",
					fontFamily: "segui",
					fontSize: RFValue(42),
				}}
			>
				{text}
			</Text>
		</Pressable>
	);
};

export const OpsButton = ({ onPress, onLongPress, text, customStyle, id }) => {
	const handlePress = () => {
		onPress(text, id);
	};
	const handleLongPress = () => {
		onLongPress(text);
	};
	return (
		<Pressable
			onLongPress={handleLongPress}
			onPressOut={handlePress}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? "gray" : "black" },
				styles.round,
			]}
		>
			<Text
				style={[
					customStyle,
					{
						lineHeight: 48,
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
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "black",
//		padding: 3,
		height: Dimensions.get('window').width * 0.14,
		width: Dimensions.get('window').width * 0.14,
		justifyContent: "center",
		alignItems: 'center',
		margin:Dimensions.get('window').width * 0.015,
	},
	oval: {
		height: Dimensions.get('window').width * 0.07,
	},
});
