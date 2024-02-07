import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";

const Calculator = ({}) => {
	return (
		<View style={styles.body}>
			<Text style={{ color: "black" }}>Calculator Component</Text>
			<Display />
			<Buttons />
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		height: "70%",
		width: "90%",
		padding: 14,
		borderWidth: 1,
		borderColor: "white",
		backgroundColor: "lightgray",
	},
});

export default Calculator;