import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Dimensions } from 'react-native'; //using for style to get screen width for responsive fontsizes

export default function SolarCell({ fadeOut, fadeIn }) {
	return (
		<Pressable onPressIn={fadeOut} onPressOut={fadeIn} style={styles.cell}>
			<View style={styles.sq}></View>
			<View style={styles.sq}></View>
			<View style={styles.sq}></View>
		</Pressable>
	);
}
    const marginSm = Dimensions.get('window').width * 0.015;
    const marginMd = Dimensions.get('window').width * 0.04;

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
//		marginHorizontal: "5%",
		margin: marginSm,
		marginLeft: marginMd,

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
