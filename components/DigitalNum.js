import React from "react";
import { StyleSheet } from "react-native";

const DigitalNum = ({}) => {
	return <View style={styles.emptyDigit}></View>;
};

const styles = StyleSheet.create({
	emptyDigit: {
		borderWidth: 3,
		borderColor: "lightsteelblue",
	},
});
export default DigitalNum;
