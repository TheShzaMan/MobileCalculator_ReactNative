import { React, useRef, useState, useEffect } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import SolarCell from "./SolarCell";

const Calculator = ({}) => {
	// const [digitOpacity, setDigitOpacity] = useState(1);
	const digitOpacity = useRef(new Animated.Value(0)).current;
	const [isOn, setIsOn] = useState(false);
	const [displayDigits, setDisplayDigits] = useState([0]);

	useEffect(() => {
		setDisplayDigits([0]);
	}, []);
	useEffect(() => {
		console.log(isOn);
	}, [isOn]);

	const onAndClear = () => {
		if (!isOn) {
			fadeIn();
			setIsOn(true);
		} else {
			setDisplayDigits([0]);
		}
		// console.log(isOn);
	};
	const handleOff = () => {
		if (isOn) {
			fadeOut();
			setDisplayDigits([0]);
			setIsOn(false);
		}
	};
	const enterNum = (btn) => {
		setDisplayDigits(displayDigits.push(btn));
		console.log(displayDigits);
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
				displayDigits={displayDigits}
			/>
			<Buttons
				enterNum={enterNum}
				handleOff={handleOff}
				handleOnClear={onAndClear}
				setIsOn={setIsOn}
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
