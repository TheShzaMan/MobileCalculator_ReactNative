import { React, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Dimensions } from 'react-native'; //using for style to get screen width for responsive fontsizes
import { NumButton, OvalButton, OpsButton } from "./customButton";

// style only. getting dynamic fontsize
const { width } = Dimensions.get('window');
const opsFontSize = width * 0.12;
const advFontSize = width * 0.07;

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
		<View id='btnsContainer' style={styles.btnsContainer}>
			<View
				id='topRow'
				style={styles.topRow}
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
				style={styles.numsOpsAndAdv}
			>
				<View
					id='numBtns'
					style={styles.numBtns}
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
					style={styles.advBtns}
				>
					{advBtns.map((btn, index) => (
						<OpsButton
							customStyle={{ fontSize: advFontSize }}
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
				style={styles.opsBtns}
			>
				{opsBtns.map((btn, index) => (
					<OpsButton
						customStyle={{ fontSize: opsFontSize }}
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

const styles = StyleSheet.create({
    btnsContainer:{
        alignItems: "center",
        width: "99%"
    },
    topRow:{
        marginTop: "5%",
        height: "10%",
        alignSelf: "flex-start",
    },
    numsOpsAndAdv:{
        flexDirection: "row",
        justifyContent: "center",
        width: "105%",
    },
    numBtns:{
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 3,
    },
    advBtns:{
        flexDirection: "column",
        alignSelf: "flex-start",
        flex: 1,
    },
    opsBtns:{
        flexDirection: "row",
        width: "105%",
        justifyContent: "space-evenly",
    },
})
export default Buttons;
