import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { NumButton, OvalButton, OpsButton } from "./customButton";

const Buttons = ({
	handleInputChange,
	handleOnClear,
	handleOff,
	workingDigits,
	setWorkingDigits,
	setArgA,
}) => {
	const opsBtns = ["+", "-", "\u00d7", "\u00F7"];
	const numsBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "="];
	const advBtns = ["del", "MR", "M+", "%"];
	const updateDisplay = (num) => {
		if (num === ".") {
			if (!workingDigits.includes(".")) {
				setWorkingDigits(workingDigits + ".");
			}
		} else {
			if (workingDigits == 0) {
				setWorkingDigits(num.toString());
			} else {
				setWorkingDigits(workingDigits + num.toString()); //change to string interpolation
			}
		}
	};

	const operate = () => {
		setArgA(workingDigits);
	};

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
							onPress={updateDisplay}
							//setDisplayedDigits={setDisplayedDigits}
							// textColor={"black"}
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
						onPress={operate}
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
