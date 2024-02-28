import { React, useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import SolarCell from "./SolarCell";

const Calculator = ({}) => {
	const [isOn, setIsOn] = useState(false); ////////////////////////// 1
	const [displayedDigits, setDisplayedDigits] = useState("0"); /// 2
	const digitOpacity = useRef(new Animated.Value(0)).current; // 3
	const [argA, setArgA] = useState("0"); ////////////////////////// 4
	const [argB, setArgB] = useState("0"); /////////////////////////// 5
	const [result, setResult] = useState(); /////////////////////////// 6
	const [opr, setOpr] = useState(); //////////////////////////////// 7
	////\\\\////\\\\//// route to debug with React DevTools is run app with npx expo start,
	////\\\\\\///////\\\ once running, shift+m for menu then down to Open React devtools

	useEffect(() => {
		setDisplayedDigits("0");
		//console.log(argA + "@ useEffect");
	}, []);
	useEffect(() => {
		console.log(displayedDigits);
	}, [displayedDigits]);

	const onAndClear = () => {
		if (!isOn) {
			setDisplayedDigits("0");
			setIsOn(true);
			fadeIn();
		} else {
			setDisplayedDigits("0");
			setArgA("0");
			setArgB("0");
			setResult();
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

	const handleNumPressed = (btnPressed) => {
		if (opr == null) {
			if (argA == "0") {
				setArgA(btnPressed);
				setDisplayedDigits(btnPressed);
			} else {
				setArgA((prevA) => {
					const updatedA = prevA + btnPressed.toString();
					setDisplayedDigits(updatedA);
					return updatedA;
				});
			}
		} else {
			if (argB == "0") {
				setArgB(btnPressed);
				setDisplayedDigits(btnPressed);
			} else {
				setArgB((prevB) => {
					const updatedB = prevB + btnPressed.toString();
					setDisplayedDigits(updatedB);
					return updatedB;
				});
			}
		}
	};
	const handleBtnPressed = (btnPressed, btnType) => {
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
					setDisplayedDigits(calculate());
					setArgA(argB);
					setArgB("0");
					break;
				default:
					handleNumPressed(btnPressed);
			}
		} else if (btnType == "opsBtns") {
			argA != "0" &&
				function () {
					setArgB(displayedDigits);
					setDisplayedDigits(calculate());
					// setArgA(argB);
					// setArgB("0");
				};
			setOpr(btnPressed);
			setArgA(displayedDigits);
			console.log(
				argA +
					" " +
					displayedDigits +
					": argA and displayedDigits @ end of handleBtnPressed"
			);
		}
	};
	const calculate = () => {
		// let solution = parseInt(argA) + opr + parseInt(workingDigits);
		switch (opr) {
			case "+":
				// setDisplayedDigits(parseInt(argA) + parseInt(displayedDigits));
				return parseInt(argA) + parseInt(argB);

			//return result;
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
