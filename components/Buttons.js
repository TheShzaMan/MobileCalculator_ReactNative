import React from "react";
import { Text, StyleSheet, View } from "react-native";

import RoundButton from "./customButton";

const Buttons = ({}) => {
	return (
		<View style={styles.btnArea}>
			<Text>Buttons Component</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	btnArea: {
		flex: 5,
	},
});

export default Buttons;
