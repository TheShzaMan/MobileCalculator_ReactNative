import { React, useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import SolarCell from "./SolarCell";

const Calculator = ({}) => {
	// const [digitOpacity, setDigitOpacity] = useState(1);
	const digitOpacity = useRef(new Animated.Value(0)).current;
	const [isOn, setIsOn] = useState(false);
	const [workingDigits, setWorkingDigits] = useState([0]);
	const [displayedDigits, setDisplayedDigits] = useState(0);
	const [argA, setArgA] = useState();
	useEffect(() => {
		console.log(Array.isArray(workingDigits));
		// let tempDigits = parseInt(workingDigitsA);

		setDisplayedDigits(workingDigits);
		console.log("at Calculator useEffect: " + displayedDigits);
	}, [workingDigits]);

	const onAndClear = () => {
		if (!isOn) {
			setDisplayedDigits(0);
			fadeIn();
			setIsOn(true);
		} else {
			setWorkingDigits([0]);
			setDisplayedDigits(0);
		}
	};

	const handleOff = () => {
		if (isOn) {
			fadeOut();
			setDisplayedDigits([0]);
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
				handleOff={handleOff}
				handleOnClear={onAndClear}
				workingDigits={workingDigits}
				setWorkingDigits={setWorkingDigits}
				setArgA={setArgA}
				// setDisplayedDigits={setDisplayedDigits}
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
