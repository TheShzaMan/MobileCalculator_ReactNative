import React from "react";
import { StyleSheet, View } from "react-native";

export default function SolarCell() {
	return (
		<View style={styles.cell}>
			<View style={styles.sq}></View>
			<View style={styles.sq}></View>
			<View style={styles.sq}></View>
		</View>
	);
}
const styles = StyleSheet.create({
	cell: {
		borderLeftWidth: 8,
		borderRightWidth: 8,
		borderTopWidth: 2,
		borderBottomWidth: 2,
		borderRadius: 5,
		borderLeftColor: "gray",
		borderTopColor: "gray",
		borderBottomColor: "lightsteelblue",
		borderRightColor: "lightsteelblue",
		height: "8%",
		marginBottom: 10,
		width: "50%",
		alignSelf: "flex-end",
		borderStyle: "inset",
		flexDirection: "row",
	},
	sq: {
		flex: 0.333,
		backgroundColor: "#696969",
		borderWidth: 1,
		borderColor: "black",
	},
});
