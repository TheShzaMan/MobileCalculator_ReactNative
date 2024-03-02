import { React, useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, Animated, Button } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import SolarCell from "./SolarCell";

const Calculator = ({}) => {
	const [isOn, setIsOn] = useState(false); ////////////////////////// 1
	const [displayedDigits, setDisplayedDigits] = useState("0"); /// 2
	const digitOpacity = useRef(new Animated.Value(0)).current; // 3
	const [argA, setArgA] = useState("0"); ////////////////////////// 4
	const [argB, setArgB] = useState("0"); /////////////////////////// 5
	const [opr, setOpr] = useState(); //////////////////////////////// 6
	const [prevOpr, setPrevOpr] = useState(); /////////////////////// 7
	const [mem, setMem] = useState(); //////////////////////////////8

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
			setPrevOpr();
		}
	};

	const handleOff = () => {
		if (isOn) {
			fadeOut();
			setDisplayedDigits("0");
			setMem();
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
			if ((argA === "0") | ((opr == null) & (prevOpr != null))) {
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

	const handleAdvBtns = (button) => {
		switch (button) {
			case "del":
				if (opr == null && prevOpr != null) {
					return displayedDigits;
				} else {
					let adjustedArr = displayedDigits.slice(0, -1);
					setDisplayedDigits(adjustedArr);
					if ((displayedDigits == argA) & (argB === "0")) {
						setArgA(adjustedArr);
					} else {
						setArgB(adjustedArr);
					}
				}
				break;
			case "M+":
				setMem(displayedDigits);
				break;
			case "MR":
				handleNumPressed(mem);
				break;
			case "%":
				let asPercent = displayedDigits / 100;
				setDisplayedDigits(asPercent);
				if ((displayedDigits == argA) & (argB === "0")) {
					setArgA(asPercent);
				} else {
					setArgB(asPercent);
				}
				break;
			default:
				break;
		}
	};

	const getResult = () => {
		const result = calculate(opr);
		setDisplayedDigits(result);
		setArgA(result);
		setArgB("0");
		setOpr();
	};

	const handleBtnPressed = (btnPressed, btnType) => {
		switch (btnType) {
			case "numBtns":
				btnPressed == "=" ? getResult() : handleNumPressed(btnPressed);
				break;
			case "opsBtns":
				setPrevOpr(opr ? opr : btnPressed);
				const tempResult = calculate(opr ? opr : btnPressed);
				setOpr(btnPressed);
				setDisplayedDigits(tempResult);
				setArgA(tempResult);
				setArgB("0");
				break;
			case "advBtns":
				handleAdvBtns(btnPressed);
			default:
				break;
		}
		// if (btnType == "numBtns") {
		// 	switch (btnPressed) {
		// 		case "=":
		// 			getResult();
		// 			break;
		// 		default: //// number or decimal is pressed
		// 			handleNumPressed(btnPressed);
		// 	}
		// } else if (btnType == "opsBtns") {
		// 	setOpr(btnPressed);
		// 	const tempResult = calculate(btnPressed);
		// 	setDisplayedDigits(tempResult);
		// 	setArgA(tempResult);
		// 	setArgB("0");
		// }
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
				mem={mem}
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
