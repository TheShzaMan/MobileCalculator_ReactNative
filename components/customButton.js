import React from "react";
import { Pressable, Text, View } from "react-native";

export default function RoundButton({ onPress, text, bgColor, textColor }) {
	return (
		<Pressable onPress={onPress}>
			<View
				style={{
					borderRadius: 50,
					borderWidth: 1,
					borderColor: textColor,
					padding: 3,
					backgroundColor: bgColor,
					height: 55,
					width: 65,
					justifyContent: "center",
					margin: 5,
				}}
			>
				<Text
					style={{
						lineHeight: 55,
						textAlign: "center",
						color: textColor,
						textTransform: "uppercase",
						fontSize: 24,
					}}
				>
					{text}
				</Text>
			</View>
		</Pressable>
	);
}
