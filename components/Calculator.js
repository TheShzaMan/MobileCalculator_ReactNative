import { React, useRef } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import SolarCell from "./SolarCell";

const Calculator = ({}) => {
	// const [digitOpacity, setDigitOpacity] = useState(1);
	const digitOpacity = useRef(new Animated.Value(1)).current;

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
			<Display digitOpacity={digitOpacity} />
			<Buttons />
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		height: "75%",
		width: "90%",
		padding: 14,
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
