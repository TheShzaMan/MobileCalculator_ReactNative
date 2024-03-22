import { React, useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import { NumButton, OvalButton, OpsButton } from "./customButton";

const Buttons = ({
	handleOnClear,
	handleOff,
	handleClearMem,
	handleBtnPressed,
}) => {
	const opsBtns = ["+", "-", "\u00d7", "\u00F7"];
	const numsBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "="];
	const advBtns = ["del", "R·CM", "M+", "%"];

	return (
		<View id='btnsContainer' style={{ alignItems: "center", width: "99%" }}>
			<View
				id='topRow'
				style={{
					marginTop: "5%",
					height: "10%",
					alignSelf: "flex-start",
				}}
			>
				<OvalButton
					id='on'
					bgColor='red'
					textColor='floralwhite'
					text='ON/C'
					onPress={handleOnClear}
					onLongPress={handleOff}
				/>
			</View>
			<View
				id='numsOpsAndAdv'
				style={{
					flexDirection: "row",
					justifyContent: "center",
					width: "105%",
				}}
			>
				<View
					id='numBtns'
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						flex: 3,
					}}
				>
					{numsBtns.map((num, index) => (
						<NumButton
							text={num}
							key={index}
							onPress={handleBtnPressed}
						/>
					))}
				</View>
				<View
					id='advBtns'
					style={{
						flexDirection: "column",
						alignSelf: "flex-start",
						flex: 1,
					}}
				>
					{advBtns.map((btn, index) => (
						<OpsButton
							customStyle={{ fontSize: 24 }}
							text={btn}
							key={index}
							id='advBtns'
							onPress={handleBtnPressed}
							onLongPress={handleClearMem}
						/>
					))}
				</View>
			</View>
			<View
				id='opsBtns'
				style={{
					flexDirection: "row",
					width: "105%",
					justifyContent: "space-evenly",
				}}
			>
				{opsBtns.map((btn, index) => (
					<OpsButton
						customStyle={{ fontSize: 38 }}
						text={btn}
						key={index}
						onPress={handleBtnPressed}
						id={"opsBtns"}
					/>
				))}
			</View>
		</View>
	);
};

export default Buttons;
