import React from "react";
import { Text, StyleSheet, View } from "react-native";

import RoundButton from "./customButton";

const Buttons = ({}) => {
	const opsBtns = ["+", "-", "x", "/ "];
	const numsBtns = [
		7,
		8,
		9,
		"C",
		4,
		5,
		6,
		"M+",
		1,
		2,
		3,
		"M-",
		0,
		".",
		"=",
		"%",
	];
	return (
		<View style={{ alignItems: "center" }}>
			<View style={[styles.btnArea, { marginTop: "10%" }]}>
				{numsBtns.map((btn, index) => (
					<RoundButton
						text={btn}
						key={index}
						bgColor='floralwhite'
						textColor='black'
					/>
				))}
			</View>
			<View style={styles.btnArea}>
				{opsBtns.map((btn, index) => (
					<RoundButton
						text={btn}
						key={index}
						bgColor={"black"}
						textColor={"floralwhite"}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	btnArea: {
		width: "105%",
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "space-around",
	},
});

export default Buttons;
