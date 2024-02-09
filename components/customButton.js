import React from "react";
import { Pressable, StyleSheet, Text, View, pressed } from "react-native";

// export default function CustomButton() {
export const NumButton = ({ onPress, text }) => {
	return (
		<Pressable onPress={onPress}>
			<View
				style={[
					{ backgroundColor: pressed ? "gray" : "floralwhite" },
					styles.round,
				]}
			>
				<Text
					style={{
						lineHeight: 48,
						textAlign: "center",
						color: "red",
						fontFamily: "segui",
						textTransform: "uppercase",
						fontSize: 38,
					}}
				>
					{text}
				</Text>
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	borderRadius: 50,
	borderWidth: 1,
	borderColor: "black",
	padding: 3,
	height: 55,
	width: 65,
	justifyContent: "center",
	margin: 5,
	flexShrink: 1,
});

export const OvalButton = ({ onPress, text, bgColor, textColor }) => {
	return (
		<Pressable onPress={onPress}>
			<View
				style={{
					borderRadius: 50,
					borderWidth: 1,
					borderColor: textColor,
					padding: 3,
					backgroundColor: bgColor,
					// height: "100%",
					width: 65,
					justifyContent: "center",
					margin: 5,
					flexShrink: 1,
				}}
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
			</View>
		</Pressable>
	);
};
