import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { NumButton, OvalButton } from "./customButton";

const Buttons = ({}) => {
	const opsBtns = ["+", "-", "\u00d7", "\u00F7"];
	const numsBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "="];
	const advBtns = ["BS", "MR", "M+", "%"];
	return (
		<View style={{ alignItems: "center", width: "99%" }}>
			<View style={[styles.btnArea, { marginTop: "5%", height: "10%" }]}>
				<OvalButton bgColor='red' textColor='floralwhite' text='ON/C' />
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					// borderWidth: 1,
					width: "105%",
					// alignSelf: "flex-start",
					// alignItems: "center",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						// alignContent: "space evenly",
						// borderWidth: 1,
						// width: "76%",
						flex: 3,
					}}
				>
					{numsBtns.map((btn, index) => (
						<NumButton
							text={btn}
							key={index}

							// textColor={"black"}
						/>
					))}
				</View>
				<View
					style={{
						flexDirection: "column",
						// borderWidth: 1,
						alignSelf: "flex-start",
						// width: "25%",
						flex: 1,
					}}
				>
					{advBtns.map((btn, index) => (
						<NumButton
							style={{ textStyle: "bold" }}
							text={btn}
							key={index}
						/>
					))}
				</View>
			</View>

			<View
				style={{
					flexDirection: "row",
					width: "105%",
					justifyContent: "space-evenly",
				}}
			>
				{opsBtns.map((btn, index) => (
					<NumButton
						style={{ textStyle: "bold" }}
						text={btn}
						key={index}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	btnArea: {
		width: "100%",
		flexDirection: "row",
		// flexWrap: "wrap",
		// alignContent: "space-around",
	},
});

export default Buttons;
