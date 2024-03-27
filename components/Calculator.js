import { React, useEffect, useRef, useState } from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import SolarCell from "./SolarCell";
import { Dimensions } from 'react-native'; //using for style to get screen width for responsive fontsizes
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


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

	const handleClearMem = (btnPressed) => {
		btnPressed == "MRC" && setMem();
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


	const handleAdvBtns = (button) => {
		switch (button) {
			case "del":
				if (opr == null && prevOpr != null) {
					return displayedDigits;
				} else {
					let adjustedArr = displayedDigits.slice(0, -1);
					adjustedArr == ""
						? setDisplayedDigits("0")
						: setDisplayedDigits(adjustedArr);
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
			case "R·CM":
				mem && handleNumPressed(mem);
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
		const result = opr
			? calculate(opr).toString()
			: calculate("+").toString();
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
				const tempResult = calculate(opr ? opr : btnPressed).toString();
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
	};

	const calculate = (btnPressed) => {
		switch (btnPressed) {
			case "+":
				return parseFloat(argA) + parseFloat(argB);
			case "-":
				return parseFloat(argA) - parseFloat(argB);
			case "\u00d7":
				if ((btnPressed == "\u00d7") & (argB == "0")) return argA;
				return parseFloat(argA) * parseFloat(argB);
			case "\u00F7":
				if ((btnPressed == "\u00F7") & (argB == "0")) return argA;
				return parseFloat(argA) / parseFloat(argB);
			default:
				break;
		}
	};

	return (
		<View style={styles.body}>
		    <View style={styles.calculatorTop}>
                <View style={styles.brandContainer}>
                    <Text style={[styles.brand, {fontSize: brandFontSize}]}>SHEA·R</Text>
                    <Text style={[styles.brand, {fontSize: brandFontSize * 0.7}]}>sr-2705a</Text>
                </View>
			    <SolarCell fadeOut={fadeOut} fadeIn={fadeIn} />
			</View>
			<Display
				digitOpacity={digitOpacity}
				displayDigits={displayedDigits}
				mem={mem}
			/>
			<Buttons
				handleOnClear={onAndClear}
				handleOff={handleOff}
				handleClearMem={handleClearMem}
				handleBtnPressed={handleBtnPressed}
			/>
		</View>
	);
};
    // style only. getting dynamic fontsize and responsive calculator dimensions
    const { width, height } = Dimensions.get('window');
    const brandFontSize = width * 0.08;

    const baseAspectRatio = 0.65;
    const calculatorWidth = width * 0.85;
    const calculatorHeight = calculatorWidth * baseAspectRatio;
//console.log(1 / (calculatorWidth / calculatorHeight));
    const maxHeight = width * 1.46;
    const minHeight = width * 1.43;

const styles = StyleSheet.create({
	body: {
	    flex: 1,
		//padding: 14,
		padding: RFPercentage(1),
		width: calculatorWidth,
		height: calculatorHeight,
        maxHeight: maxHeight,
        minHeight: minHeight,
//		marginVertical: RFPercentage(15),
        justifyContent: 'space-around',
        alignItems: 'center',
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
	calculatorTop: {
	    flexDirection: "row",

	},
	brandContainer: {
	    alignItems: "flex-start",
	    //marginTop: '3%'
	    //borderWidth: 1,
	},
	brand: {
		color: "floralwhite",
		fontFamily: "audWide",
//		fontSize: brandFontSize,
//        fontSize: RFValue(30),
	},
//	brand2: {
////		fontSize: brandFontSize/1.5,
//		fontSize: RFValue(20),
//	},
});
export default Calculator;

