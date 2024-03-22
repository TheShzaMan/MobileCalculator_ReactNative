import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

export default function SolarCell({ fadeOut, fadeIn }) {
	return (
		<Pressable onPressIn={fadeOut} onPressOut={fadeIn} style={styles.cell}>
			<View style={styles.sq}></View>
			<View style={styles.sq}></View>
			<View style={styles.sq}></View>
		</Pressable>
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
		flex: 1,
		flexDirection: "row",
		marginLeft: "5%",
		marginVertical: "3%",

//		width: "50%",
//		alignSelf: "flex-end",
	},
	sq: {
		flex: 0.333,
		backgroundColor: "#696969",
		borderWidth: 1,
		borderColor: "black",
	},
});
