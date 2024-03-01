import { React } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

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
					fontSize: 38,
				}}
			>
				{text}
			</Text>
		</Pressable>
	);
};

export const OpsButton = ({ onPress, text, customStyle, id }) => {
	const handlePress = () => {
		onPress(text, id);
	};
	return (
		<Pressable
			onPressIn={handlePress}
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
				{ backgroundColor: pressed ? "gray" : "floralwhite" },
				styles.round,
				styles.oval,
			]}
		>
			<Text
				style={{
					// lineHeight: 55,
					textAlign: "center",
					color: textColor,
					textTransform: "uppercase",
					fontSize: 18,
					fontFamily: "arial1",
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
		padding: 3,
		height: 55,
		width: 65,
		justifyContent: "center",
		margin: 5,
		flexShrink: 1,
	},
	oval: {
		height: 25,
		backgroundColor: "red",
	},
});
