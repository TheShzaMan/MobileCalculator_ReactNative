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
	}, []);
	useEffect(() => {}, [displayedDigits]);

	const onAndClear = () => {
		if (!isOn) {
			setDisplayedDigits("0");
			setIsOn(true);
			fadeIn();
		} else {
			setDisplayedDigits("0");
			setArgA("0");
			setArgB("0");
			setOpr();
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
			// oprBtn has not been pressed since clear
			if (argA === "0") {
				setArgA(btnPressed.toString());
				setDisplayedDigits(btnPressed.toString());
			} else {
				if ((btnPressed == ".") & argA.includes(".")) {
				} else {
					setArgA((prevA) => {
						const updatedA = prevA + btnPressed.toString();
						setDisplayedDigits(updatedA);
						return updatedA;
					});
				}
			}
		} else {
			//  oprBtn has been pushed at least once.
			if (argB == "0") {
				setArgB(btnPressed.toString());
				setDisplayedDigits(btnPressed.toString());
			} else {
				setArgB((prevB) => {
					const updatedB = prevB + btnPressed.toString();
					setDisplayedDigits(updatedB);
					return updatedB;
				});
			}
		}
	};

	const handleEqual = () => {
		setDisplayedDigits(calculate(opr));
		setArgA(argB);
		console.log(calculate(opr) + " calculate() @ handleEqual");
		setArgB("0");
	};

	const handleBtnPressed = (btnPressed, btnType) => {
		if (btnType == "numBtns") {
			switch (btnPressed) {
				case "=":
					handleEqual();
					break;
				default: //// number or decimal is pressed
					handleNumPressed(btnPressed);
			}
		} else if (btnType == "opsBtns") {
			setOpr(btnPressed);
			setDisplayedDigits(calculate(btnPressed));
		}
	};

	const calculate = (btnPressed) => {
		switch (btnPressed) {
			case "+":
				return parseFloat(argA) + parseFloat(argB);
			case "-":
				return parseFloat(argA) - parseFloat(argB);
			case "\u00d7":
				if ((btnPressed == "\u00d7") & (argB == "0")) return argA;
				return parseFloat(argA) * parseFloat(argB); // calculating on opsBtn press wrong when B is zero
			case "\u00F7":
				if ((btnPressed == "\u00F7") & (argB == "0")) return argA;
				return parseFloat(argA) / parseFloat(argB);
			default:
				break;
		}
		console.log(parseFloat(argA) + " and " + opr + " @ calculate()");
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
				handleOnClear={onAndClear}
				handleOff={handleOff}
				handleBtnPressed={handleBtnPressed}
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
