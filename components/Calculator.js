import { React, useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import SolarCell from "./SolarCell";

const Calculator = ({}) => {
	// const [digitOpacity, setDigitOpacity] = useState(1);
	const digitOpacity = useRef(new Animated.Value(0)).current;
	const [isOn, setIsOn] = useState(false);
	const [displayedDigits, setDisplayedDigits] = useState("0");
	const [argA, setArgA] = useState("0");
	const [argB, setArgB] = useState();
	const [result, setResult] = useState();
	const [opr, setOpr] = useState("+");

	//argA.length != 0 ? setArgB(displayedDigits)

	useEffect(() => {
		setDisplayedDigits("0");
		//console.log(argA + "@ useEffect");
	}, []);

	const onAndClear = () => {
		if (!isOn) {
			setDisplayedDigits("0");
			setIsOn(true);
			fadeIn();
		} else {
			setDisplayedDigits("0");
			setArgA("0");
		}
	};

	const handleOff = () => {
		if (isOn) {
			fadeOut();
			setDisplayedDigits("0");
			setIsOn(false);
		}
	};

	const fadeOut = () => {
		Animated.timing(digitOpacity, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const fadeIn = () => {
		Animated.timing(digitOpacity, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true,
		}).start();
	};

	// const clearWorkingDigits = () => setWorkingDigits([0]);

	const handleBtnPressed = (btnPressed, btnType) => {
		argA != "0" && setDisplayedDigits("0");

		if (btnType == "numBtns") {
			switch (btnPressed) {
				case ".":
					if (
						displayedDigits == "0" ||
						!displayedDigits.includes(".") ||
						argA != "0"
					) {
						setDisplayedDigits(displayedDigits + ".");
					}
					break;
				case "=":
					setDisplayedDigits(calculate(btnPressed));
					//setArgA("0");
					break;
				default: /////  btnPressed is a number  /////
					displayedDigits == "0" || argA != "0"
						? setDisplayedDigits(btnPressed.toString())
						: setDisplayedDigits(
								displayedDigits + btnPressed.toString()
						  );
					break;
			}
		} else if (btnType == "opsBtns") {
			argA != "0" && calculate(btnPressed);
			setOpr(btnPressed);
			setArgA(displayedDigits);
		}
		console.log(
			argA +
				" " +
				displayedDigits +
				": argA and displayedDigits @ end of handleBtnPressed"
		);
	};

	const calculate = (btnPressed) => {
		// let solution = parseInt(argA) + opr + parseInt(workingDigits);
		switch (opr) {
			case "+":
				// setDisplayedDigits(parseInt(argA) + parseInt(displayedDigits));
				setResult(parseInt(argA) + parseInt(displayedDigits));
				setArgA("0");
				return result;
			//setArgA(result);
			// setWorkingDigits(solution);
			//break;
			case "-":
				setDisplayedDigits(parseInt(argA) - parseInt(displayedDigits));
				break;
			case "\u00d7":
				setDisplayedDigits(parseInt(argA) * parseInt(displayedDigits));
				break;
			case "\u00F7":
				setDisplayedDigits(parseInt(argA) / parseInt(displayedDigits));
				break;
			default:
				break;
		}
		console.log(parseInt(argA) + " and " + opr + " @ calculate()");
		// setWorkingDigits(solution.toString());
	};

	return (
		<View style={styles.body}>
			<Text style={{ color: "black" }}>Calculator Component</Text>
			<SolarCell fadeOut={fadeOut} fadeIn={fadeIn} />
			<Display
				digitOpacity={digitOpacity}
				displayDigits={displayedDigits}
			/>
			<Buttons
				// handleInputChange={handleInputChange}
				handleOnClear={onAndClear}
				handleOff={handleOff}
				handleBtnPressed={handleBtnPressed}
				// workingDigits={workingDigits}
				// setWorkingDigits={setWorkingDigits}
				// setArgA={setArgA}
				// setOpr={setOpr}
				// calculate={calculate}
				// holdDisplay={keepDisplayButClearWorking}
				//// setDisplayedDigits={setDisplayedDigits}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		height: "75%",
		width: "90%",
		padding: 14,
		// overflow: "hidden",
		borderWidth: 1,
		borderLeftWidth: 5,
		borderLeftColor: "deepskyblue",
		borderBottomColor: "lightskyblue",
		borderRightColor: "lightskyblue",
		borderTopColor: "deepskyblue",
		borderBottomWidth: 3,
		borderTopWidth: 1,
		backgroundColor: "dodgerblue",
		borderRadius: 10,
	},
});

export default Calculator;
