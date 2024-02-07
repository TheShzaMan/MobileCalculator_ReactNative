import React from "react";
import { StyleSheet, View } from "react-native";

const DigiParts = () => {
	const EmptyDigit = () => {
		<View style={styles.emptyDigit}>
			<View style={styles.topOff}></View>
			<View
				style={{
					flexDirection: "row",
					height: "40%",
					width: "90%",
					justifyContent: "space-between",
				}}
			>
				<View style={styles.leftOff}></View>
				<View style={styles.rightOff}></View>
			</View>
			<View style={styles.midOff}></View>
			<View
				style={{
					flexDirection: "row",
					height: "40%",
					width: "90%",
					justifyContent: "space-between",
				}}
			>
				<View style={styles.leftOff}></View>
				<View style={styles.rightOff}></View>
			</View>
			<View style={styles.bottomOff}></View>
		</View>;
	};
	return <EmptyDigit />;
};
const styles = StyleSheet.create({
	emptyDigit: {
		height: "55%",
		width: "11%",
		alignItems: "center",
		// justifyContent: "space-between",
	},
	topOff: {
		borderWidth: 2,
		height: "12%",
		width: "80%",
		borderColor: "lightsteelblue",
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
	topOn: {
		borderWidth: 2,
		height: "12%",
		width: "80%",
		borderColor: "black",
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
	bottomOff: {
		borderWidth: 2,
		height: "12%",
		width: "80%",
		borderColor: "lightsteelblue",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},
	bottomOn: {
		borderWidth: 2,
		height: "12%",
		width: "80%",
		borderColor: "black",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},
	midOff: {
		borderWidth: 2,
		height: "12%",
		width: "80%",
		borderColor: "lightsteelblue",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
	midOn: {
		borderWidth: 2,
		height: "12%",
		width: "80%",
		borderColor: "black",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
	leftOff: {
		borderWidth: 2,
		height: "100%",
		width: "18%",
		borderColor: "lightsteelblue",
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		alignSelf: "flex-start",
	},
	leftOn: {
		borderWidth: 2,
		height: "100%",
		width: "18%",
		borderColor: "black",
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		alignSelf: "flex-start",
	},
	rightOff: {
		borderWidth: 2,
		height: "100%",
		width: "18%",
		borderColor: "lightsteelblue",
		borderTopLeftRadius: 50,
		borderBottomLeftRadius: 50,
		alignSelf: "flex-end",
	},
	rightOn: {
		borderWidth: 2,
		height: "100%",
		width: "18%",
		borderColor: "black",
		borderTopLeftRadius: 50,
		borderBottomLeftRadius: 50,
		alignSelf: "flex-end",
	},
});

export default DigiParts;
